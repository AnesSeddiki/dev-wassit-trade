import { Baloo_2, Work_Sans } from "next/font/google";
import RazziNav from "./_components/RazziNav";
import RazziFooter from "./_components/RazziFooter";

const baloo = Baloo_2({
  variable: "--font-razzi-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-razzi-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RazziLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${baloo.variable} ${workSans.variable} flex min-h-screen flex-col bg-white text-[#1a1a1a]`}
      style={{ fontFamily: "var(--font-razzi-body)" }}
    >
      <RazziNav />
      <main className="flex-1">{children}</main>
      <RazziFooter />
    </div>
  );
}
