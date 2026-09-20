"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "../_i18n/translations";
import type { Locale } from "@/lib/i18n/locales";

// Types
interface Product {
  id: string;
  name: string;
  category: "Accessories" | "Home & Kitchen" | "Apparel" | "Workspace" | "Stationery";
  price: string;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock" | "Archived";
  sku: string;
  sales: number;
}

// Demo data matching the sidebar aesthetic
const products: Product[] = [
  {
    id: "PRD-101",
    name: "Minimalist Leather Cardholder",
    category: "Accessories",
    price: "$45.00",
    stock: 84,
    status: "In Stock",
    sku: "ACC-LDR-001",
    sales: 342,
  },
  {
    id: "PRD-102",
    name: "Matte Ceramic Coffee Mug (350ml)",
    category: "Home & Kitchen",
    price: "$28.00",
    stock: 12,
    status: "Low Stock",
    sku: "HM-CRM-042",
    sales: 890,
  },
  {
    id: "PRD-103",
    name: "Merino Wool Knit Beanie",
    category: "Apparel",
    price: "$58.00",
    stock: 0,
    status: "Out of Stock",
    sku: "APP-WOL-009",
    sales: 120,
  },
  {
    id: "PRD-104",
    name: "Aluminum Desk Cable Organizer",
    category: "Workspace",
    price: "$22.50",
    stock: 145,
    status: "In Stock",
    sku: "WRK-ALM-015",
    sales: 512,
  },
  {
    id: "PRD-105",
    name: "Linen Journal & Pen Set",
    category: "Stationery",
    price: "$34.00",
    stock: 0,
    status: "Archived",
    sku: "STN-LNN-088",
    sales: 64,
  },
];

