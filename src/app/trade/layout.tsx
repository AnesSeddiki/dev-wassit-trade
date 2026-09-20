import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import TradeNav from "./_components/TradeNav";
import TradeFooter from "./_components/TradeFooter";

const plexMono = IBM_Plex_Mono({
  variable: "--font-trade-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-trade-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TradeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${plexMono.variable} ${plexSans.variable} flex min-h-screen flex-col bg-[#f7f6f2] text-[#0f172a]`}
      style={{ fontFamily: "var(--font-trade-sans)" }}
    >
      <TradeNav />
      <main className="flex-1">{children}</main>
      <TradeFooter />
    </div>
  );
}
