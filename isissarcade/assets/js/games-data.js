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
  // Aggiungi qui i giochi per visore (es. Meta Quest 2):
  // { id: "nome", title: "Titolo", icon: "🥽", tagline: "...", photo: "assets/img/isiss-logo.png", accentColor: "#a855f7", path: "games/nome/index.html" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ARCADE_GAMES, VR_GAMES };
}

