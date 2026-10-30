// اطلاعات کلی سایت. فقط همین فایل را برای اطلاعات تماس عوض کن.
export const SITE = {
  name: "ZDEV Studio",
  description:
    "طراحی و توسعه سایت شرکتی، فروشگاه آنلاین و لندینگ‌پیج با Next.js؛ سریع، ریسپانسیو و آماده‌ی سئو.",
};

export const CONTACT = {
  phone: "",
  whatsapp: "",
  telegram: "https://t.me/",
  instagram: "https://instagram.com/",
  email: ".",
  address: "",
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
