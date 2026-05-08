# AGENTS — Les Ursulines

## Project
Les Ursulines — static Astro website for a vegan restaurant / coffee shop / tea room in Dieppe, Normandy.

## Absolute root
Work only inside:
`/Users/ranyoalpha/Documents/Programmation/Site_Creator/Ursulines`

Never write outside this directory.
You may read shared skills from:
`/Users/ranyoalpha/Documents/Programmation/Site_Creator/.claude/skills`

Do not modify shared skills.
Do not touch Masoda or other projects.

## Mandatory brain reading
Before any design, copywriting, architecture or coding decision, read:
1. `brain/index.md`
2. `brain/brand.md`
3. `brain/content.md`
4. `brain/menu.md`
5. `brain/design.md`
6. `brain/colors.md`
7. `brain/typography.md`
8. `brain/images.md`
9. `brain/pages.md`
10. `brain/copywriting.md`
11. `brain/seo.md`
12. `brain/animations.md`
13. `brain/future-roadmap.md`
14. `brain/prompts.md`
15. `brain/wada-palettes.md` if present

## Brand constraints
- Restaurant-first: Les Ursulines is a real vegan restaurant, not only a coffee shop.
- Vegan but welcoming: never judgemental or aggressive.
- Warm, handmade, cultural, inclusive.
- Professional and polished, but not luxury.
- Use real local images.
- No generic restaurant template.
- No fake AI photos of people or food.
- Gina can be used as a subtle illustrated mascot.

## Technical constraints
- Astro static output.
- GitHub Pages compatible — base `/lesursulines`.
- French-first.
- Mobile-first.
- No backend in V1.
- No real e-commerce checkout in V1.
- `npm run build` must pass.

## Typography decisions (final)
- Headings: `Cormorant Garamond`
- Body: `Source Sans 3`
- Short manuscript accent only: `Caveat` — limited to labels, badges, short ardoise details. Never for paragraphs or menus.

## DA decisions (final)
- Hero desktop: facade image to anchor the location in Dieppe.
- Hero mobile: plat or dessert image allowed if facade renders too cold on small screen.
- Homepage V1: no Journal preview section. Replace with social proof block (Google 4.9/5, Instagram, phone).
- Boutique: footer link only in V1. Not in main nav.
- aggregateRating: display visually (4.9/5 — 243 avis) but do not include in JSON-LD until Google Business source is verified.

GitHub Pages — décision finale (ne pas modifier sans validation) :
- repo : `lesursulines`
- site : `https://yoranrd.github.io/lesursulines/`
- base Astro : `/lesursulines`
- canonical : `https://yoranrd.github.io/lesursulines/`

## UX priorities
1. Phone visible on mobile.
2. Hours easy to find.
3. Address and itinerary easy to find.
4. Menu logic clear despite daily changing dishes.
5. Instagram visible for daily menu.
6. Reservation/contact obvious.
7. Real images carry the atmosphere.

## Content safety
Mark TODO instead of inventing facts for:
- real email if different from temporary one;
- Google Maps URL;
- HappyCow link;
- Web3Forms key;
- exact final menu PDF;
- legal pages;
- boutique product list;
- online ordering status.

## Done means
- Brain respected.
- Pages implemented or clearly marked as placeholders.
- SEO metadata present.
- Real images used with alt text.
- Mobile navigation works.
- Build passes.
- Final report lists TODOs and next steps.
