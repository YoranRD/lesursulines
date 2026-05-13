# Future Roadmap — Les Ursulines

## Rôle du fichier
Identifier ce qui doit être préparé sans être entièrement construit en V1.

## V1 — Priorité immédiate
- Site vitrine Astro statique.
- Repo : `lesursulines` — base Astro : `/lesursulines` — URL : `https://yoranrd.github.io/lesursulines/`.
- Pages : accueil, carte, brunch, à propos, boutique (placeholder), journal (placeholder), contact, mentions-legales (placeholder).
- Navigation principale : Accueil, Carte, Brunch, À propos, Journal, Contact. (Boutique dans le footer uniquement.)
- Bloc horaires visible juste après le hero sur la homepage.
- Mise en avant téléphone / réservation / itinéraire / Instagram.
- Photos locales uniquement.
- SEO local de base + JSON-LD Restaurant (sans aggregateRating avant validation).
- Bloc anglophone discret sur la page /contact.
- Build GitHub Pages compatible (`npm run build` doit passer).

## V1.1 — Après mise en ligne
- Remplacer yoranrd@gmail.com par l'email définitif des Ursulines.
- Remplacer le lien Google Maps encodé par l'URL Google Business officielle.
- Activer Web3Forms avec la clé réelle.
- Ajouter le menu PDF final si disponible.
- Compléter les mentions légales (SIRET, statut juridique, hébergeur, responsable légal).
- Valider aggregateRating Google puis ajouter en JSON-LD si conforme.
- Améliorer les textes après retour de Frédérique et Delphine.
- Optimiser les images (poids, formats, lazy loading).
- Ajouter la politique de confidentialité si formulaire de contact actif.

## V2 — Version anglaise
Objectif : mieux accueillir les touristes et visiteurs UK / Brighton / ferry Dieppe–Newhaven.

Note V1 : un bloc anglophone discret est présent sur `/contact` dès V1. Ce n'est pas suffisant pour le public UK — d'où la priorité V2.

Approches possibles :
- page `/en` simple (recommandé en premier) ;
- version anglaise complète avec switch FR/EN dans le header ;
- intégration i18n Astro.

Priorité de contenu :
- homepage anglaise ;
- contact / horaires en anglais ;
- explication du menu changeant ;
- brunch du dimanche.

## V2 — Boutique / click-and-collect
La page `/boutique` existe en V1 comme placeholder (lien dans le footer). La boutique réelle est une priorité V2.

Préparer une boutique douce, non agressive :
- gâteaux à commander ;
- produits maison ;
- boissons / épicerie locale ;
- bons cadeaux ;
- click-and-collect.

À ne pas faire sans validation :
- paiement en ligne ;
- promesse de stock ;
- frais de livraison ;
- produits inventés.

## V2 — Journal SEO
Idées d’articles :
1. Où manger vegan à Dieppe ?
2. Brunch vegan à Dieppe : ce que propose Les Ursulines.
3. Une cuisine végétale qui rassasie vraiment.
4. Dieppe pour les voyageurs vegan et végétariens.
5. Les coulisses d’un menu du jour végétalien.
6. Gina, directrice des Ursulines.
7. Produits locaux et cuisine végétale en Normandie.
8. Tea-time vegan : desserts, cookies et boissons maison.

## V2 — Réservation
Options futures :
- formulaire plus avancé ;
- calendrier simple ;
- lien réservation externe ;
- automatisation email.

## V2 — Identité visuelle
À envisager :
- mini shooting photo ;
- portraits de Frédérique et Delphine ;
- optimisation des visuels Gina (conversion WebP/AVIF, import via `astro:assets`) — voir `brain/images.md` ;
- pictogrammes maison inspirés du logo ;
- menu PDF propre ;
- carte imprimable.

## V2 — Preuve sociale
- Ajouter avis Google sélectionnés si autorisé.
- Ajouter lien HappyCow vérifié.
- Ajouter presse locale si existante.

## Critère de réussite business
Le site doit augmenter :
- appels ;
- demandes de réservation ;
- consultations Instagram ;
- visibilité sur Google ;
- confiance des touristes ;
- demandes de brunch / groupe ;
- perception qualitative du lieu.
