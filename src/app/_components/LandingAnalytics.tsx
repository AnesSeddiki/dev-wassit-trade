"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { trackCustomPixelEvent } from "@/lib/metaPixel";

/**
 * How far visitors get down the landing page before they leave, via the Meta Pixel
 * that's already loaded for the ads — no new script, no cookies, no personal data.
 * Each landmark section fires once (first time it scrolls into view), so comparing
 * event counts in Events Manager against PageView shows where people drop off:
 * reached the pitch → reached the templates → reached the end of the page.
 *
 * Deliberately just three checkpoints, not a scroll-percentage tracker — enough to
 * see where visitors quit without turning this into a full session-replay tool.
 */
const CHECKPOINTS = [
  { id: "pitch", event: "ScrollReachedPitch" },
  { id: "templates", event: "ScrollReachedTemplates" },
  { id: "page-end", event: "ScrollReachedEnd" },
] as const;

export default function LandingAnalytics() {
  const { locale } = useLanguage();
  const localeRef = useRef(locale);
  const firedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    localeRef.current = locale;
  }, [locale]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const checkpoint = CHECKPOINTS.find((c) => c.id === entry.target.id);
          if (!checkpoint || firedRef.current.has(checkpoint.event)) continue;
          firedRef.current.add(checkpoint.event);
          trackCustomPixelEvent(checkpoint.event, { locale: localeRef.current });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    for (const { id } of CHECKPOINTS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
    // Mount once — firedRef/localeRef stay current via refs without re-subscribing
    // the observer on every locale switch.
  }, []);

  return null;
}
