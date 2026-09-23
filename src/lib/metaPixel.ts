type Fbq = (...args: unknown[]) => void;

export function trackPixelEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fbq = (window as typeof window & { fbq?: Fbq }).fbq;
  if (typeof fbq === "function") fbq("track", eventName, params);
}

/**
 * For behavior/engagement signals that aren't one of Meta's standard conversion
 * events (Lead, ViewContent, ...) — e.g. scroll-depth milestones. Meta's own
 * convention is `trackCustom` for anything outside that fixed event list, so these
 * don't get miscategorized alongside real conversions in Ads Manager reporting.
 */
export function trackCustomPixelEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fbq = (window as typeof window & { fbq?: Fbq }).fbq;
  if (typeof fbq === "function") fbq("trackCustom", eventName, params);
}
