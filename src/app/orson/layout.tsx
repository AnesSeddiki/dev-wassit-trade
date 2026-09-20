import { Alfa_Slab_One, Vollkorn } from "next/font/google";
import OrsonNav from "./_components/OrsonNav";
import OrsonFooter from "./_components/OrsonFooter";

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-orson-display",
  subsets: ["latin"],
  weight: ["400"],
});

const vollkorn = Vollkorn({
  variable: "--font-orson-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function OrsonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${alfaSlabOne.variable} ${vollkorn.variable} flex min-h-screen flex-col bg-[#f4e8d0] text-[#3b2a1a]`}
      style={{ fontFamily: "var(--font-orson-serif)" }}
    >
      <OrsonNav />
      <main className="flex-1">{children}</main>
      <OrsonFooter />
    </div>
  );
}
