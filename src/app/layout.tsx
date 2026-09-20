import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wassit DEV",
  description:
    "Wassit TradeDEV presents our suppliers' storefronts — ten wholesale template concepts for apparel buyers, each inspired by a leading B2B commerce theme.",
  icons: {
    icon: "/wassit-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0b0d] text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
