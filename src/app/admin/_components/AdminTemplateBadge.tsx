"use client";

import RequestTemplateButton from "@/components/shared/RequestTemplateButton";
import { useExploringTemplate } from "../_hooks/useExploringTemplate";

/**
 * Keeps the "Request this template" badge visible while browsing the admin demo,
 * since visitors get here from a specific template's nav and are still exploring it.
 */
export default function AdminTemplateBadge() {
  const templateName = useExploringTemplate();
  if (!templateName) return null;

  return <RequestTemplateButton templateName={templateName} />;
}
