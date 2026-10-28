import {
  OrderIcon,
  RequirementsIcon,
  WireframeIcon,
  DevelopIcon,
  TestIcon,
  SupportIcon,
} from "@/features/components/UI/Icons";

export const steps = [
  { title: "ثبت درخواست پروژه", description: "پر کردن فرم یا تماس اولیه", icon: <OrderIcon /> },
  { title: "مشخص کردن نیازها", description: "جلسه برای تعیین دقیق اهداف", icon: <RequirementsIcon /> },
  { title: "طراحی وایرفریم", description: "طراحی ساختار صفحات قبل از توسعه", icon: <WireframeIcon /> },
  { title: "توسعه وبسایت", description: "پیاده‌سازی پروژه طبق طراحی تایید شده", icon: <DevelopIcon /> },
  { title: "تست و تحویل", description: "بررسی کیفیت و ارائه نسخه کامل", icon: <TestIcon /> },
  { title: "پشتیبانی و آپدیت", description: "نگهداری و ارائه آپدیت‌های دوره‌ای", icon: <SupportIcon /> },
];
