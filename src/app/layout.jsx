import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Demigod Infinity",
  description: "Demigod Infinity group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* <footer className=" bg-zinc-900 flex flex-col items-center py-8">
          <img
            src="/logo/logo-full.png"
            className="mix-blend-screen h-12"
            alt=""
          />
        </footer> */}
        <Footer />
      </body>
    </html>
  );
}
