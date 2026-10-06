# 🕹️ ISISS ARCADE - Vetrina Web per Smartphone via QR Code

Piattaforma Web Arcade per l'istituto **ISISS "Matese"**.

Il sito è una **vetrina statica al 100% (HTML, CSS e JavaScript puri)**:
- **Zero server o configurazioni**: non richiede Node.js né database.
- **Pronto per la pubblicazione online**: puoi caricarlo direttamente su **GitHub Pages**, **Vercel**, **Netlify** o qualsiasi hosting web.
- **Rilevamento automatico dell'indirizzo**: una volta pubblicato online, i QR Code si autogenerano istantaneamente con il dominio corretto del sito.

---

## 📱 Come Funziona

1. **Sul monitor del PC**: Il sito mostra la vetrina con i titoli e i **QR Code** ben visibili e ad alto contrasto.
2. **Dal telefono**: Chiunque passa inquadra il QR Code con la fotocamera del proprio smartphone ed entra subito nella partita a schermo intero con controlli touch.

---

## 📂 Struttura del Progetto

```
ISISS-ARCADE/
│
├── index.html                   # Vetrina con i QR Code
├── vr.html                      # Sezione visori VR (Meta Quest)
│
├── assets/
│   ├── css/
│   │   └── style.css            # Grafica pulita e scura ad alto contrasto
│   ├── js/
│   │   ├── qrious.min.js        # Motore QR Code offline e autonomo
│   │   ├── games-data.js        # Lista dei giochi
│   │   └── app.js               # Generazione automatica dei QR Code
│   └── img/
│       └── isiss-logo.png       # Logo ufficiale ISISS Matese
│
└── games/                       # Giochi web per smartphone
    ├── penalty-shootout/        # 3D Penalty Shootout
    ├── matese-runner/           # ISISS Matese 3D Runner
    ├── space-blaster/           # Space Blaster 3D Reloaded
    └── code-academy/            # Code Academy - Il Quiz del Professore
```

---

## ➕ Aggiungere Nuovi Giochi

Basta inserire il gioco nella cartella `games/` e aggiungere una voce in `assets/js/games-data.js`:
```javascript
{
  id: "nuovo-gioco",
  title: "Nome del Gioco",
  icon: "🎮",
  path: "games/nuovo-gioco/index.html"
}
```
Il QR Code per il nuovo gioco apparirà automaticamente nella vetrina!

---

## 🥽 Sezione Visori VR

Quando il sito viene aperto dal browser di un **Meta Quest** (rilevato dallo user agent `OculusBrowser`), `index.html` reindirizza automaticamente a `vr.html`.

- Per restare sulla vetrina dal visore: `index.html?pc`
- Dalla vetrina desktop l'accesso VR è volutamente discreto: si apre cliccando il **logo ISISS** nell'header.
- I giochi VR si aggiungono in `assets/js/games-data.js`, nella lista `VR_GAMES` (stesso formato di `ARCADE_GAMES`).

## Mixed Reality — Space Blaster
La nuova esperienza `vr/index.html` usa **A-Frame + WebXR immersive-ar**. In un browser/visore compatibile, la modalità AR mantiene visibile il passthrough della stanza e sovrappone i bersagli virtuali allo spazio reale.

Per la modalità AR il sito deve essere servito in **HTTPS** (oppure da un contesto locale consentito dal browser). Il supporto `immersive-ar` dipende dal visore e dal browser.
