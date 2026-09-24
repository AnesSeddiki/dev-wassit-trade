/**
 * Pricing logic for the "design your offer" flow. Pure and locale-independent —
 * all copy lives in offerCalculatorTranslations.ts. Mirrors the qualification
 * questions in the Website Client Qualification Flow doc (wholesale/retail branch,
 * self-managed vs dev-managed updates, order handling, team size, domain).
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

export type Tier = 1 | 2 | 3;

export interface PriceRange {
  min: number;
  max: number;
}

export interface OfferResult {
  tier: Tier;
  basePrice: number | PriceRange;
  /** null when not applicable — either no custom domain requested, or the tier already bundles it. */
  domainFee: PriceRange | null;
  total: number | PriceRange;
}

const TIER1_PRICE = 5900;
const TIER2_PRICE = 20000;
const TIER3_PRICE: PriceRange = { min: 5_000_000, max: 7_000_000 };
const DOMAIN_FEE: PriceRange = { min: 5000, max: 7500 };

export function calculateOffer(answers: OfferAnswers): OfferResult {
  const selfManage = answers.updates === "self";
  const orderTable = answers.orderHandling === "table";
  const manyProducts = answers.retailVolume === "many";
  const multiUser = answers.teamAccess === "multi";
  const customDomain = answers.domain === "custom";

  // Tier 3 (fully custom platform w/ payment integration + domain management) only
  // when every "advanced" signal lines up — this is meant to stay rare, matching how
  // that tier is actually sold: a real custom project, not a self-serve default.
  const advancedSignals = [selfManage, orderTable, multiUser, customDomain].filter(Boolean).length;

  let tier: Tier;
  if (advancedSignals === 4) {
    tier = 3;
  } else if (selfManage || orderTable || manyProducts) {
    tier = 2;
  } else {
    tier = 1;
  }

  if (tier === 3) {
    return { tier, basePrice: TIER3_PRICE, domainFee: null, total: TIER3_PRICE };
  }

  const basePrice = tier === 1 ? TIER1_PRICE : TIER2_PRICE;
  const domainFee = customDomain ? DOMAIN_FEE : null;
  const total: number | PriceRange = domainFee
    ? { min: basePrice + domainFee.min, max: basePrice + domainFee.max }
    : basePrice;

  return { tier, basePrice, domainFee, total };
}

export function isPriceRange(value: number | PriceRange): value is PriceRange {
  return typeof value === "object";
}

/** "20,000" or "5,000 – 7,500" — always en-US formatting to avoid locale-dependent
 * thousands separators causing a hydration mismatch (server vs. browser locale). */
export function formatDA(value: number | PriceRange): string {
  if (isPriceRange(value)) {
    return `${value.min.toLocaleString("en-US")} – ${value.max.toLocaleString("en-US")}`;
  }
  return value.toLocaleString("en-US");
}
