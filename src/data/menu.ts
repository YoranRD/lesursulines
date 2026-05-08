/**
 * Le menu des Ursulines change chaque jour.
 * On NE liste PAS de plats fixes ici.
 * Ce fichier décrit la structure et les exemples génériques de catégories
 * que la page Carte peut afficher sans inventer de plats spécifiques.
 */

export const menuStructure = [
  {
    id: "plats-du-jour",
    title: "Plats du jour",
    eyebrow: "À l'ardoise",
    description:
      "Deux assiettes au choix, dressées selon le marché et l'inspiration de la cuisine. Fait maison chaque jour, avec une option sans gluten souvent disponible.",
    note:
      "Le menu du jour est annoncé sur Instagram. Pour le connaître à l'avance, le plus simple est de nous appeler.",
  },
  {
    id: "desserts",
    title: "Desserts du jour",
    eyebrow: "Tea-time",
    description:
      "Pâtisseries végétales, gâteaux maison, cookies, et quelques douceurs servies tout au long de la journée.",
  },
  {
    id: "boissons",
    title: "Boissons & tea-time",
    eyebrow: "Sur la carte",
    description:
      "Cafés, thés, infusions, boissons fraîches, bissap maison selon la saison. La carte boissons est plus stable et reprend les indispensables du comptoir.",
  },
  {
    id: "brunch",
    title: "Brunch du dimanche",
    eyebrow: "Le dimanche",
    description:
      "Une grande table végétale, sucrée-salée, généreuse, servie de 10h00 à 15h00. Réservation conseillée.",
  },
];

export const menuGuidelines = [
  "Cuisine végétale faite maison.",
  "Les plats changent au rythme du marché et des saisons.",
  "Option sans gluten presque tous les jours.",
  "Local dès que possible.",
  "Sur place ou à emporter.",
];

export const priceHint = "Menu plat + dessert autour de 22 €.";
