import { Cormorant_Garamond, Jost } from "next/font/google";
import ModivaNav from "./_components/ModivaNav";
import ModivaFooter from "./_components/ModivaFooter";

const display = Cormorant_Garamond({
  variable: "--font-modiva-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Jost({
  variable: "--font-modiva-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function ModivaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${display.variable} ${body.variable} flex min-h-screen flex-col bg-[#f7f1e8] text-[#2b2420]`}
      style={{ fontFamily: "var(--font-modiva-body)" }}
    >
      <ModivaNav />
      <main className="flex-1">{children}</main>
      <ModivaFooter />
    </div>
  );
}
