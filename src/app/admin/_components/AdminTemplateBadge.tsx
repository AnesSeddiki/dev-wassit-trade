"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RequestTemplateButton from "@/components/shared/RequestTemplateButton";

const STORAGE_KEY = "admin.exploringTemplate";

/**
 * Keeps the "Request this template" badge visible while browsing the admin demo,
 * since visitors get here from a specific template's nav and are still exploring it.
 * The template name arrives via ?template= on first visit and is cached in
 * sessionStorage so it survives navigating between /admin/* sub-pages, which don't
 * carry the query param on their own links.
 */
export default function AdminTemplateBadge() {
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("template");
  const [storedTemplate, setStoredTemplate] = useState<string | null>(null);

  useEffect(() => {
    if (fromQuery) {
      try {
        sessionStorage.setItem(STORAGE_KEY, fromQuery);
      } catch {
        // sessionStorage unavailable — badge just won't persist across admin sub-pages
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

  const templateName = fromQuery ?? storedTemplate;
  if (!templateName) return null;

  return <RequestTemplateButton templateName={templateName} />;
}
