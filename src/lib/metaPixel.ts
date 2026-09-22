type Fbq = (...args: unknown[]) => void;

export function trackPixelEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fbq = (window as typeof window & { fbq?: Fbq }).fbq;
  if (typeof fbq === "function") fbq("track", eventName, params);
}
