import { Archivo, Archivo_Black } from "next/font/google";
import DukakenNav from "./_components/DukakenNav";
import DukakenFooter from "./_components/DukakenFooter";

const archivoBlack = Archivo_Black({
  variable: "--font-dukaken-display",
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  variable: "--font-dukaken-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DukakenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${archivoBlack.variable} ${archivo.variable} flex min-h-screen flex-col bg-white text-[#111827]`}
      style={{ fontFamily: "var(--font-dukaken-body)" }}
    >
      <DukakenNav />
      <main className="flex-1">{children}</main>
      <DukakenFooter />
    </div>
  );
}
