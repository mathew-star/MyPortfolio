import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight:["100","200","300","400","500","600","700","800"]
  , variable: '--font-jetbrainsMono'
 });

export const metadata: Metadata = {
  title: "Mathew Joseph",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body className={jetbrainsMono.variable}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
