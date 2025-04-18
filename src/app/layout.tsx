import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-2 z-50 shadow-lg">
        <Link href="/BidBoard">
          <button className="text-white font-bold text-lg tracking-wide hover:underline">
            🚨 BidBoard: คลิกเพื่อร่วมตัดสินการบิด!
          </button>
        </Link>
        
        </div>
        
        <div className="flex flex-row  bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col items-center justify-center bg-gradient-to-rw-[10%] h-screen px-2 ">
            <h1 className="text-xl font-extrabold text-gray-900 px-2 drop-shadow-lg animate-pulse py-32 bg-white my-10">
              AD HERE
            </h1>

            <h1 className="text-xl font-extrabold text-gray-900 px-2 drop-shadow-lg animate-pulse py-32 bg-white my-10">
              AD HERE
            </h1>

            <h1 className="text-xl font-extrabold text-gray-900 px-2 drop-shadow-lg animate-pulse py-32 bg-white my-10">
              AD HERE
            </h1>
          </div>
        
          <div className="w-[80%]">
          {children}
          </div>

          <div className="flex flex-col items-center justify-center bg-gradient-to-rw-[10%] h-screen px-2 ">
            <h1 className="text-xl font-extrabold text-gray-900 px-2 drop-shadow-lg animate-pulse py-32 bg-white my-10">
              AD HERE
            </h1>

            <h1 className="text-xl font-extrabold text-gray-900 px-2 drop-shadow-lg animate-pulse py-32 bg-white my-10">
              AD HERE
            </h1>

            <h1 className="text-xl font-extrabold text-gray-900 px-2 drop-shadow-lg animate-pulse py-32 bg-white my-10">
              AD HERE
            </h1>
          </div>
        </div>
      </body>
    </html>
  );
}
