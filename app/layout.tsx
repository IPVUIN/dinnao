import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import { SITE_URL } from "@/lib/data";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-kanit",
  display: "swap",
});

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ดินเน่า",
  description:
    "ดินเน่า ผลิตภัณฑ์ปรับปรุงบำรุงดิน ฟื้นฟูดินเสื่อม เพิ่มจุลินทรีย์ที่เป็นประโยชน์ ช่วยให้รากพืชแข็งแรง ใช้ได้กับพืชทุกชนิด",
  alternates: {
    canonical: "/",
  },
};

const themeInit = `try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      data-theme="light"
      className={`${kanit.variable} ${sarabun.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInit }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
