# ISISS Arcade

Collezione di giochi web, attività digitali e realtà virtuale dell'ISISS "Matese".

## Collezione Giochi Arcade (index.html)
File catalogo: `assets/js/games-data.js` (`ARCADE_GAMES`). Ogni gioco è raggiungibile tramite QR Code o link diretto per smartphone e PC:

1. **3D Penalty Shootout** (`games/penalty-shootout/index.html`):
   - Simulatore di rigori 3D ambientato tra le montagne del Matese al tramonto.
   - Grafica Three.js, audio procedurale Web Audio API, tiro normale o col "cucchiaio", portiere animato, striscioni della scuola e tifo.

2. **ISISS Matese 3D Runner** (`games/matese-runner/index.html`):
   - Corsa a ostacoli 3D tra le aree dell'istituto (ITI, IPSEOA, ITA).
   - Supporto completo per PC (frecce/WASD), Mobile (swipe/tasti a schermo) e Meta Quest / WebXR (tasto "ENTRA IN VR" per giocare in prima persona nella propria stanza).

3. **Space Blaster 3D Reloaded** (`games/space-blaster/index.html`):
   - Sparatutto spaziale 3D retrò con ondate nemiche e boss.

4. **Code Academy: Il Quiz del Professore** (`games/code-academy/index.html`):
   - Quiz interattivo in 3D con domande di programmazione e informatica.

5. **Dedalo: Labirinto 3D** (`games/dedalo/index.html`):
   - Labirinto generato proceduralmente ad ogni livello con seme rigiocabile.
   - Visuale in prima o terza persona, monete da raccogliere, tempo limite, guardiani da schivare e minimappa radar.

6. **Piano Inclinato** (`games/piano-inclinato/index.html`):
   - Puzzle fisico 3D: il giocatore inclina il piano a gravità per far rotolare la sfera fino all'uscita verde.
   - Ostacoli dinamici, ventilatori, lastre di ghiaccio, respingenti e buchi neri.

7. **Tandem Run** (`games/tandem-run/index.html`):
   - Corsa cooperativa a 2 giocatori in locale sullo stesso schermo / dispositivo.
   - Giocatore 1 controlla movimento e salto, Giocatore 2 gestisce scudi, poteri e ricarica energetica.

8. **Escape the Backrooms** (`games/horror/index.html`):
   - Gioco horror 3D in prima persona ambientato nei corridoi infiniti delle Backrooms.
   - Gestione torcia e batteria, stamina per correre, nascondigli, mostro con intelligenza artificiale di pattugliamento e caccia.
   - Supporto nativo WebXR (6DOF con Meta Quest).

---

## Vetrina VR (vr.html)
File: `vr.html` (+ `assets/js/vr.js`). Vetrina dedicata ai giochi in realtà mista e virtuale per Meta Quest, separata da quella dei giochi per telefono/PC (`index.html`).

- I visori Quest che aprono `index.html` vengono portati automaticamente su `vr.html` (`?pc` forza la home).
- Dalla home c'è il banner "Hai un visore Meta Quest?" e il logo nell'header porta alla vetrina VR.
- Le schede sono generate da `VR_GAMES` in `assets/js/games-data.js`.
- Giochi in vetrina:
  - **Logo Blaster MR** (`games/vr-space-blaster/index.html`)
  - **Tiro al Logo MR** (`games/vr-tiro-al-logo/index.html`)
  - **Logo Ninja MR** (`games/vr-logo-ninja/index.html`)
  - **Escape the Backrooms VR** (`games/horror/index.html`)
  - **ISISS Matese Runner VR** (`games/matese-runner/index.html`)

---

## Gioco offline (dino con il logo ISISS)
File: `offline.html` + `sw.js` (nella radice, accanto a `index.html`).

- Se manca internet e si prova ad aprire una qualunque pagina dell'arcade, compare la finta schermata "Nessuna connessione a Internet" di Chrome con il gioco del dinosauro: al posto del dino rotola il logo ISISS Matese.
- Comandi: spazio / freccia su / tocco = salta; freccia giù = abbassati.
- Service worker (`sw.js`) registrato da tutte le pagine.
- Se il dispositivo sa di essere offline la pagina compare subito; con Wi-Fi collegato ma senza internet compare dopo 3 secondi (`TIMEOUT_MS` in `sw.js`). Quando torna la connessione la pagina si ricarica da sola sul sito (controllo ogni 4 secondi).
- Va aperto il sito almeno una volta online; serve HTTPS (GitHub Pages va bene). Se modifichi `offline.html`, cambia `CACHE` in `sw.js` (v3, v4…).
- Il service worker chiede sempre la pagina al server (`cache: 'no-cache'`): senza questo, il browser riusava la copia in cache (10 minuti su GitHub Pages) e offline si vedeva la pagina normale invece del gioco. Se un dispositivo mostra ancora la pagina vecchia, svuota i dati del sito e riapri una volta online.
- Limiti: se il sito non è mai stato aperto sul dispositivo con internet attivo, offline compare il dinosauro vero di Chrome (nessun codice del sito può girare). Nei browser interni di alcune app (fotocamera, WhatsApp, Instagram…) il service worker non funziona: aprire il link in Chrome o Safari.
