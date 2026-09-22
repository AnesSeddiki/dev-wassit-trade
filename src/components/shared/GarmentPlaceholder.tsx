"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface GarmentPlaceholderProps {
  /** Not read internally — kept for call-site clarity/typing across different product catalogs. */
  category: string;
  seed: string;
  image?: string;
  images?: string[];
  colorFrom: string;
  colorTo: string;
  label?: string;
  className?: string;
  rounded?: string;
  sizes?: string;
  intervalMs?: number;
}

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function GarmentPlaceholder({
  seed,
  image,
  images,
  colorFrom,
  colorTo,
  label,
  className = "",
  rounded = "",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw",
  intervalMs = 4000,
}: GarmentPlaceholderProps) {
  const h = hash(seed);
  const angle = 25 + (h % 90);
  const slides = images && images.length > 0 ? images : image ? [image] : [];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  // `className` may already carry a position utility (e.g. "absolute inset-0" on
  // category tiles that need to fill an already-positioned parent). Tailwind's
  // generated stylesheet defines `.relative` after `.absolute`, so appending a
  // hardcoded "relative" here would always win the cascade and collapse those
  // tiles to zero height. Only fall back to "relative" when the caller hasn't
  // already specified a position.
  const hasPositionClass = /(^|\s)(relative|absolute|fixed|sticky|static)(\s|$)/.test(
    className
  );
  const positionClass = hasPositionClass ? "" : "relative";

  return (
    <div
      className={`${positionClass} overflow-hidden ${rounded} ${className}`}
      style={{
        background: `linear-gradient(${angle}deg, ${colorFrom}, ${colorTo})`,
      }}
    >
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={label ?? ""}
          fill
          sizes={sizes}
          priority={i === 0}
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}
      {label ? (
        <span className="absolute bottom-2 left-2 rounded-sm bg-black/20 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
