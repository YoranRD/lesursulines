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
      "Deux assiettes au choix, dressées selon le marché et l'inspiration de la cuisine. Fait maison, avec une option sans gluten proposée.",
    note:
      "Les plats changent régulièrement. Pour connaître les disponibilités, le plus simple est de nous appeler.",
  },
  {
    id: "desserts",
    title: "Desserts du jour",
    eyebrow: "Petit déjeuner & douceurs",
    description:
      "Pâtisseries végétales, gâteaux maison, cookies, et quelques douceurs servies tout au long de la journée.",
  },
  {
    id: "boissons",
    title: "Petit déjeuner & boissons",
    eyebrow: "Sur la carte",
    description:
      "Cafés, thés, infusions, boissons fraîches, bissap maison selon la saison. La carte boissons est plus stable et reprend les indispensables du comptoir.",
  },
  {
    id: "brunch",
    title: "Brunch du dimanche",
    eyebrow: "Le dimanche",
    description:
      "Une grande table végétale, sucrée-salée, généreuse, servie de 11h à 15h avec deux créneaux de réservation : 11h ou 13h. Réservation conseillée.",
  },
];

export const menuGuidelines = [
  "Cuisine végétale faite maison.",
  "Les plats changent au rythme des saisons.",
  "Option sans gluten.",
  "Local et bio.",
  "Sur place ou à emporter.",
  "Pour des allergies spécifiques, merci de nous contacter.",
];

export const priceHint = [
  "Menu entrée + plat ou plat + dessert : 21 €",
  "Menu entrée + plat + dessert : 25 €",
];
