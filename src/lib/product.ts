// Single source of truth for the e-book. Edit price/description/visuals here.
export const PRODUCT = {
  id: "ebook-20-recettes",
  title: "20 recettes rapides, gourmandes & appétissantes",
  priceCents: 1297,
  currency: "EUR",
  description:
    "Des idées gourmandes et accessibles pour varier tes repas, te faire plaisir et trouver facilement l'inspiration en cuisine.",
  features: [
    "20 recettes",
    "Ingrédients et quantités",
    "Étapes de préparation détaillées",
    "Des idées gourmandes pour cuisiner au quotidien",
    "Format numérique consultable sur les appareils compatibles",
  ],
};

// Purchase happens on the owner's external Beacons store (payment + delivery handled there).
export const BUY_URL = "https://shop.beacons.ai/delices.maison/999d248f-b6f4-4f92-8c7c-c0b95e38968a";
export const PAYMENT_ENABLED = true;

// Real contact address — leave empty until configured.
export const CONTACT_EMAIL = "";

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(cents / 100);
