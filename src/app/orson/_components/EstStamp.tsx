interface EstStampProps {
  size?: number;
  className?: string;
  year?: string;
}

/** A circular "est." seal/stamp — the recurring vintage-store motif for this template. */
export default function EstStamp({ size = 56, className = "", year = "1948" }: EstStampProps) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full border-[3px] border-double border-[#3b2a1a] text-[#3b2a1a] ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-[3px] rounded-full border border-[#3b2a1a]/40" />
      <div className="flex flex-col items-center leading-none">
        <span
          className="text-[9px] uppercase tracking-[0.18em]"
          style={{ fontFamily: "var(--font-orson-serif)" }}
        >
          est.
        </span>
        <span
          className="text-[11px] font-bold uppercase tracking-tight"
          style={{ fontFamily: "var(--font-orson-serif)" }}
        >
          {year}
        </span>
        <span className="mt-0.5 text-[6px] uppercase tracking-[0.3em] text-[#3b2a1a]/70">
          quality
        </span>
      </div>
    </div>
  );
}
