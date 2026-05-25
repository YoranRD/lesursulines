/**
 * Journal — placeholder V1.
 * Aucun article réel publié pour l'instant.
 * Cette liste sert à préparer la structure et le SEO local.
 */

export type JournalIdea = {
  title: string;
  excerpt: string;
  category: string;
  status: "à venir";
};

export const journalIdeas: JournalIdea[] = [
  {
    title: "Où manger vegan à Dieppe ?",
    excerpt:
      "Un guide simple pour les voyageurs et habitants curieux qui cherchent une cuisine végétale faite maison à Dieppe.",
    category: "Vegan à Dieppe",
    status: "à venir",
  },
  {
    title: "Le brunch des Ursulines, mode d'emploi",
    excerpt:
      "Comment se passe le brunch du dimanche : ambiance, horaires, idées de plats, réservation pour les groupes.",
    category: "Brunch",
    status: "à venir",
  },
  {
    title: "Une cuisine végétale qui rassasie vraiment",
    excerpt:
      "Pourquoi un repas vegan peut être généreux, complet et plein de goût — ce qu'on cherche à servir tous les jours.",
    category: "Cuisine végétale",
    status: "à venir",
  },
  {
    title: "Dieppe pour les voyageurs vegan",
    excerpt:
      "Quelques repères pour passer une journée végétale à Dieppe quand on arrive du ferry ou de Paris.",
    category: "Tourisme",
    status: "à venir",
  },
  {
    title: "Gina, directrice secrète des Ursulines",
    excerpt:
      "Petit portrait de Gina, bouledogue française, observatrice attentive de tout ce qui tombe sous la table.",
    category: "Le lieu",
    status: "à venir",
  },
  {
    title: "Petit déjeuner vegan : desserts, cookies et boissons maison",
    excerpt:
      "Notre approche du petit déjeuner : pâtisseries végétales, cookies du jour, thés, cafés et boissons de saison.",
    category: "Petit déjeuner",
    status: "à venir",
  },
];
