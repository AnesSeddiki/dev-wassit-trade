import { Oswald, Roboto } from "next/font/google";
import AutoNav from "./_components/AutoNav";
import AutoFooter from "./_components/AutoFooter";

const oswald = Oswald({
  variable: "--font-auto-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-auto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function AutoPartsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${oswald.variable} ${roboto.variable} flex min-h-screen flex-col bg-[#16181c] text-[#e7e6e2]`}
      style={{ fontFamily: "var(--font-auto-sans)" }}
    >
      <AutoNav />
      <main className="flex-1">{children}</main>
      <AutoFooter />
    </div>
  );
}
