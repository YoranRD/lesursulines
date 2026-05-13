# Images — Les Ursulines

## Rôle du fichier
Guider le choix, l’organisation et l’usage des images locales.

## Source principale
Images locales fournies dans :
`/Users/ranyoalpha/Documents/Programmation/Site_Creator/Ursulines/Images`

Ne pas supprimer ce dossier.
Si les images sont copiées dans `public/images/`, conserver les originales.

## Images connues
- `baking_cookies.webp`
- `epicerie.webp`
- `bowl_sucre.webp`
- `bowl-1.webp`
- `dessert_1.webp`
- `dessert_2.webp`
- `dessert_3.webp`
- `facade.webp`
- `facade_2.webp`
- `facade_3.webp`
- `horaires_et_concept.webp`
- `menu_hors_plats.webp`
- `logo_ursulines.webp`
- `plat_01.webp`
- `plat_1.webp`
- `plat_2.webp`
- `plat_3.webp`
- `plat_4.webp`
- `plat_5.webp`
- `plat_6.webp`
- `plat_7.webp`
- `plat_8.webp`

## Usage recommandé
### Hero — décision DA validée
- Desktop : utiliser `facade.webp`, `facade_2.webp` ou `facade_3.webp` en priorité. La façade ancre le lieu à Dieppe, renforce la confiance locale et différencie des sites génériques.
- Mobile : si la façade donne un rendu froid ou peu engageant sur petit écran, autoriser un plat généreux ou un dessert appétissant via `object-position` CSS ou image alternative selon breakpoint.
- Règle commune : le hero doit immédiatement dire "restaurant réel à Dieppe", pas concept abstrait.
- Ne jamais utiliser une image IA ou stock générique en hero.

### Carte / menu
- `menu_hors_plats.webp` pour la carte boissons / éléments fixes.
- `horaires_et_concept.webp` peut servir pour raconter le concept, mais attention à la lisibilité.
- Photos de plats pour illustrer le menu changeant.

### Brunch
- `bowl_sucre.webp`
- `bowl-1.webp`
- desserts
- plats colorés

### Desserts / tea-time
- `dessert_1.webp`
- `dessert_2.webp`
- `dessert_3.webp`
- `baking_cookies.webp`

### À propos
- façade ;
- logo ;
- détails du lieu ;
- Gina si image disponible ;
- images de cuisine / produits.

### Galerie
Mixer :
- plats salés ;
- desserts ;
- façade ;
- ardoise ;
- détail végétal ;
- produit local / épicerie.

## Style de recadrage
- Éviter de montrer seulement des gros plans répétitifs.
- Créer une alternance : façade, plat complet, dessert, détail, table, ardoise.
- Préserver l’aspect vrai / fait maison.
- Ne pas trop lisser les photos.

## Alt text
Chaque image doit avoir un texte alternatif utile.

Exemples :
- “Façade du restaurant végétalien Les Ursulines à Dieppe.”
- “Assiette végétalienne maison avec avocat, riz et légumes.”
- “Dessert au chocolat servi chez Les Ursulines.”
- “Carte indicative des boissons et douceurs des Ursulines.”

## Images IA / stock
Interdit en V1 :
- photos IA de personnes ;
- photos IA de nourriture ;
- banques d’images génériques de coffee shop.

Toléré seulement si utile :
- motif botanique vectoriel discret ;
- texture papier abstraite légère.

## Gina — directrice du lieu

### Sources officielles
Les visuels officiels de Gina sont les PNG noir/blanc fournis par l'utilisateur :
- **Originaux** (ne pas supprimer) : `/Users/ranyoalpha/Documents/Programmation/Site_Creator/Ursulines/Images/Gina/`
- **PNG copiés dans le projet** (sources de conversion) : `public/images/gina/*.png`
- **WebP optimisés servis par le site** (référencés par le composant) : `public/images/gina/*.webp`

Les WebP sont produits avec `cwebp -q 90 -m 6 -sharp_yuv` (qualité quasi-perceptuellement-lossless, ~94 % de réduction par rapport aux PNG). À régénérer si les PNG sources sont mis à jour.

Les anciens essais SVG sont archivés dans `public/images/gina/old-svg/` pour rollback éventuel — ils ne sont plus utilisés et ne doivent pas être référencés.

### Variantes disponibles
Mapping `variant` → fichier (12 variantes) :

