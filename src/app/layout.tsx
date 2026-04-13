import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../../public/fonts/satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../../public/fonts/satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../../public/fonts/satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/satoshi/Satoshi-Black.otf", weight: "900", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "Light Yagami — Web Systems Developer",
  description: "Portfolio of Light Yagami, Web Systems Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${satoshi.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
