/**
 * ISISS ARCADE - Catalogo Giochi Web & Foto Orientamento
 * 
 * NOTA PER SOSTITUIRE LE FOTO CON QUELLE REALI DELLA SCUOLA:
 * Puoi inserire le tue foto reali (.jpg o .png) nella cartella "assets/img/"
 * e cambiare il percorso nel campo "photo" qui sotto (es. "assets/img/mia-foto.jpg").
 */

const ARCADE_GAMES = [
  {
    id: "penalty-shootout",
    title: "3D Penalty Shootout",
    icon: "⚽🥅",
    tagline: "Calcia il rigore e batti il portiere in 3D!",
    indirizzo: "ISISS Matese Edition",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#22c55e",
    path: "games/penalty-shootout/index.html"
  },
  {
    id: "matese-runner",
    title: "ISISS Matese 3D Runner",
    icon: "🏃🏫",
    tagline: "Corri in 3D tra gli ostacoli e fai il record!",
    indirizzo: "ISISS Matese Edition",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#00f0ff",
    path: "games/matese-runner/index.html"
  },
  {
    id: "space-blaster",
    title: "Space Blaster 3D Reloaded",
    icon: "🚀💥",
    tagline: "Pilota la tua nave e distruggi le ondate nemiche!",
    indirizzo: "Open Day",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#ff007f",
    path: "games/space-blaster/index.html"
  },
  {
    id: "code-academy",
    title: "Code Academy: Il Quiz del Professore",
    icon: "💻🎓",
    tagline: "Metti alla prova le tue conoscenze di programmazione!",
    indirizzo: "Informatica • Coding",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#a855f7",
    path: "games/code-academy/index.html"
  }
];

// Vetrina VR (vr.html): giochi in realtà mista per Meta Quest (WebXR + three.js).
const VR_GAMES = [
  {
    id: "vr-space-blaster",
    title: "Logo Blaster MR",
    icon: "🎯✨",
    tagline: "Spara al logo ISISS che scappa nella tua stanza. Tre modalità, badge bonus, combo e record.",
    detail: "Classic · Blitz · Precision",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#ff007f",
    path: "games/vr-space-blaster/index.html"
  },
  {
    id: "vr-tiro-al-logo",
    title: "Tiro al Logo MR",
    icon: "🥫🎳",
    tagline: "Come il tiro alle lattine: lancia le palle e abbatti la piramide di blocchi col logo.",
    detail: "3 livelli · 5, 7 e 9 palle",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#ffb020",
    path: "games/vr-tiro-al-logo/index.html"
  },
  {
    id: "vr-logo-ninja",
    title: "Logo Ninja MR",
    icon: "⚔️✨",
    tagline: "Impugna i controller come spade e taglia al volo i badge ITI, ITA e IPSEOA. Occhio alle bombe!",
    detail: "60 secondi · combo fino a x5",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#12d9ff",
    path: "games/vr-logo-ninja/index.html"
  }
];

const VR_GAMES_LEGACY = [
  // Vecchi giochi A-Frame: ancora presenti in games/ ma non mostrati nella vetrina VR.
  {
    id: "vr-penalty",
    title: "Penalty Shootout AR",
    icon: "⚽🥅",
    tagline: "Porta e portiere nella tua stanza: calcia la palla con il controller!",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#22c55e",
    path: "games/vr-penalty/index.html"
  },
  {
    id: "vr-runner",
    title: "Matese Runner AR",
    icon: "🏃🏫",
    tagline: "Una pista sul pavimento: spostati, salta e abbassati per schivare gli ostacoli!",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#00f0ff",
    path: "games/vr-runner/index.html"
  },
  {
    id: "vr-space-blaster",
    title: "ISISS Matese Logo Blaster AR",
    icon: "🎯✨",
    tagline: "Spara al logo ISISS nella tua stanza: 3 modalità, badge bonus e record!",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#ff007f",
    path: "games/vr-space-blaster/index.html"
  },
  {
    id: "vr-code-academy",
    title: "Code Academy AR",
    icon: "💻🎓",
    tagline: "Il quiz del Professore su un pannello che fluttua davanti a te.",
    photo: "assets/img/isiss-logo.png",
    accentColor: "#a855f7",
    path: "games/vr-code-academy/index.html"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ARCADE_GAMES, VR_GAMES, VR_GAMES_LEGACY };
}