| Variant | Fichier | Ton |
|---|---|---|
| `main` | `gina-main.png` | Référence neutre |
| `welcome` | `gina-welcome.png` | Accueil, geste vivant |
| `smile` | `gina-smile.png` | Joyeuse, expressive |
| `smile-profile` | `gina-smile-profile.png` | Sourire de profil, sobre |
| `serious` | `gina-serious.png` | Posée (réutilise la référence neutre) |
| `cake` | `gina-cake.png` | Mange un gâteau, vivant |
| `cake-profile` | `gina-cake-profile.png` | Gâteau de profil, sobre |
| `tea` | `gina-tea.png` | Boit du thé |
| `guide` | `gina-guide.png` | Indique le chemin |
| `birthday` | `gina-birthday.png` | Anniversaire, vivant |
| `birthday-profile` | `gina-birthday-profile.png` | Anniversaire de profil, sobre |
| `thumbs-up` | `gina-thumbs-up.png` | Clin d'œil, patte levée |

Composant : `src/components/ui/GinaMascot.astro`
Props : `variant`, `size` (`sm | md | lg`), `caption?`, `decorative?`, `class?`.

### Règles de sobriété
- Gina ne doit jamais dominer une section.
- Tailles :
  - `sm` : clamp(64px, 10vw, 96px)
  - `md` : clamp(120px, 16vw, 180px)
  - `lg` : clamp(180px, 24vw, 260px) — rare, réservé à `/a-propos`
- Sur mobile : `md` ne dépasse pas 38 % de la largeur, `lg` pas plus de 50 %.
- Pas de Gina dans le hero principal.
- Une seule Gina visible par écran sur mobile.
- Gina ne doit jamais nuire aux CTA principaux (Appeler, Carte, Itinéraire, Instagram).
- Privilégier les variantes "-profile" dans les contextes éditoriaux ou élégants ;
  variantes pleines (`welcome`, `cake`, `birthday`, `thumbs-up`) pour les contextes vivants/joyeux.

### Placements actuels
- Homepage / `StorySection` — `welcome` + légende « Gina veille aussi sur la maison. »
- `/carte` — `cake` (décorative) près des desserts ; `tea` + légende près des boissons.
- `/brunch` — `birthday-profile` + légende dans l'encart groupes.
- `/a-propos` — section dédiée avec `main` (size `lg`) + paragraphe « Gina, la directrice secrête de la maison ».
- `/contact` — `guide` + légende « Gina vous montre le chemin. ».
- `/boutique` — `cake` + légende dans le bloc d'intro.
- `/journal` — `smile-profile` (décorative) en petit rappel éditorial discret.
- Footer — pas de Gina (volontaire, pour rester non répétitif).

### Accessibilité
- `decorative` à `true` ⇒ `alt=""` et `aria-hidden="true"`.
- Sinon : alt explicite (ou la légende fournie). Voir le tableau d'alts dans `GinaMascot.astro`.
- Ne pas multiplier les `alt` répétitifs sur la même page.

### Style visuel
- Mascotte expressive, noir/blanc, ton drôle et vivant.
- Intégration sobre : Gina rythme le site sans le rendre enfantin.
- Pas de modification du fond des PNG (risque d'abîmer l'image).
- Si fond blanc visible : placer sur fonds clairs (`section--cream`, `section--paper`, `section--soft`, `section--tea`).
- Léger `border-radius` autorisé pour adoucir l'intégration dans les cartes.

### Optimisation / poids
- PNG sources : ~800 KB–1 MB par fichier (~11.4 MB cumulé) — conservés comme sources de conversion.
- WebP servis : ~37–73 KB par fichier (~752 KB cumulé) — réduction d'environ 94 %.
- Servis avec `loading="lazy"` et `decoding="async"`.

Si les PNG sources sont régénérés, relancer la conversion :
```bash
for f in public/images/gina/*.png; do
  cwebp -q 90 -m 6 -sharp_yuv "$f" -o "${f%.png}.webp"
done
```

Évolution future possible : import via `astro:assets` après déplacement dans `src/assets/gina/` pour profiter des `srcset` automatiques. Le composant `GinaMascot.astro` devrait alors basculer sur `<Image>` d'Astro.

## TODO image
Prévoir une liste de photos à refaire plus tard :
- portrait naturel de Frédérique en cuisine ;
- portrait naturel de Delphine en salle ;
- photo large de l’intérieur ;
- photo propre de la terrasse ;
- photo de groupe / grande tablée sans mise en scène artificielle ;
- photo nette du menu / ardoise du jour.
