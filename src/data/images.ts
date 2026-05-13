/**
 * Manifeste des vraies images locales.
 * Toutes les images sont copiées dans /public/images/.
 * Le path est relatif à la base Astro et doit être préfixé via lib/url.ts.
 */

export type LocalImage = {
  file: string;
  alt: string;
  category: "facade" | "plat" | "dessert" | "menu" | "logo" | "context" | "epicerie" | "mascot" | "team";
  width?: number;
  height?: number;
};

export const images: Record<string, LocalImage> = {
  facade: {
    file: "images/facade.webp",
    alt: "Façade du restaurant végétalien Les Ursulines à Dieppe.",
    category: "facade",
  },
  facade2: {
    file: "images/facade_2.webp",
    alt: "Devanture des Ursulines, restaurant végétalien sur le quai Henri IV à Dieppe.",
    category: "facade",
  },
  facade3: {
    file: "images/facade_3.webp",
    alt: "Façade des Ursulines vue depuis le port de Dieppe.",
    category: "facade",
  },
  logo: {
    file: "images/logo_ursulines.webp",
    alt: "Logo des Ursulines, comptoir végétalien à Dieppe.",
    category: "logo",
  },
  menuHorsPlats: {
    file: "images/menu_hors_plats.webp",
    alt: "Carte indicative des boissons et douceurs des Ursulines.",
    category: "menu",
  },
  horairesConcept: {
    file: "images/horaires_et_concept.webp",
    alt: "Horaires et concept des Ursulines, manuscrits sur ardoise.",
    category: "context",
  },
  bakingCookies: {
    file: "images/baking_cookies.webp",
    alt: "Cookies maison en cours de préparation aux Ursulines.",
    category: "dessert",
  },
  epicerie: {
    file: "images/epicerie.webp",
    alt: "Sélection d'épicerie locale et produits maison aux Ursulines.",
    category: "epicerie",
  },
  bowlSucre: {
    file: "images/bowl_sucre.webp",
    alt: "Bowl sucré du brunch dominical des Ursulines.",
    category: "plat",
  },
  bowl1: {
    file: "images/bowl-1.webp",
    alt: "Bowl végétalien généreux aux Ursulines.",
    category: "plat",
  },
  dessert1: {
    file: "images/dessert_1.webp",
    alt: "Dessert maison servi aux Ursulines.",
    category: "dessert",
  },
  dessert2: {
    file: "images/dessert_2.webp",
    alt: "Pâtisserie végétalienne du jour aux Ursulines.",
    category: "dessert",
  },
  dessert3: {
    file: "images/dessert_3.webp",
    alt: "Dessert au chocolat servi chez Les Ursulines.",
    category: "dessert",
  },
  plat01: {
    file: "images/plat_01.webp",
    alt: "Assiette végétalienne maison aux Ursulines.",
    category: "plat",
  },
  plat1: {
    file: "images/plat_1.webp",
    alt: "Plat végétal du jour aux Ursulines.",
    category: "plat",
  },
  plat2: {
    file: "images/plat_2.webp",
    alt: "Assiette végétale composée selon le marché du jour.",
    category: "plat",
  },
  plat3: {
    file: "images/plat_3.webp",
    alt: "Plat végétalien fait maison aux Ursulines.",
    category: "plat",
  },
  plat4: {
    file: "images/plat_4.webp",
    alt: "Assiette végétalienne colorée aux Ursulines.",
    category: "plat",
  },
  plat5: {
    file: "images/plat_5.webp",
    alt: "Plat végétal généreux aux Ursulines.",
    category: "plat",
  },
  plat6: {
    file: "images/plat_6.webp",
    alt: "Plat du jour aux Ursulines, cuisine végétale faite maison.",
    category: "plat",
  },
  plat7: {
    file: "images/plat_7.webp",
    alt: "Assiette végétalienne au rythme du marché.",
    category: "plat",
  },
  plat8: {
    file: "images/plat_8.webp",
    alt: "Plat maison vegan aux Ursulines.",
    category: "plat",
  },
  frederique: {
    file: "images/team/frederique-diarra.webp",
    alt: "Portrait de Frédérique Diarra, cheffe des Ursulines.",
    category: "team",
  },
  delphine: {
    file: "images/team/delphine-chevalme.webp",
    alt: "Portrait de Delphine Chevalme, direction artistique et accueil des Ursulines.",
    category: "team",
  },
};

// Sélections par usage
export const heroImage = images.facade;
export const heroMobileImage = images.plat3;

export const galleryHome = [
  images.plat1,
  images.dessert1,
  images.facade2,
  images.bowl1,
  images.plat4,
  images.bakingCookies,
];

export const galleryAbout = [
  images.facade3,
  images.horairesConcept,
  images.epicerie,
  images.plat6,
  images.dessert2,
  images.bowlSucre,
];

export const galleryBrunch = [
  images.bowlSucre,
  images.bowl1,
  images.dessert3,
  images.plat5,
  images.bakingCookies,
];

export const carteImages = {
  hero: images.plat2,
  concept: images.horairesConcept,
  drinks: images.menuHorsPlats,
  desserts: images.dessert2,
  cookies: images.bakingCookies,
};

export const menuCategoryImages: Record<string, typeof images[string]> = {
  "plats-du-jour": images.plat8,
  desserts: images.dessert2,
  boissons: images.epicerie,
  brunch: images.bowlSucre,
};
