import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff", // パスを確認
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff", // パスを確認
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/placeholder.svg" // 正しいパスに変更
            alt="Placeholder"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {children}
      </body>
    </html>
  );
}