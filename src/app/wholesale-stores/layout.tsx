import { Oswald, Public_Sans, Courier_Prime } from "next/font/google";
import WSNav from "./_components/WSNav";
import WSFooter from "./_components/WSFooter";

const oswald = Oswald({
  variable: "--font-ws-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-ws-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const courierPrime = Courier_Prime({
  variable: "--font-ws-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WholesaleStoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${oswald.variable} ${publicSans.variable} ${courierPrime.variable} flex min-h-screen flex-col bg-[#e5e2da] text-[#1c1c1c]`}
      style={{ fontFamily: "var(--font-ws-body)" }}
    >
      <WSNav />
      <main className="flex-1">{children}</main>
      <WSFooter />
    </div>
  );
}
