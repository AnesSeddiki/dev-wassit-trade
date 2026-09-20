import type { Category } from "@/lib/products";

interface CategoryTheme {
  accent: string;
  dark: string;
  tint: string;
  from: string;
  to: string;
}

export const CATEGORY_THEME: Record<Category, CategoryTheme> = {
  men: {
    accent: "#2563eb",
    dark: "#1e3a8a",
    tint: "#eff6ff",
    from: "#3b82f6",
    to: "#1e3a8a",
  },
  women: {
    accent: "#db2777",
    dark: "#831843",
    tint: "#fdf2f8",
    from: "#ec4899",
    to: "#831843",
  },
  kids: {
    accent: "#f59e0b",
    dark: "#92400e",
    tint: "#fffbeb",
    from: "#fbbf24",
    to: "#92400e",
  },
};
