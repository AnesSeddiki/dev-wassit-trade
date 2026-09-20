import { Bricolage_Grotesque, Karla } from "next/font/google";
import ZorkaNav from "./_components/ZorkaNav";
import ZorkaFooter from "./_components/ZorkaFooter";

const display = Bricolage_Grotesque({
  variable: "--font-zorka-display",
  subsets: ["latin"],
});

const body = Karla({
  variable: "--font-zorka-body",
  subsets: ["latin"],
});

export default function ZorkaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${display.variable} ${body.variable} flex min-h-screen flex-col bg-white text-[#111111]`}
      style={{ fontFamily: "var(--font-zorka-body)" }}
    >
      <ZorkaNav />
      <main className="flex-1">{children}</main>
      <ZorkaFooter />
    </div>
  );
}
