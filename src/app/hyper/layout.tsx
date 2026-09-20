import { Bodoni_Moda, Manrope } from "next/font/google";
import HyperNav from "./_components/HyperNav";
import HyperFooter from "./_components/HyperFooter";

const bodoniModa = Bodoni_Moda({
  variable: "--font-hyper-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-hyper-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function HyperLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${bodoniModa.variable} ${manrope.variable} flex min-h-screen flex-col bg-[#0a0a0a] text-[#f5f2ea]`}
      style={{ fontFamily: "var(--font-hyper-body)" }}
    >
      <HyperNav />
      <main className="flex-1">{children}</main>
      <HyperFooter />
    </div>
  );
}
