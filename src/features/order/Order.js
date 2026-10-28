"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import Button from "../components/UI/Button";
import Reveal from "../components/UI/Reveal";
import { isValidIranMobile, isValidEmail } from "@/lib/validate";

const SERVICES = [
    "طراحی سایت شرکتی",
    "طراحی فروشگاه آنلاین",
    "طراحی لندینگ‌پیج",
    "بازطراحی سایت قدیمی",
    "سئو / پشتیبانی",
    "سایر",
];

const EMPTY = {
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    budget: "",
    deadline: "",
    website: "", // honeypot: کاربر واقعی این فیلد را نمی‌بیند
};

const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-navy placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

function Field({ label, htmlFor, required, error, children }) {
    return (
        <div>
            <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy">
                {label}
                {required && <span className="mr-1 text-red-600" aria-hidden="true">*</span>}
            </label>
            {children}
            {error && (
                <p id={`${htmlFor}-error`} className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}

export default function OrderForm() {
    const [formData, setFormData] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((f) => ({ ...f, [name]: value }));
        if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    };

    const validate = () => {
        const er = {};
        if (formData.name.trim().length < 2) er.name = "نام خود را وارد کنید.";
        if (!isValidIranMobile(formData.phone)) er.phone = "شماره موبایل معتبر وارد کنید (مثلاً ۰۹۱۲۱۲۳۴۵۶۷).";
        if (formData.email && !isValidEmail(formData.email)) er.email = "ایمیل معتبر نیست.";
        if (!formData.service) er.service = "یکی از خدمات را انتخاب کنید.";
        return er;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const er = validate();
        setErrors(er);
        if (Object.keys(er).length) return;

        setStatus("sending");
        try {
            const res = await fetch("/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("request failed");
            setStatus("success");
            setFormData(EMPTY);
        } catch {
            setStatus("error");
        }
    };

    return (
        <Section id="order">
            <Title
                text="ثبت سفارش"
                subtitle="فرم را پر کنید تا برای هماهنگی جلسه‌ی اول با شما تماس بگیریم."
            />
            <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
                {status === "success" ? (
                    <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                        <p className="text-lg font-bold text-green-800">درخواست شما ثبت شد.</p>
                        <p className="mt-2 text-green-800">در اسرع وقت با شما تماس می‌گیریم.</p>
                        <div className="mt-6">
                            <Button text="ثبت سفارش جدید" variant="dark" onClick={() => setStatus("idle")} />
                        </div>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="grid gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm sm:grid-cols-2 md:p-8"
                    >
                        <Field label="نام و نام خانوادگی" htmlFor="name" required error={errors.name}>
                            <input id="name" name="name" type="text" autoComplete="name" value={formData.name}
                                onChange={handleChange} aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined} className={inputClass} />
                        </Field>

                        <Field label="شماره موبایل" htmlFor="phone" required error={errors.phone}>
                            <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr"
                                value={formData.phone} onChange={handleChange} placeholder="09xxxxxxxxx"
                                aria-invalid={!!errors.phone}
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                                className={`${inputClass} text-right`} />
                        </Field>

                        <Field label="ایمیل (اختیاری)" htmlFor="email" error={errors.email}>
                            <input id="email" name="email" type="email" autoComplete="email" dir="ltr"
                                value={formData.email} onChange={handleChange} aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className={`${inputClass} text-right`} />
                        </Field>

                        <Field label="نوع خدمات" htmlFor="service" required error={errors.service}>
                            <select id="service" name="service" value={formData.service} onChange={handleChange}
                                aria-invalid={!!errors.service}
                                aria-describedby={errors.service ? "service-error" : undefined} className={inputClass}>
                                <option value="">انتخاب کنید</option>
                                {SERVICES.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </Field>

                        <div className="sm:col-span-2">
                            <Field label="توضیحات پروژه" htmlFor="message">
                                <textarea id="message" name="message" rows={4} value={formData.message}
                                    onChange={handleChange} maxLength={2000} className={inputClass} />
                            </Field>
                        </div>

                        <Field label="بودجه تقریبی (اختیاری)" htmlFor="budget">
                            <input id="budget" name="budget" type="text" value={formData.budget}
                                onChange={handleChange} className={inputClass} />
                        </Field>

                        <Field label="زمان مورد انتظار (اختیاری)" htmlFor="deadline">
                            <input id="deadline" name="deadline" type="text" value={formData.deadline}
                                onChange={handleChange} className={inputClass} />
                        </Field>

                        {/* honeypot */}
                        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                            <label htmlFor="website">وب‌سایت</label>
                            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off"
                                value={formData.website} onChange={handleChange} />
                        </div>

                        <div className="sm:col-span-2">
                            {status === "error" && (
                                <p role="alert" className="mb-3 rounded-xl bg-red-50 p-3 text-sm text-red-700">
                                    ارسال انجام نشد. لطفاً دوباره تلاش کنید یا از بخش تماس با ما پیام بدهید.
                                </p>
                            )}
                            <Button type="submit" text={status === "sending" ? "در حال ارسال…" : "ثبت سفارش"}
                                disabled={status === "sending"} fullWidth size="lg" />
                        </div>
                    </form>
                )}

                <div className="hidden justify-center lg:flex">
                    <Image src="/images/order.svg" alt="" width={300} height={300} className="h-auto w-full animate-float" />
                </div>
            </div>
            </Reveal>
        </Section>
    );
}
