import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import Navbar from "@/components/Navbar";

export const viewport: Viewport = {
  themeColor: "#e19405",
};

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sloba Todo",
  description: "Sloba Todo Next.js and Prisma",
  openGraph: {
    siteName: 'Next.js Course'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="py-20 max-w-6xl mx-auto">
        {children}
        </main>
        </body>
    </html>
  );
}
