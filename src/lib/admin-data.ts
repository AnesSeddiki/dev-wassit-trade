export interface RevenuePoint {
  month: string;
  revenue: number;
}

export interface CategoryPoint {
  month: string;
  men: number;
  women: number;
  kids: number;
}

export interface TopProduct {
  name: string;
  sku: string;
  units: number;
}

export type OrderStatus = "Fulfilled" | "Processing" | "Backordered" | "Cancelled";

export interface RecentOrder {
  id: string;
  account: string;
  category: "Men" | "Women" | "Kids" | "Mixed";
  units: number;
  total: number;
  status: OrderStatus;
  placed: string;
}

export const kpis = [
  {
    id: "revenue" as const,
    value: "12,526,000 DA",
    delta: "+12.4%",
    trend: "up" as const,
    sparkline: [6528, 7378, 8248, 6786, 7643, 8765, 9119, 9636, 9398, 10377, 11376, 12526],
  },
  {
    id: "orders" as const,
    value: "342",
    delta: "+6.1%",
    trend: "up" as const,
    sparkline: [268, 272, 290, 261, 279, 301, 298, 312, 305, 318, 330, 342],
  },
  {
    id: "accounts" as const,
    value: "612",
    delta: "+18",
    trend: "up" as const,
    sparkline: [540, 551, 558, 562, 570, 579, 584, 590, 596, 601, 605, 612],
  },
  {
    id: "aov" as const,
    value: "36,614 DA",
    delta: "-2.3%",
    trend: "down" as const,
    sparkline: [38080, 37740, 37332, 37536, 37196, 36924, 37128, 36788, 36652, 36992, 36720, 36614],
  },
];

export const revenueSeries: RevenuePoint[] = [
  { month: "Oct", revenue: 6528000 },
  { month: "Nov", revenue: 7378000 },
  { month: "Dec", revenue: 8248000 },
  { month: "Jan", revenue: 6786000 },
  { month: "Feb", revenue: 7643000 },
  { month: "Mar", revenue: 8765000 },
  { month: "Apr", revenue: 9119000 },
  { month: "May", revenue: 9636000 },
  { month: "Jun", revenue: 9398000 },
  { month: "Jul", revenue: 10377000 },
  { month: "Aug", revenue: 11376000 },
  { month: "Sep", revenue: 12526000 },
];

export const categorySeries: CategoryPoint[] = [
  { month: "Apr", men: 2802000, women: 3556000, kids: 2761000 },
  { month: "May", men: 3026000, women: 3794000, kids: 2815000 },
  { month: "Jun", men: 2863000, women: 3665000, kids: 2870000 },
  { month: "Jul", men: 3250000, women: 4162000, kids: 2965000 },
  { month: "Aug", men: 3556000, women: 4563000, kids: 3257000 },
  { month: "Sep", men: 3985000, women: 4923000, kids: 3618000 },
];

export const topProducts: TopProduct[] = [
  { name: "Heavyweight Crew Tee", sku: "MN-TEE-001", units: 4320 },
  { name: "Modal Wrap Dress", sku: "WM-DRS-041", units: 3810 },
  { name: "Graphic Tee, 3-Pack", sku: "KD-TEE-011", units: 3390 },
  { name: "Ribbed Seamless Legging", sku: "WM-LEG-055", units: 2960 },
  { name: "Fleece Zip Hoodie", sku: "KD-HOD-019", units: 2540 },
  { name: "Fleece Quarter-Zip", sku: "MN-FLC-022", units: 2115 },
];

export const recentOrders: RecentOrder[] = [
  { id: "WO-10482", account: "Northline Apparel Co.", category: "Women", units: 288, total: 432000, status: "Fulfilled", placed: "2 hours ago" },
  { id: "WO-10481", account: "Kidmark Distributors", category: "Kids", units: 432, total: 518000, status: "Processing", placed: "5 hours ago" },
  { id: "WO-10480", account: "Union Trade Supply", category: "Men", units: 144, total: 259000, status: "Fulfilled", placed: "Yesterday" },
  { id: "WO-10479", account: "Coastal Retail Group", category: "Mixed", units: 612, total: 857000, status: "Backordered", placed: "Yesterday" },
  { id: "WO-10478", account: "Bramwell & Sons", category: "Women", units: 96, total: 144000, status: "Cancelled", placed: "2 days ago" },
  { id: "WO-10477", account: "Northline Apparel Co.", category: "Men", units: 216, total: 389000, status: "Fulfilled", placed: "3 days ago" },
];
