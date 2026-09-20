// Reference palette from the dataviz skill — do not cycle or reorder the categorical slots.
export const VIZ = {
  men: "#2a78d6",
  women: "#eb6834",
  kids: "#1baf7a",
  menDark: "#3987e5",
  womenDark: "#d95926",
  kidsDark: "#199e70",
  gridline: "#e1e0d9",
  gridlineDark: "#2c2c2a",
  axis: "#c3c2b7",
  axisDark: "#383835",
  muted: "#898781",
  secondary: "#52514e",
  secondaryDark: "#c3c2b7",
  primary: "#0b0b0b",
  primaryDark: "#ffffff",
  surface: "#fcfcfb",
  surfaceDark: "#1a1a19",
  page: "#f9f9f7",
  pageDark: "#0d0d0d",
  statusGood: "#0ca30c",
  statusWarning: "#fab219",
  statusSerious: "#ec835a",
  statusCritical: "#d03b3b",
} as const;

export const STATUS_STYLES: Record<string, { color: string }> = {
  Fulfilled: { color: VIZ.statusGood },
  Processing: { color: VIZ.statusWarning },
  Backordered: { color: VIZ.statusSerious },
  Cancelled: { color: VIZ.statusCritical },
};
