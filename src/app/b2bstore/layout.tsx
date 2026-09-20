import { DM_Mono, DM_Sans, Source_Serif_4 } from "next/font/google";
import B2BNav from "./_components/B2BNav";
import B2BFooter from "./_components/B2BFooter";

const sourceSerif = Source_Serif_4({
  variable: "--font-b2b-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-b2b-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-b2b-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function B2BStoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${sourceSerif.variable} ${dmSans.variable} ${dmMono.variable} flex min-h-screen flex-col bg-white text-[#142433]`}
      style={{ fontFamily: "var(--font-b2b-sans)" }}
    >
      <B2BNav />
      <main className="flex-1">{children}</main>
      <B2BFooter />
    </div>
  );
}
