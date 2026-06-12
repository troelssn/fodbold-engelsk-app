# Fodbold Engelsk ⚽

Læringsapp hvor børn lærer engelsk gennem fodbold-temaede minispil. Dansk UI, engelsk indhold.

## Arkitektur

- **Ingen build-step.** Hele appen er én HTML-fil ([index.html](index.html)) med React 18 + Babel Standalone fra CDN. JSX'en ligger i et `<script type="text/babel">`-blok og kompileres i browseren. Appen skal kunne åbnes direkte via `file://`.
- [version.js](version.js) — versionshistorik (`VERSION_HISTORY` / `CURRENT_VERSION`), indlæses som klassisk script før app-koden.
- [FutureImprovement.md](FutureImprovement.md) — idéliste over kommende forbedringer.

## VIGTIGT: Versionshistorik

**Hver gang der laves ændringer i appen, SKAL [version.js](version.js) opdateres:**

1. Tilføj et nyt objekt **øverst** i `VERSION_HISTORY` med bumpet versionsnummer, dato + klokkeslæt og en punktliste over ændringerne (på dansk)
2. Mindre ændringer/fixes bumper minor (2.1 → 2.2); større nye features bumper major (1.x → 2.0)

Forsiden og info-modalen viser automatisk nyeste version — de skal ikke røres.

## Konventioner

- Al UI-tekst er på **dansk**; læringsindholdet (ord, historier, sætninger) er på engelsk
- Styling er inline styles + få CSS-klasser i `<head>` (klasser bruges kun hvor inline ikke kan: media queries, `clamp()`, dvh-fallbacks)
- Fodbold-tema i alt feedback ("MÅL! ⚽", "Offside! ❌") — målgruppen er børn
- Fremskridt gemmes i `localStorage` under nøglen `fodboldEngelsk` — overvej migration hvis datastrukturen ændres (se `completed`-migrationen i `App`)
- Lyd bruger Web Speech API (`speak()`-helperen, `en-GB`) — ingen lydfiler

## Verifikation efter ændringer

Syntaks-tjek JSX'en (ingen tests findes):

```bash
node -e "
const fs = require('fs');
const m = fs.readFileSync('index.html','utf8').match(/<script type=\"text\/babel\">([\s\S]*?)<\/script>/);
fs.writeFileSync(process.env.TEMP + '/app.jsx', m[1]);
" && npx --yes esbuild --loader:.jsx=jsx "$TEMP/app.jsx" --outfile="$TEMP/app.out.js"
```

## Når en forbedring implementeres

Markér punktet i [FutureImprovement.md](FutureImprovement.md) som `~~overstreget~~ ✅ Implementeret (kort note)`.
