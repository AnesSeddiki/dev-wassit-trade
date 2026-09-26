/**
 * Pricing logic for the "design your offer" flow. Pure and locale-independent —
 * all copy lives in offerCalculatorTranslations.ts. Mirrors the qualification
 * questions in the Website Client Qualification Flow doc (wholesale/retail branch,
 * self-managed vs dev-managed updates, order handling, team size, domain).
 *
 * Pricing itself is intentionally simple: only the domain answer affects price.
 * Every other answer is collected purely so the actual build matches what the
 * client needs — it's sent along by email, not used to change the quote.
 */

export type OfferAnswers = {
  type?: "wholesale" | "retail";
  wholesaleOrdering?: "phone" | "social";
  retailPresence?: "physical" | "online";
  retailVolume?: "few" | "many";
  updates?: "self" | "dev";
  updateFrequency?: "high" | "low";
  orderHandling?: "whatsapp" | "table";
  team?: "solo" | "team";
  teamAccess?: "multi" | "single";
  domain?: "custom" | "any";
};

export type OfferStepId =
  | "type"
  | "wholesaleOrdering"
  | "retailPresence"
  | "retailVolume"
  | "updates"
  | "updateFrequency"
  | "orderHandling"
  | "team"
  | "teamAccess"
  | "domain"
  | "results";

/** Every question step, in the order they're asked — used both to drive the flow
 * and to build a readable answers summary for the email. */
export const QUESTION_STEPS: Exclude<OfferStepId, "results">[] = [
  "type",
  "wholesaleOrdering",
  "retailPresence",
  "retailVolume",
  "updates",
  "updateFrequency",
  "orderHandling",
  "team",
  "teamAccess",
  "domain",
];

/** Which step comes after the current one, given the answers collected so far. */
export function getNextStep(current: OfferStepId, answers: OfferAnswers): OfferStepId {
  switch (current) {
    case "type":
      return answers.type === "wholesale" ? "wholesaleOrdering" : "retailPresence";
    case "wholesaleOrdering":
      return "updates";
    case "retailPresence":
      return "retailVolume";
    case "retailVolume":
      return "updates";
    case "updates":
      return answers.updates === "self" ? "updateFrequency" : "orderHandling";
    case "updateFrequency":
      return "orderHandling";
    case "orderHandling":
      return "team";
    case "team":
      return answers.team === "team" ? "teamAccess" : "domain";
    case "teamAccess":
      return "domain";
    case "domain":
    default:
      return "results";
  }
}

const PRICE_WITH_DOMAIN = 19000;
const PRICE_WITHOUT_DOMAIN = 14000;

export interface OfferResult {
  hasDomain: boolean;
  total: number;
}

export function calculateOffer(answers: OfferAnswers): OfferResult {
  const hasDomain = answers.domain === "custom";
  return { hasDomain, total: hasDomain ? PRICE_WITH_DOMAIN : PRICE_WITHOUT_DOMAIN };
}

/** "20,000" — always en-US formatting to avoid locale-dependent thousands
 * separators causing a hydration mismatch (server vs. browser locale). */
export function formatDA(value: number): string {
  return value.toLocaleString("en-US");
}
