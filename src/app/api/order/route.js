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

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // بدون تنظیمات تلگرام: در حالت توسعه فقط در ترمینال چاپ می‌شود.
  // در پروداکشن خطا برمی‌گردد تا سفارش بی‌صدا گم نشود.
  if (!token || !chatId) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[order]\n" + text);
      return NextResponse.json({ ok: true });
    }
    console.error("TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID تنظیم نشده است.");
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!res.ok) throw new Error(`telegram ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("order send failed:", err);
    return NextResponse.json({ error: "send failed" }, { status: 502 });
  }
}
