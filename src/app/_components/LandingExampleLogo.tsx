/** Simple vector storefront mark — deliberately an icon, not a generated image,
 * so it reads as "a placeholder any business could swap their own logo into." */
function StoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9.5 4.2 4h15.6l1.2 5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 9.5a2.3 2.3 0 0 0 4.6 0 2.3 2.3 0 0 0 4.6 0 2.3 2.3 0 0 0 4.6 0 2.3 2.3 0 0 0 4.6 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.5 9.8V20h15V9.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20v-5.5h4V20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface LandingExampleLogoProps {
  businessName: string;
  className?: string;
}

export default function LandingExampleLogo({ businessName, className }: LandingExampleLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c1602f]/10 text-[#c1602f]">
        <StoreIcon className="h-5 w-5" />
      </span>
      <span className="text-xl font-bold tracking-tight text-[#c1602f]">{businessName}</span>
    </div>
  );
}
