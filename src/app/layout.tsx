import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "クーチョー研究・保存会",
  description: "沖縄の伝統楽器クーチョーの研究と保存活動",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-50`}>
        <header className="relative h-[100px] overflow-hidden">
          <div className="container mx-auto px-4">
            <Image
              src="/images/header-image.png"
              alt="クーチョー研究・保存会"
              width={200}
              height={100}
              objectFit="cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-70">
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                クーチョー研究・保存会
              </h1>
            </div>
          </div>
        </header>
        <nav className="bg-gradient-to-r from-orange-400 to-red-400 p-4 shadow-md">
          <ul className="flex justify-center space-x-6">
            <li><Link href="/" className="text-white hover:text-yellow-200 transition duration-300 ease-in-out font-semibold">ホーム</Link></li>
            <li><Link href="/about" className="text-white hover:text-yellow-200 transition duration-300 ease-in-out font-semibold">概要</Link></li>
            <li><Link href="/activities" className="text-white hover:text-yellow-200 transition duration-300 ease-in-out font-semibold">活動内容</Link></li>
            <li><Link href="/contact" className="text-white hover:text-yellow-200 transition duration-300 ease-in-out font-semibold">お問い合わせ</Link></li>
          </ul>
        </nav>
        <main className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg my-8">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-center p-6">
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">© 2024 クーチョー研究・保存会</p>
            <div className="flex justify-center space-x-4">
              <Link href="/privacy" className="hover:text-yellow-200 transition duration-300 ease-in-out">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-yellow-200 transition duration-300 ease-in-out">利用規約</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}