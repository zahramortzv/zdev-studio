import { NextResponse } from "next/server";
import { isValidIranMobile, isValidEmail, toLatinDigits } from "@/lib/validate";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  // honeypot: ربات‌ها این فیلد را پر می‌کنند؛ بی‌صدا موفق برمی‌گردانیم
  if (body?.website) return NextResponse.json({ ok: true });

  const data = {
    name: clip(body?.name, 100),
    phone: toLatinDigits(clip(body?.phone, 20)),
    email: clip(body?.email, 120),
    service: clip(body?.service, 100),
    message: clip(body?.message, 2000),
    budget: clip(body?.budget, 100),
    deadline: clip(body?.deadline, 100),
  };

  if (
    data.name.length < 2 ||
    !isValidIranMobile(data.phone) ||
    !data.service ||
    (data.email && !isValidEmail(data.email))
  ) {
    return NextResponse.json({ error: "invalid data" }, { status: 422 });
  }

  const text = [
    "سفارش جدید از سایت",
    `نام: ${data.name}`,
    `موبایل: ${data.phone}`,
    data.email && `ایمیل: ${data.email}`,
    `خدمات: ${data.service}`,
    data.budget && `بودجه: ${data.budget}`,
    data.deadline && `زمان: ${data.deadline}`,
    data.message && `توضیحات: ${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  // مقصدها: هر کدام که تنظیم شده باشد (تلگرام، بله یا هر دو)
  const targets = [];
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    targets.push({
      name: "telegram",
      url: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      chatId: process.env.TELEGRAM_CHAT_ID,
    });
  }
  if (process.env.BALE_BOT_TOKEN && process.env.BALE_CHAT_ID) {
    targets.push({
      name: "bale",
      url: `https://tapi.bale.ai/bot${process.env.BALE_BOT_TOKEN}/sendMessage`,
      chatId: process.env.BALE_CHAT_ID,
    });
  }

  // بدون هیچ تنظیمی: در حالت توسعه فقط در ترمینال چاپ می‌شود.
  // در پروداکشن خطا برمی‌گردد تا سفارش بی‌صدا گم نشود.
  if (targets.length === 0) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[order]\n" + text);
      return NextResponse.json({ ok: true });
    }
    console.error("هیچ مقصدی (تلگرام یا بله) در env تنظیم نشده است.");
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  const results = await Promise.allSettled(
    targets.map(async (t) => {
      const res = await fetch(t.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: t.chatId, text }),
        signal: AbortSignal.timeout(8000), // اگر سرور به پیام‌رسان دسترسی نداشت، گیر نکند
      });
      if (!res.ok) throw Object.assign(new Error(`${t.name} ${res.status}`), { isHttp: true });
    })
  );

  // فقط نام مقصد و کد خطا؛ هیچ توکن یا آدرسی داخلش نیست
  const describe = (err) =>
    err?.isHttp
      ? err.message
      : [err?.name, err?.cause?.code].filter(Boolean).join(" ") || "unknown error";

  const details = results.map((r, i) => ({
    target: targets[i].name,
    ok: r.status === "fulfilled",
    ...(r.status === "rejected" && { reason: describe(r.reason) }),
  }));

  details.forEach((d) => {
    if (!d.ok) console.error(`order send failed (${d.target}): ${d.reason}`);
  });

  // اگر حداقل یک مقصد دریافت کرد، موفق حساب می‌شود
  if (details.some((d) => d.ok)) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ error: "send failed", details }, { status: 502 });
}