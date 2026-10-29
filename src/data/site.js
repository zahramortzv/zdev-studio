// اطلاعات کلی سایت. فقط همین فایل را برای اطلاعات تماس عوض کن.
export const SITE = {
  name: "ZDEV Studio",
  description:
    "طراحی و توسعه سایت شرکتی، فروشگاه آنلاین و لندینگ‌پیج با Next.js؛ سریع، ریسپانسیو و آماده‌ی سئو.",
};

// هر مورد را که خالی بگذاری، در بخش «تماس با ما» نمایش داده نمی‌شود.
export const CONTACT = {
  phone: "", // مثلاً "09121234567"
  whatsapp: "", // مثلاً "https://wa.me/989121234567"
  telegram: "", // مثلاً "https://t.me/your_id"
  instagram: "", // مثلاً "https://instagram.com/your_id"
  email: "", // مثلاً "info@example.com"
  address: "", // اختیاری
};

// href باید با id هر بخش یکی باشد
export const NAV_ITEMS = [
  { id: "home", label: "صفحه اصلی" },
  { id: "services", label: "خدمات" },
  // { id: "projects", label: "نمونه کارها" },
  { id: "process", label: "فرایند کار" },
  { id: "about", label: "درباره ما" },
  { id: "faq", label: "سوالات متداول" },
  { id: "contact", label: "تماس با ما" },
];
