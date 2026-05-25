# Pages — Les Ursulines

## Menu principal recommandé (V1)
- Accueil
- Carte
- Brunch
- À propos
- Journal
- Contact

Boutique : ne pas inclure dans la navigation principale en V1. Lien discret dans le footer uniquement, avec mention "Bientôt disponible".

Sur mobile, rendre visibles prioritairement :
- Appeler
- Carte
- Nous trouver
- Instagram

## Pages à créer en V1

### `/`
Priorité maximale.
Objectif : comprendre le lieu en 5 secondes et donner envie de venir.

Structure V1 :
1. Hero : restaurant végétalien à Dieppe + CTA (appeler / voir la carte).
2. **Horaires** : bloc visible très tôt, juste après le hero. Rappeler que les horaires varient selon la saison et renvoyer vers Google. Ne pas afficher de table d’horaires fixes.
3. Menu du jour : fonctionnement de la carte changeante — pour les disponibilités, renvoyer vers le téléphone (pas vers Instagram comme source systématique).
4. Brunch / petit déjeuner.
5. Fait maison / local / inclusif.
6. Galerie courte de vrais plats.
7. Preuve sociale : note Google 4,9/5 — 243 avis + lien Instagram + rappel téléphone / réservation. (Afficher visuellement, sans aggregateRating JSON-LD tant que la source Google Business n'est pas vérifiée — voir TODO SEO.)
8. Histoire / Frédérique / Delphine / Gina.
9. Groupes / privatisation.
10. Footer complet.

Note : le Journal preview est retiré de la home V1. La route `/journal` reste future-ready mais n'est pas une section forte de la homepage.

### `/carte`
Priorité haute.
Objectif : expliquer ce qu’on mange sans inventer une carte fixe.

Contenu :
- plats du jour ;
- desserts du jour ;
- petit déjeuner & boissons ;
- brunch (11h–15h, créneaux 11h ou 13h) ;
- option sans gluten + mention allergies spécifiques ;
- appel pour réservation et disponibilités.

### `/brunch`
Priorité haute.
Objectif : valoriser le brunch du dimanche et les groupes.

Contenu :
- brunch végétalien du dimanche ;
- horaires ;
- réservation ;
- groupes, anniversaires, EVJF ;
- ambiance grande tablée ;
- CTA contact.

### `/a-propos`
Priorité haute.
Objectif : raconter le lieu et ses valeurs.

Contenu :
- histoire de Frédérique et Delphine ;
- cuisine végétale ;
- culture et accueil ;
- respect du vivant ;
- Gina ;
- photos du lieu.

### `/contact`
Priorité haute.
Objectif : rendre l’action très simple.

Contenu :
- téléphone cliquable ;
- adresse ;
- horaires ;
- bouton itinéraire ;
- Instagram ;
- formulaire avec types de demande ;
- mail fallback.

### `/boutique`
Priorité : future-ready uniquement.

En V1, la boutique n'est pas dans la navigation principale. Un lien discret “Boutique — Bientôt disponible” peut apparaître dans le footer.

Contenu V1 (page placeholder qualitative) :
- message “La boutique arrive bientôt” ;
- mention des projets futurs : gâteaux à commander, produits maison, click-and-collect ;
- CTA contact pour les commandes actuelles (téléphone / email) ;
- aucune interface de paiement.

Ne pas inventer de produits, prix ou stocks.

### `/journal`
Priorité moyenne.
Objectif : préparer SEO et contenu culturel.

Catégories possibles :
- manger vegan à Dieppe ;
- brunch à Dieppe ;
- cuisine végétale ;
- produits locaux ;
- culture et table ;
- coulisses des Ursulines ;
- guide pour touristes vegan.

### `/contact` — bloc anglophone discret
Sur la page contact, ajouter un petit bloc anglophone pour les visiteurs anglophones (touristes, ferry Dieppe–Newhaven) :

> "English-speaking visitors welcome — find us on the port of Dieppe or contact us before your visit."

Ce bloc ne remplace pas une version anglaise complète. Il est un signal d'accueil minimal. La version `/en` complète est planifiée en V2.

### `/mentions-legales`
Priorité : route à créer en V1, même en placeholder.

Contenu V1 :
- page placeholder avec structure minimale obligatoire en France ;
- TODO : compléter SIRET, statut juridique, hébergeur, responsable légal.
- Ne pas inventer ces informations.

### `/en`
Non développée en V1. Planifiée en V2.
Ne pas créer de code de structure pour `/en` en V1 sauf si l'architecture Astro le permet sans coût supplémentaire.

## Priorités UX
1. Le téléphone doit être visible sur mobile.
2. Les horaires doivent être faciles à trouver.
3. Le menu doit être compréhensible malgré son caractère changeant.
4. Instagram doit être visible car il porte le menu du jour.
5. Le lieu doit être géolocalisable rapidement.
6. La réservation doit être simple.

## Priorités UX — rappel horaires
Le restaurant est ouvert uniquement vendredi, samedi et dimanche. Cet horaire restreint est critique pour éviter les visites ratées. Afficher les horaires :
- juste après le hero sur la homepage (section 2) ;
- dans le footer sur toutes les pages ;
- en tête de la page `/contact`.

## Footer complet
Inclure :
- nom et signature ;
- adresse : 129 Quai Henri IV, 76200 Dieppe ;
- téléphone : 07 45 16 53 66 ;
- horaires (vendredi, samedi, dimanche — précis) ;
- Instagram ;
- liens pages principales ;
- lien “Boutique — Bientôt disponible” ;
- lien “Mentions légales” → `/mentions-legales` ;
- mention “Site vitrine — Tous droits réservés Les Ursulines”.
