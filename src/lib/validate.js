const FA = "۰۱۲۳۴۵۶۷۸۹";
const AR = "٠١٢٣٤٥٦٧٨٩";

// ارقام فارسی و عربی را به لاتین تبدیل می‌کند
export function toLatinDigits(s = "") {
  return String(s).replace(/[۰-۹٠-٩]/g, (d) => {
    const i = FA.indexOf(d);
    return String(i > -1 ? i : AR.indexOf(d));
  });
}

export function isValidIranMobile(phone) {
  const p = toLatinDigits(phone).replace(/[\s-]/g, "");
  return /^(\+98|0098|0)?9\d{9}$/.test(p);
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}
