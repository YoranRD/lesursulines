/**
 * Données centrales du site Les Ursulines.
 * Toute info "factuelle" passe par ici pour rester cohérente.
 * Les TODO sont signalés explicitement et ne doivent pas être considérés
 * comme des valeurs définitives.
 */

export const site = {
  name: "Les Ursulines",
  signature: "Comptoir végétalien à bulles et à culture",
  tagline: "Restaurant végétalien fait maison sur le port de Dieppe.",
  description:
    "Restaurant végétalien à Dieppe, Les Ursulines propose des plats faits maison, brunch le dimanche, desserts, thé, café et une cuisine végétale chaleureuse près du port.",
  city: "Dieppe",
  region: "Normandie",
  country: "France",
  // SEO
  url: "https://yoranrd.github.io/lesursulines/",
  locale: "fr-FR",
  // Repo / build
  repo: "lesursulines",
  base: "/lesursulines",
} as const;

export const contact = {
  phone: "07 45 16 53 66",
  phoneHref: "tel:+33745165366",
  // TODO: remplacer yoranrd@gmail.com par l'email définitif des Ursulines avant mise en ligne.
  email: "yoranrd@gmail.com",
  emailIsTemporary: true,
  address: {
    street: "129 Quai Henri IV",
    postalCode: "76200",
    city: "Dieppe",
    country: "France",
    full: "129 Quai Henri IV, 76200 Dieppe",
  },
  // TODO: remplacer par l'URL Google Business officielle.
  // En attendant, fallback Google Maps avec adresse encodée.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=129+Quai+Henri+IV+76200+Dieppe",
  mapsTodo: true,
  itineraryUrl:
    "https://www.google.com/maps/dir/?api=1&destination=129+Quai+Henri+IV+76200+Dieppe",
  instagram: "https://www.instagram.com/les.ursulines/",
  instagramHandle: "@les.ursulines",
  happyCow: {
    url: "https://www.happycow.net/reviews/les-ursulines-dieppe-347946",
    logo: "images/happycow-logo.webp",
    label: "Référencé sur HappyCow",
  },
} as const;

export type DayHours = {
  day: string;
  shortDay: string;
  closed?: boolean;
  slots?: string[];
  // ISO weekday for schema.org
  schemaDay?: string;
};

export const hours: DayHours[] = [
  {
    day: "Vendredi",
    shortDay: "Ven.",
    slots: ["10:30 – 14:30", "18:30 – 21:00"],
    schemaDay: "Friday",
  },
  {
    day: "Samedi",
    shortDay: "Sam.",
    slots: ["10:30 – 14:30", "18:30 – 21:00"],
    schemaDay: "Saturday",
  },
  {
    day: "Dimanche",
    shortDay: "Dim.",
    slots: ["10:00 – 15:00"],
    schemaDay: "Sunday",
  },
  { day: "Lundi", shortDay: "Lun.", closed: true },
  { day: "Mardi", shortDay: "Mar.", closed: true },
  { day: "Mercredi", shortDay: "Mer.", closed: true },
  { day: "Jeudi", shortDay: "Jeu.", closed: true },
];

export const openDays = ["Vendredi", "Samedi", "Dimanche"];

/**
 * Note Google fournie par l'utilisateur.
 * Affichée visuellement uniquement.
 * TODO: ne pas utiliser en aggregateRating JSON-LD tant que la
 * source Google Business officielle n'est pas vérifiée.
 */
export const googleReview = {
  rating: 4.9,
  count: 243,
  source: "Google",
  reviewsUrl: "https://www.google.com/search?q=Les+Ursulines+Dieppe+avis",
  jsonLdAllowed: false,
} as const;

export const services = {
  dineIn: true,
  takeAway: true,
  reservation: true,
  walkIn: true,
  delivery: false,
  terrace: true,
  accessible: true,
  petsFriendly: true,
  payments: ["Espèces", "Carte bancaire"],
  priceRange: "€€",
  cuisine: ["Vegan", "Vegetarian", "Plant-based"],
} as const;

export const team = {
  chef: {
    name: "Frédérique Diarra",
    role: "Cheffe — cuisine végétale faite maison",
  },
  host: {
    name: "Delphine Chevalme",
    role: "Direction artistique et service",
  },
  mascot: {
    name: "Gina",
    role: "Directrice secrète du lieu",
  },
} as const;

export const navMain = [
  { label: "Accueil", href: "" },
  { label: "Carte", href: "carte" },
  { label: "Brunch", href: "brunch" },
  { label: "À propos", href: "a-propos" },
  { label: "Journal", href: "journal" },
  { label: "Contact", href: "contact" },
] as const;

export const navMobileQuick = [
  { label: "Appeler", href: "tel:+33745165366", icon: "phone" },
  { label: "Carte", href: "carte", icon: "menu" },
  { label: "Itinéraire", href: contact.itineraryUrl, icon: "pin", external: true },
  { label: "Instagram", href: contact.instagram, icon: "instagram", external: true },
] as const;

export const navFooter = [
  { label: "Accueil", href: "" },
  { label: "Carte", href: "carte" },
  { label: "Brunch", href: "brunch" },
  { label: "À propos", href: "a-propos" },
  { label: "Journal", href: "journal" },
  { label: "Contact", href: "contact" },
  { label: "Boutique — Bientôt disponible", href: "boutique" },
  { label: "Mentions légales", href: "mentions-legales" },
] as const;
