import "./globals.css";
import { SITE } from "@/data/site";

export const metadata = {
  title: `${SITE.name} | طراحی و توسعه سایت و فروشگاه آنلاین`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} | طراحی و توسعه سایت و فروشگاه آنلاین`,
    description: SITE.description,
    locale: "fa_IR",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#252B42",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <noscript>
          <style>{`[class*="opacity-0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
