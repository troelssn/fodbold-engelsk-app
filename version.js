/* ══════════════════════════════════════════════
   VERSIONSHISTORIK — opdatér ved hver release
   Tilføj et nyt objekt ØVERST i listen.
   Forsiden og info-modalen i index.html opdaterer sig selv.
══════════════════════════════════════════════ */
const VERSION_HISTORY = [
  { v:"2.2", date:"12. juni 2026 kl. 10:30", notes:[
    "Versionshistorik flyttet til særskilt fil (version.js)",
  ]},
  { v:"2.1", date:"12. juni 2026 kl. 10:00", notes:[
    "Mobiloptimering — tastaturet skubber ikke længere layoutet rundt",
    "Info-knap på forsiden med version og historik",
  ]},
  { v:"2.0", date:"12. juni 2026 kl. 09:15", notes:[
    "Lyd — engelsk udtale ved rigtige svar og oplæsning af historier",
    "Stjerne-rating (1–3 ⭐) per spil baseret på fejl",
    "Spring et ord over i stavningsspillet",
    "Det rigtige ord vises og udtales efter 3 forkerte forsøg",
  ]},
  { v:"1.3", date:"2. juni 2026 kl. 10:25", notes:[
    "Kamp-progression — to kampe per niveau",
    "Sandt eller Falsk som femte spil",
  ]},
  { v:"1.2", date:"2. juni 2026 kl. 09:09", notes:[
    "Udfyld Sætningen som fjerde spil",
    "Fremskridt gemmes i localStorage",
  ]},
  { v:"1.1", date:"2. juni 2026 kl. 08:49", notes:[
    "Tre sværhedsniveauer",
  ]},
  { v:"1.0", date:"1. juni 2026 kl. 14:46", notes:[
    "Første udgave — Ord-Aflevering, Kamprapport og Målspark",
  ]},
];
const CURRENT_VERSION = VERSION_HISTORY[0];
