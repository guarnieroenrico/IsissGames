# ISISS Arcade

## Vetrina VR (nuova)
File: `vr.html` (+ `assets/js/vr.js`). Vetrina dedicata ai giochi in realtà mista per Meta Quest, separata da quella dei giochi per telefono/PC (`index.html`).

- I visori Quest che aprono `index.html` vengono portati automaticamente su `vr.html` (`?pc` forza la home).
- Dalla home c'è il banner "Hai un visore Meta Quest?" e il logo nell'header porta alla vetrina VR.
- Le schede sono generate da `VR_GAMES` in `assets/js/games-data.js`: per aggiungere un gioco VR basta aggiungere una voce lì.
- Giochi in vetrina: Logo Blaster MR, Tiro al Logo MR e Logo Ninja MR. I vecchi giochi A-Frame (`vr-penalty`, `vr-runner`, `vr-code-academy`) restano in `games/` e in `VR_GAMES_LEGACY`, ma non sono mostrati.
- Il link "Torna alla vetrina VR" dei due giochi riporta a `vr.html`.

## Logo Blaster MR (aggiornato)
File: `games/vr-space-blaster/index.html`.
Versione WebXR autonoma (three.js): non usa più A-Frame né `ar-common.js`. Gli altri giochi VR non sono stati toccati.

- Punti, combo, tempo e schermata finale sono pannelli 3D dentro la stanza (prima erano HTML, invisibili nel visore).
- Schermata finale con pulsanti da puntare: scelta modalità (CLASSIC / BLITZ / PRECISION), RIGIOCA, ESCI.
- Un solo colpo per pressione del grilletto; contano solo i colpi dentro il cerchio del logo; centro = PERFETTO (x2).
- Badge ITI / ITA / IPSEOA: +250 punti e +3 secondi. Combo fino a x5. Record salvato per ogni modalità.
- Il logo scappa quando ti avvicini ed evita pareti e mobili (Configurazione spazio del Quest).
- Modalità a schermo per telefono/PC: tocca per sparare, trascina per guardarti intorno.

## Tiro al Logo MR (nuovo)
File: `games/vr-tiro-al-logo/index.html`. Si apre dal link "Prova anche: Tiro al Logo" nella schermata iniziale di Logo Blaster (e viceversa), oppure direttamente dall'indirizzo.
Come il tiro alle lattine delle feste di paese, ma con blocchi col logo ISISS: un banco compare davanti a te nella stanza, grilletto = lancio di una palla.

- 3 livelli (piramide da 6, 10, 15 blocchi), banco sempre più lontano, 5 / 7 / 9 palle.
- 100 punti per blocco, +50 per ogni palla avanzata a fine livello. Record salvato.
- Punti, palle e schermata finale sono un pannello 3D accanto al banco; a fine partita il grilletto fa rigiocare.
- Modalità a schermo per telefono/PC: tocca dove vuoi lanciare.


## Logo Ninja MR
File: `games/vr-logo-ninja/index.html` (WebXR + three.js 0.180, un solo file).

- I controller sono due spade luminose: si tagliano i badge ITI/ITA/IPSEOA (100 punti) e il logo (300 punti, +2 s) che cadono dall'alto davanti al giocatore.
- Le bombe tolgono 5 secondi e azzerano il combo. Combo fino a x5; tagliare due bersagli quasi insieme dà +50 ("DOPPIO!").
- Partita da 60 secondi con countdown 3-2-1; la difficoltà cresce (più bersagli, più bombe). Record salvato in `localStorage`.
- Il tabellone si posiziona davanti a dove si guarda al momento dell'ingresso in MR, come negli altri giochi.
- Modalità a schermo per telefono/PC: si taglia strisciando il dito (o il mouse tenuto premuto).
- Costanti da ritoccare in cima allo script: `GAME_T` (durata), `GF` (gravità dei bersagli che cadono: più bassa = più lenti), `BLADE` (lunghezza spada), `MINV_XR` (velocità minima per tagliare).
