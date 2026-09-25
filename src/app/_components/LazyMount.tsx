"use client";

import { useEffect, useRef, useState } from "react";

interface LazyMountProps {
  children: React.ReactNode;
  /** Approximate rendered height, so the page doesn't jump when content mounts in. */
  minHeight?: number;
  /** How far ahead of the viewport to start mounting — content should already be
   * ready by the time scrolling actually reaches it, not pop in at the last second. */
  rootMargin?: string;
  className?: string;
}

/**
 * Defers mounting (not just hiding) its children until they're near the viewport,
 * so the browser isn't building/hydrating every section of a long page up front —
 * only what's actually near where the visitor is scrolling. Once mounted, content
 * stays mounted (no unmount-on-scroll-away): full virtualization was considered and
 * deliberately skipped here, since several sections carry anchor ids other features
 * rely on (scroll-to-templates, scroll-depth analytics), and unmounting past content
 * risks breaking those plus causing re-fetch/layout jank if a visitor scrolls back up.
 */
export default function LazyMount({ children, minHeight = 200, rootMargin = "400px 0px", className }: LazyMountProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : <div aria-hidden style={{ minHeight }} />}
    </div>
  );
}
