# ISISS Arcade

## Vetrina VR
`vr.html` raccoglie tutti i giochi VR/MR (catalogo `VR_GAMES` in `assets/js/games-data.js`). Dal Meta Quest, `index.html` porta direttamente qui; ogni gioco ha il link "← Tutti i giochi VR" per tornare. Per aggiungere un gioco basta una nuova voce in `VR_GAMES`.

## Logo Blaster MR (aggiornato)
File: `games/vr-space-blaster/index.html` (si apre dalla vetrina `vr.html`).
Versione WebXR autonoma (three.js): non usa più A-Frame né `ar-common.js`. Gli altri giochi VR non sono stati toccati.

- Punti, combo, tempo e schermata finale sono pannelli 3D dentro la stanza (prima erano HTML, invisibili nel visore).
- Schermata finale con pulsanti da puntare: scelta modalità (CLASSIC / BLITZ / PRECISION), RIGIOCA, ESCI.
- Un solo colpo per pressione del grilletto; contano solo i colpi dentro il cerchio del logo; centro = PERFETTO (x2).
- Badge ITI / ITA / IPSEOA: +250 punti e +3 secondi. Combo fino a x5. Record salvato per ogni modalità.
- Il logo scappa quando ti avvicini ed evita pareti e mobili (Configurazione spazio del Quest).
- Modalità a schermo per telefono/PC: tocca per sparare, trascina per guardarti intorno.

## Tiro al Logo MR (nuovo)
File: `games/vr-tiro-al-logo/index.html`. Si apre dalla vetrina `vr.html`.
Come il tiro alle lattine delle feste di paese, ma con blocchi col logo ISISS: un banco compare davanti a te nella stanza, grilletto = lancio di una palla.

- 3 livelli (piramide da 6, 10, 15 blocchi), banco sempre più lontano, 5 / 7 / 9 palle.
- 100 punti per blocco, +50 per ogni palla avanzata a fine livello. Record salvato.
- Punti, palle e schermata finale sono un pannello 3D accanto al banco; a fine partita il grilletto fa rigiocare.
- Modalità a schermo per telefono/PC: tocca dove vuoi lanciare.
