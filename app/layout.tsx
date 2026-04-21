import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Маржинатор — реальная прибыль по каждому товару на OZON",
  description:
    "Аналитика прибыли для продавцов Ozon. Автоматически, точно, без лишнего. Подключение за 2 минуты, первые 14 дней бесплатно.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
