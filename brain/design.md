# Design System Intent — Les Ursulines

## Direction générale
Le site doit être :
- chaleureux ;
- végétal sans cliché ;
- fait main ;
- culturel ;
- local ;
- accueillant ;
- moderne et qualitatif ;
- simple à naviguer ;
- mobile-first ;
- plus travaillé que l’Instagram actuel.

## Sensation recherchée
Le visiteur doit ressentir :
- une vraie table locale ;
- une cuisine généreuse ;
- un lieu où l’on peut rester ;
- une atmosphère inclusive sans discours lourd ;
- un mélange de restaurant, salon de thé, culture et comptoir végétalien ;
- une qualité professionnelle sans perdre le côté humain.

## Métaphore visuelle
“Botanical café + restaurant culturel fait maison + table locale sur le port de Dieppe.”

## Références internes observées
À extraire des photos :
- logo noir et blanc dessiné ;
- enseigne sombre ;
- ardoise manuscrite ;
- assiettes vintage ;
- nappes fleuries ;
- plats généreux ;
- desserts maison ;
- terrasse et façade ;
- cuisine simple mais vivante.

## Règles visuelles
- Utiliser les vraies images du lieu.
- Beaucoup de respiration.
- Hiérarchie lisible.
- Blocs simples mais raffinés.
- Coins arrondis cohérents, pas excessifs.
- Ombres douces.
- Fonds crème / papier / table, jamais blanc clinique.
- Détails dessinés ou linéaires possibles, inspirés du logo.
- Motifs botaniques possibles avec grande modération.

## Niveau de simplicité
Le site doit rester simple comme Masoda dans l’usage, mais ne doit pas paraître cheap ou minimaliste par défaut.

Priorité :
- clarté ;
- belles sections ;
- belles photos ;
- CTA visibles ;
- rythme éditorial ;
- détails de marque.

## Images
Les photos doivent porter l’identité. Éviter de trop les filtrer. Corriger uniquement :
- contraste ;
- recadrage ;
- cohérence de ratio ;
- lisibilité.

## Rendu attendu
- restaurant local premium-accessible ;
- pas une chaîne ;
- pas une startup ;
- pas une app food delivery ;
- pas un temple wellness beige ;
- pas un restaurant gastro froid.

## Interdits
- design corporate froid ;
- template restaurant générique ;
- vegan militant agressif ;
- vert fluo / greenwashing visuel ;
- luxe sombre excessif ;
- esthétique enfantine ;
- images IA de personnes ;
- photos stock génériques sans nécessité ;
- surcharge décorative ;
- animations gadget.

## Détails de marque recommandés
- Ligne manuscrite / soulignement discret inspiré de l’ardoise.
- Mascotte Gina (PNG noir/blanc) — voir section dédiée ci-dessous.
- Logo noir et blanc utilisé comme ancre de marque.
- Petites mentions culturelles dans le copywriting.
- Cartes “ardoise du jour” sans faire faux tableau noir partout.

## Gina — fil rouge visuel
Gina, la petite bouledogue française du restaurant, est utilisée comme fil rouge discret du site. Présentée comme la vraie directrice des opérations !

Sources officielles : PNG noir/blanc fournis par l'utilisateur dans `Images/Gina/`, copiés dans `public/images/gina/`.

Règles :
- mascotte expressive, drôle, vivante — mais intégrée avec sobriété ;
- noir/blanc, jamais cartoon enfantin malgré l'expressivité, jamais 3D ;
- toujours secondaire à l'information utile : ne casse pas les CTA, ne s'installe pas dans le hero ;
- une seule Gina visible par écran sur mobile ;
- privilégier les variantes "-profile" (smile-profile, cake-profile, birthday-profile) dans les sections éditoriales ou élégantes ;
- variantes pleines (welcome, cake, birthday, thumbs-up) pour les contextes vivants/joyeux.

Implémentation : 12 variantes PNG dans `public/images/gina/`, exposées via le composant `src/components/ui/GinaMascot.astro`. Voir `brain/images.md` pour le mapping complet et les placements.

## Décision DA hero (validée)
- Desktop : utiliser une image de façade (`facade.webp`, `facade_2.webp` ou `facade_3.webp`) pour ancrer physiquement le lieu à Dieppe et renforcer la confiance locale.
- Mobile : si la façade donne un rendu trop froid ou peu lisible sur petit écran, autoriser un plat ou dessert appétissant à la place, via `object-position` ou image différente selon breakpoint.

Cette décision est finale pour V1. Ne pas utiliser d’image de personne IA ou de photo stock.

## Exemple concret de section réussie
Une section “Aujourd’hui à l’ardoise” peut combiner :
- fond crème ;
- titre serif doux ;
- photo d’assiette ;
- petite étiquette olive ;
- phrase “le menu change chaque jour” ;
- bouton Instagram ;
- lien téléphone.

Cela traduit physiquement le fonctionnement réel du restaurant : comme une ardoise dehors, mais en version digitale lisible et premium.
