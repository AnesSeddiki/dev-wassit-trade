import { Quicksand, Nunito_Sans } from "next/font/google";
import SubtleNav from "./_components/SubtleNav";
import SubtleFooter from "./_components/SubtleFooter";

const quicksand = Quicksand({
  variable: "--font-subtle-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-subtle-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function SubtleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${quicksand.variable} ${nunitoSans.variable} flex min-h-screen flex-col bg-[#f6f3ef] text-[#3a3a34]`}
      style={{ fontFamily: "var(--font-subtle-body)" }}
    >
      <SubtleNav />
      <main className="flex-1">{children}</main>
      <SubtleFooter />
    </div>
  );
}