export default function ProductsPage() {
  const { locale } = useLanguage();
  const t = adminText(locale).products;
  const common = adminText(locale).common;

  return (
    <div className="min-h-screen bg-[#fcfcfb] p-6 sm:p-8 dark:bg-[#1a1a19] text-[#0b0b0b] dark:text-white">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#0b0b0b]/10 pb-5 dark:border-white/10">
        <div>
          <h1 className="text-xl font-bold tracking-tight">{t.title}</h1>
          <p className="mt-1 text-xs text-[#898781] dark:text-[#a09e96]">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-[#0b0b0b]/10 bg-white px-3 py-1.5 text-xs font-medium text-[#52514e] transition-colors hover:bg-[#0b0b0b]/5 dark:border-white/10 dark:bg-[#242423] dark:text-[#c3c2b7] dark:hover:bg-white/5">
            {t.exportCatalog}
          </button>
          <button className="rounded-md bg-[#2a78d6] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#2263b3]">
            {t.addProduct}
          </button>
        </div>
      </div>

      {/* Stats Quick Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label={t.stats.totalProducts.label} value="142" change={t.stats.totalProducts.change} />
        <StatCard label={t.stats.lowStockItems.label} value="5" change={t.stats.lowStockItems.change} warning />
        <StatCard label={t.stats.outOfStock.label} value="3" change={t.stats.outOfStock.change} />
        <StatCard label={t.stats.totalValue.label} value="$48,290" change={t.stats.totalValue.change} />
      </div>

      {/* Products Table Container */}
      <div className="mt-8 rounded-lg border border-[#0b0b0b]/10 bg-white dark:border-white/10 dark:bg-[#20201f] shadow-sm">
        {/* Search and Filters */}
        <div className="flex flex-col gap-3 border-b border-[#0b0b0b]/10 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="w-full rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-1.5 text-xs text-[#0b0b0b] placeholder-[#898781] outline-none focus:border-[#2a78d6] sm:w-80 dark:border-white/10 dark:bg-[#1a1a19] dark:text-white dark:placeholder-[#a09e96]"
          />
          <div className="flex items-center gap-2">
            <select className="rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-2.5 py-1.5 text-xs text-[#52514e] outline-none dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#c3c2b7]">
              <option value="all">{t.allCategories}</option>
              <option value="accessories">{t.categories.Accessories}</option>
              <option value="apparel">{t.categories.Apparel}</option>
              <option value="home">{t.categories["Home & Kitchen"]}</option>
              <option value="workspace">{t.categories.Workspace}</option>
              <option value="stationery">{t.categories.Stationery}</option>
            </select>
            <select className="rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-2.5 py-1.5 text-xs text-[#52514e] outline-none dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#c3c2b7]">
              <option value="all">{common.allStatuses}</option>
              <option value="in_stock">{t.statuses["In Stock"]}</option>
              <option value="low_stock">{t.statuses["Low Stock"]}</option>
              <option value="out_of_stock">{t.statuses["Out of Stock"]}</option>
              <option value="archived">{t.statuses.Archived}</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#0b0b0b]/10 bg-[#fcfcfb] text-[#898781] dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#a09e96]">
              <tr>
                <th className="px-5 py-3 font-medium">{t.columns.product}</th>
                <th className="px-5 py-3 font-medium">{t.columns.sku}</th>
                <th className="px-5 py-3 font-medium">{t.columns.category}</th>
                <th className="px-5 py-3 font-medium">{t.columns.stock}</th>
                <th className="px-5 py-3 font-medium">{t.columns.status}</th>
                <th className="px-5 py-3 font-medium text-right">{t.columns.sales}</th>
                <th className="px-5 py-3 font-medium text-right">{t.columns.price}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0b0b0b]/5 dark:divide-white/5">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="transition-colors hover:bg-[#0b0b0b]/[0.02] dark:hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-3.5">
                    <div className="font-medium text-[#0b0b0b] dark:text-white">
                      {product.name}
                    </div>
                    <div className="text-[11px] text-[#898781] dark:text-[#a09e96]">
                      {product.id}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 font-mono text-[11px] text-[#52514e] dark:text-[#c3c2b7]">
                    {product.sku}
                  </td>
                  <td className="px-5 py-3.5 text-[#52514e] dark:text-[#c3c2b7]">
                    {t.categories[product.category]}
                  </td>
                  <td className="px-5 py-3.5 text-[#52514e] dark:text-[#c3c2b7]">
                    {product.stock} {t.units}
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={product.status} locale={locale} />
                  </td>
                  <td className="px-5 py-3.5 text-right text-[#52514e] dark:text-[#c3c2b7]">
                    {product.sales} {t.sold}
                  </td>
                  <td className="px-5 py-3.5 text-right font-semibold text-[#0b0b0b] dark:text-white">
                    {product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex items-center justify-between border-t border-[#0b0b0b]/10 px-5 py-3 text-xs text-[#898781] dark:border-white/10 dark:text-[#a09e96]">
          <span>{t.showing(products.length, "142")}</span>
          <div className="flex gap-1">
            <button className="rounded px-2.5 py-1 border border-[#0b0b0b]/10 hover:bg-[#0b0b0b]/5 dark:border-white/10 dark:hover:bg-white/5">
              {common.previous}
            </button>
            <button className="rounded px-2.5 py-1 border border-[#0b0b0b]/10 hover:bg-[#0b0b0b]/5 dark:border-white/10 dark:hover:bg-white/5">
              {common.next}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Status Badge Component
function StatusBadge({ status, locale }: { status: Product["status"]; locale: Locale }) {
  const t = adminText(locale).products.statuses;
  const styles = {
    "In Stock":
      "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
    "Low Stock":
      "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
    "Out of Stock":
      "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
    Archived:
      "bg-[#0b0b0b]/5 text-[#898781] dark:bg-white/10 dark:text-[#a09e96]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${
        styles[status]
      }`}
    >
      {t[status]}
    </span>
  );
}

// Stat Card Component
function StatCard({
  label,
  value,
  change,
  warning = false,
}: {
  label: string;
  value: string;
  change: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-lg border border-[#0b0b0b]/10 bg-white p-4 dark:border-white/10 dark:bg-[#20201f]">
      <div className="text-xs text-[#898781] dark:text-[#a09e96]">{label}</div>
      <div className="mt-1 text-xl font-bold tracking-tight text-[#0b0b0b] dark:text-white">
        {value}
      </div>
      <div
        className={`mt-1 text-[11px] ${
          warning
            ? "text-amber-600 dark:text-amber-400"
            : "text-[#898781] dark:text-[#a09e96]"
        }`}
      >
        {change}
      </div>
    </div>
  );
}
