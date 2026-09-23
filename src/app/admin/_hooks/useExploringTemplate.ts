"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const STORAGE_KEY = "admin.exploringTemplate";

/**
 * Which template's nav sent the visitor into /admin, if any. Arrives via ?template=
 * on first visit and is cached in sessionStorage so it survives navigating between
 * /admin/* sub-pages, which don't carry the query param on their own links. Callers
 * must be wrapped in <Suspense> (useSearchParams requirement).
 */
export function useExploringTemplate(): string | null {
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("template");
  const [storedTemplate, setStoredTemplate] = useState<string | null>(null);

  useEffect(() => {
    if (fromQuery) {
      try {
        sessionStorage.setItem(STORAGE_KEY, fromQuery);
      } catch {
        // sessionStorage unavailable — value just won't persist across admin sub-pages
      }
      return;
    }
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) setStoredTemplate(stored);
    } catch {
      // sessionStorage unavailable
    }
  }, [fromQuery]);

  return fromQuery ?? storedTemplate;
}
