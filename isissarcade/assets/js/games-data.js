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

const VR_GAMES = [
  // Giochi in Realtà Aumentata (A-Frame, passthrough Meta Quest): si vedono e si giocano nella tua stanza.
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
    tagline: "Spara al logo ISISS Matese nella tua stanza e fai punti!",
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
  module.exports = { ARCADE_GAMES, VR_GAMES };
}

