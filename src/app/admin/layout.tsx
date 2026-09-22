import type { Metadata } from "next";
import { Suspense } from "react";
import AdminSidebar from "./_components/AdminSidebar";
import AdminTopbar from "./_components/AdminTopbar";
import AdminTemplateBadge from "./_components/AdminTemplateBadge";

export const metadata: Metadata = {
  title: "Admin — Wholesale Dashboard",
  description: "Store operations dashboard (demo data).",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex min-h-screen w-full bg-[#f9f9f7] text-[#0b0b0b] dark:bg-[#0d0d0d] dark:text-white"
      style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
    >
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminTopbar />
        <main className="flex-1 overflow-x-hidden px-4 py-6 sm:px-8">{children}</main>
      </div>
      <Suspense fallback={null}>
        <AdminTemplateBadge />
      </Suspense>
    </div>
  );
}
