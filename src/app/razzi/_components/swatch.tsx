// Color name -> hex lookup for rendering little swatch dots on product cards.
// Falls back to a neutral grey for any color name we don't recognize.
export const COLOR_HEX: Record<string, string> = {
  Black: "#1a1a1a",
  White: "#ffffff",
  Charcoal: "#3f3f46",
  Navy: "#1e3a5f",
  Olive: "#6b7a3a",
  Khaki: "#c3b091",
  Rust: "#b7472a",
  "Heather Grey": "#9ca3af",
  Forest: "#2f5233",
  "Raw Indigo": "#2c3e6b",
  "Black Rinse": "#26262b",
  Stone: "#b8ae9c",
  Camel: "#c19a6b",
  "Bottle Green": "#144d3f",
  Terracotta: "#cc6b49",
  Ivory: "#f4f1ea",
  Sage: "#9caf88",
  Pinstripe: "#2a2a3a",
  Mocha: "#6f4e37",
  "Deep Teal": "#0f5c5c",
  Chambray: "#7a9bc2",
  "Dusty Rose": "#d4a5a5",
  Berry: "#8e3b60",
  Yellow: "#ffe14d",
  Cloud: "#eef2f5",
  Coral: "#ff6f59",
};

export function swatchHex(name: string): string {
  return COLOR_HEX[name] ?? "#9ca3af";
}

export function isAssorted(name: string): boolean {
  return name.toLowerCase().startsWith("assorted");
}

/** A single small round color swatch, pop-art style with a chunky ink ring. */
export function ColorDot({
  name,
  size = 16,
  ring = true,
}: {
  name: string;
  size?: number;
  ring?: boolean;
}) {
  const assorted = isAssorted(name);
  return (
    <span
      title={name}
      aria-label={name}
      className="inline-block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: assorted
          ? "conic-gradient(#ff3d81 0deg 120deg, #2dd4ff 120deg 240deg, #ffe14d 240deg 360deg)"
          : swatchHex(name),
        border: ring ? "2px solid #1a1a1a" : "1px solid rgba(26,26,26,0.25)",
        boxShadow: swatchHex(name) === "#ffffff" ? "inset 0 0 0 1px rgba(26,26,26,0.15)" : undefined,
      }}
    />
  );
}
