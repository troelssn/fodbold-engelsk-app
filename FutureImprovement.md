# Suggestions to Future Improvement

## Indhold og læring
- Flere ord og historier per niveau — lige nu er der kun ét sæt, så det bliver hurtigt kedeligt ved genspil
- ~~Lyd — udtale af de engelske ord når man matcher dem rigtigt~~ ✅ Implementeret (Web Speech API — udtale ved rigtige svar + oplæsning af historier)
- ~~Flere spiltyper, fx udfyld-det-manglende-ord i en sætning~~ ✅ Implementeret

## Progression og motivation
- ~~Gem fremskridt i `localStorage` så XP og niveau huskes mellem sessioner~~ ✅ Implementeret
- ~~Stjerne-rating per spil (1–3 stjerner baseret på fejl/hastighed)~~ ✅ Implementeret (baseret på fejl: 0 fejl = ⭐⭐⭐, 1–2 = ⭐⭐, flere = ⭐)
- Daglig udfordring — ét nyt ord om dagen

## Brugervenlighed
- ~~Mobiloptimering — tastaturet på mobil skubber layoutet rundt i stavningsspillet~~ ✅ Implementeret (dvh-højder, top-justeret layout på mobil, `interactive-widget=resizes-visual`, scroll-til-input ved fokus, responsive overskrifter)
- ~~Mulighed for at springe et ord over og vende tilbage~~ ✅ Implementeret (i stavningsspillet — ordet ryger om bagest i køen)
- ~~Vis den rigtige oversættelse efter forkert svar, så man faktisk lærer af fejlene~~ ✅ Implementeret (stavningsspillet viser og udtaler det rigtige ord efter 3 forsøg)
