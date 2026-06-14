import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebDev Studio — Создание сайтов и Telegram ботов",
  description:
    "Разработка современных веб-страниц и Telegram ботов под ключ. Быстро, качественно, недорого.",
  verification: {
    google: "zwFCdpmmB03k4unraJRZSBpOhd6lPLs23Pbqlp08iOI",
  },
  other: {
    "geo.region": "RU-IN",
    "geo.placename": "Ингушетия, Россия",
    "geo.position": "43.1663;44.8285",
    "ICBM": "43.1663, 44.8285",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-zinc-900">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-zinc-900 border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} WebDev Studio. Все права защищены.</p>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}