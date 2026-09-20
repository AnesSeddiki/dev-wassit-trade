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
    value: "$184,200",
    delta: "+12.4%",
    trend: "up" as const,
    sparkline: [96, 108, 121, 99, 112, 129, 134, 142, 138, 153, 167, 184],
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
    value: "$538",
    delta: "-2.3%",
    trend: "down" as const,
    sparkline: [560, 555, 549, 552, 547, 543, 546, 541, 539, 544, 540, 538],
  },
];

export const revenueSeries: RevenuePoint[] = [
  { month: "Oct", revenue: 96000 },
  { month: "Nov", revenue: 108500 },
  { month: "Dec", revenue: 121300 },
  { month: "Jan", revenue: 99800 },
  { month: "Feb", revenue: 112400 },
  { month: "Mar", revenue: 128900 },
  { month: "Apr", revenue: 134100 },
  { month: "May", revenue: 141700 },
  { month: "Jun", revenue: 138200 },
  { month: "Jul", revenue: 152600 },
  { month: "Aug", revenue: 167300 },
  { month: "Sep", revenue: 184200 },
];

export const categorySeries: CategoryPoint[] = [
  { month: "Apr", men: 41200, women: 52300, kids: 40600 },
  { month: "May", men: 44500, women: 55800, kids: 41400 },
  { month: "Jun", men: 42100, women: 53900, kids: 42200 },
  { month: "Jul", men: 47800, women: 61200, kids: 43600 },
  { month: "Aug", men: 52300, women: 67100, kids: 47900 },
  { month: "Sep", men: 58600, women: 72400, kids: 53200 },
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
  { id: "WO-10482", account: "Northline Apparel Co.", category: "Women", units: 288, total: 6912, status: "Fulfilled", placed: "2 hours ago" },
  { id: "WO-10481", account: "Kidmark Distributors", category: "Kids", units: 432, total: 5184, status: "Processing", placed: "5 hours ago" },
  { id: "WO-10480", account: "Union Trade Supply", category: "Men", units: 144, total: 3888, status: "Fulfilled", placed: "Yesterday" },
  { id: "WO-10479", account: "Coastal Retail Group", category: "Mixed", units: 612, total: 14208, status: "Backordered", placed: "Yesterday" },
  { id: "WO-10478", account: "Bramwell & Sons", category: "Women", units: 96, total: 2496, status: "Cancelled", placed: "2 days ago" },
  { id: "WO-10477", account: "Northline Apparel Co.", category: "Men", units: 216, total: 5832, status: "Fulfilled", placed: "3 days ago" },
];
