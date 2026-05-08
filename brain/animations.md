# Animations — Les Ursulines

## Rôle du fichier
Définir l’intensité et le style des animations pour que le site reste chaleureux, qualitatif et lisible.

## Intention générale
Le motion doit :
- renforcer la qualité perçue ;
- donner une sensation vivante ;
- accompagner les photos ;
- rester sobre ;
- ne jamais gêner la consultation rapide sur mobile.

## Intensité
- Mobile : faible.
- Desktop : faible à modérée.
- Sections éditoriales fortes : possible modérée si utile.

## Effets autorisés
- fade léger ;
- translate vertical très discret ;
- reveal progressif des images ;
- hover raffiné sur cartes et boutons ;
- micro-interactions sur CTA ;
- apparition subtile du badge Google / Instagram ;
- petit mouvement illustré de Gina si très discret.

## Effets à éviter
- animations partout ;
- scroll hijacking ;
- parallaxe agressive ;
- effet 3D ;
- rotations gadget ;
- gros blur ;
- animation type startup SaaS ;
- animation qui retarde l’accès au téléphone, horaires ou carte.

## Zones possibles
- hero ;
- galerie ;
- cartes menu / brunch ;
- CTA réservation ;
- section histoire / Gina.

## Zones très sobres
- header ;
- menu mobile ;
- horaires ;
- formulaire ;
- footer ;
- contenu SEO / journal.

## Règles techniques
- Préférer `transform` + `opacity`.
- Respecter `prefers-reduced-motion`.
- Pas de dépendance lourde si inutile.
- Si une bibliothèque est utilisée, la limiter à quelques sections.
- Le site doit rester rapide et simple.

## Règle pratique
Une animation doit avoir une fonction : guider le regard, valoriser une photo, rendre un CTA plus évident. Sinon, ne pas l’ajouter.
