const CODE_LEVELS = [
 {
  "id": 1,
  "difficulty": 1,
  "title": "Il Primo Hello World in Python",
  "lang": "Python",
  "intro": "Ciao! Aiutami a completare l'istruzione per stampare a schermo il saluto della scuola!",
  "type": "MULTIPLE_CHOICE",
  "hint": "In Python le stringhe di testo devono essere racchiuse tra virgolette doppie o singole!",
  "explanation": "Perfetto! In Python usiamo print(...) con le virgolette per mostrare del testo a schermo.",
  "code": [
   "# Stampa il messaggio della scuola",
   "print([ ??? ])"
  ],
  "options": [
   {
    "text": "\"Benvenuti all'ISISS MATESE!\"",
    "correct": true
   },
   {
    "text": "Benvenuti all'ISISS MATESE!",
    "correct": false
   },
   {
    "text": "print(\"Hello World\")",
    "correct": false
   },
   {
    "text": "<p>Hello</p>",
    "correct": false
   }
  ]
 },
 {
  "id": 2,
  "difficulty": 1,
  "title": "Titolo Principale in HTML",
  "lang": "HTML5",
  "intro": "Un sito web dell'istituto ha bisogno del tag del titolo principale. Quale tag si usa?",
  "type": "MULTIPLE_CHOICE",
  "hint": "I titoli principali in HTML vanno da <h1> (più grande) a <h6> (più piccolo).",
  "explanation": "Esatto! Il tag <h1> definisce l'intestazione più importante della pagina web.",
  "code": [
   "<!-- Titolo principale del sito -->",
   "<[ ??? ]>ISISS MATESE ITI</h1>"
  ],
  "options": [
   {
    "text": "h1",
    "correct": true
   },
   {
    "text": "title-head",
    "correct": false
   },
   {
    "text": "p",
    "correct": false
   },
   {
    "text": "header-text",
    "correct": false
   }
  ]
 },
 {
  "id": 3,
  "difficulty": 1,
  "title": "Dichiarazione di Variabile in JavaScript",
  "lang": "JavaScript",
  "intro": "Vogliamo memorizzare il numero di studenti dell'istituto in JS moderno. Quale parola chiave usiamo?",
  "type": "MULTIPLE_CHOICE",
  "hint": "In JavaScript moderno usiamo 'let' per variabili modificabili o 'const' per valori costanti.",
  "explanation": "Bravissimo! 'let' definisce una variabile con ambito di blocco in JavaScript.",
  "code": [
   "// Dichiarazione della variabile studenti",
   "[ ??? ] studenti = 850;"
  ],
  "options": [
   {
    "text": "let",
    "correct": true
   },
   {
    "text": "variable",
    "correct": false
   },
   {
    "text": "integer",
    "correct": false
   },
   {
    "text": "def",
    "correct": false
   }
  ]
 },
 {
  "id": 4,
  "difficulty": 2,
  "title": "Trova il Bug in C++!",
  "lang": "C++",
  "intro": "Trova la riga contenente un errore di sintassi (manca un carattere fondamentale alla fine) e cliccala!",
  "type": "BUG_HUNT",
  "hint": "In C++ ogni istruzione deve terminare obbligatoriamente con un punto e virgola ';'.",
  "explanation": "Trovato! Mancava il punto e virgola ';' alla fine dell'istruzione std::cout!",
  "code": [
   "#include <iostream>",
   "int main() {",
   "    std::cout << \"Corso ITI ISISS MATESE\"",
   "    return 0;",
   "}"
  ],
  "bugLineIndex": 2
 },
 {
  "id": 5,
  "difficulty": 1,
  "title": "Interrogazione del Database SQL",
  "lang": "SQL",
  "intro": "Vogliamo selezionare tutti i corsi registrati nella tabella dell'istituto. Completa il comando:",
  "type": "MULTIPLE_CHOICE",
  "hint": "In SQL l'asterisco '*' è il carattere jolly che indica 'tutti i campi/colonne'.",
  "explanation": "Ottimo! L'asterisco '*' seleziona tutte le colonne disponibili nella tabella.",
  "code": [
   "-- Seleziona tutti i record dalla tabella corsi",
   "SELECT [ ??? ] FROM corsi_matese;"
  ],
  "options": [
   {
    "text": "*",
    "correct": true
   },
   {
    "text": "ALL",
    "correct": false
   },
   {
    "text": "EVERY",
    "correct": false
   },
   {
    "text": "table",
    "correct": false
   }
  ]
 },
 {
  "id": 6,
  "difficulty": 2,
  "title": "Condizione IF in Python",
  "lang": "Python",
  "intro": "Verifichiamo se il voto dello studente è maggiore o uguale a 60 per promuoverlo!",
  "type": "MULTIPLE_CHOICE",
  "hint": "L'operatore 'maggioranza o uguaglianza' si scrive con il simbolo '>' seguito da '='.",
  "explanation": "Esatto! In Python e nella maggior parte dei linguaggi usiamo '>=' per verificare 'maggiore o uguale'.",
  "code": [
   "voto = 75",
   "if voto [ ??? ] 60:",
   "    print(\"Esame Superato!\")"
  ],
  "options": [
   {
    "text": ">=",
    "correct": true
   },
   {
    "text": "=>",
    "correct": false
   },
   {
    "text": "EQUALS",
    "correct": false
   },
   {
    "text": "->",
    "correct": false
   }
  ]
 },
 {
  "id": 7,
  "difficulty": 1,
  "title": "Stile del Colore in CSS3",
  "lang": "CSS3",
  "intro": "Cambiamo il colore del testo dei pulsanti nel colore verde della scuola. Quale proprietà CSS usiamo?",
  "type": "MULTIPLE_CHOICE",
  "hint": "In CSS la proprietà per stabilire il colore del testo si chiama semplicemente 'color'.",
  "explanation": "Giusto! La proprietà 'color' controlla il colore del testo in CSS.",
  "code": [
   ".btn-matese {",
   "    [ ??? ]: #22c55e;",
   "    font-weight: bold;",
   "}"
  ],
  "options": [
   {
    "text": "color",
    "correct": true
   },
   {
    "text": "font-color",
    "correct": false
   },
   {
    "text": "text-style",
    "correct": false
   },
   {
    "text": "text-paint",
    "correct": false
   }
  ]
 },
 {
  "id": 8,
  "difficulty": 2,
  "title": "Ciclo For in JavaScript",
  "lang": "JavaScript",
  "intro": "Vogliamo ripetere un ciclo 5 volte partendo da i = 0. Quale condizione di arresto manca?",
  "type": "MULTIPLE_CHOICE",
  "hint": "Il ciclo deve continuare finché 'i' è strettamente minore di 5 (cioè per 0, 1, 2, 3, 4).",
  "explanation": "Perfetto! La condizione 'i < 5' fa eseguire il ciclo esattamente per 5 iterazioni.",
  "code": [
   "for (let i = 0; [ ??? ]; i++) {",
   "    console.log(\"Laboratorio IPSEOA #\" + i);",
   "}"
  ],
  "options": [
   {
    "text": "i < 5",
    "correct": true
   },
   {
    "text": "i == 5",
    "correct": false
   },
   {
    "text": "i = 5",
    "correct": false
   },
   {
    "text": "until 5",
    "correct": false
   }
  ]
 },
 {
  "id": 9,
  "difficulty": 2,
  "title": "Creazione di una Funzione in Python",
  "lang": "Python",
  "intro": "Quale parola chiave si usa per definire una funzione chiamata 'calcola_media' in Python?",
  "type": "MULTIPLE_CHOICE",
  "hint": "In Python 'def' sta per 'define function'.",
  "explanation": "Grandioso! 'def' è la parola chiave usata in Python per dichiarare le funzioni.",
  "code": [
   "[ ??? ] calcola_media(voti):",
   "    return sum(voti) / len(voti)"
  ],
  "options": [
   {
    "text": "def",
    "correct": true
   },
   {
    "text": "function",
    "correct": false
   },
   {
    "text": "func",
    "correct": false
   },
   {
    "text": "create",
    "correct": false
   }
  ]
 },
 {
  "id": 10,
  "difficulty": 2,
  "title": "Selezione del DOM in JavaScript",
  "lang": "JavaScript",
  "intro": "Come selezioniamo l'elemento HTML con id 'logo-matese' usando JavaScript?",
  "type": "MULTIPLE_CHOICE",
  "hint": "Il metodo standard del Document Object Model per recuperare elementi tramite il loro ID univoco.",
  "explanation": "Eccellente! document.getElementById() è il metodo classico per accedere agli elementi HTML!",
  "code": [
   "const logo = document.[ ??? ]('logo-matese');"
  ],
  "options": [
   {
    "text": "getElementById",
    "correct": true
   },
   {
    "text": "findClass",
    "correct": false
   },
   {
    "text": "selectElement",
    "correct": false
   },
   {
    "text": "fetchTag",
    "correct": false
   }
  ]
 },
 {
  "id": 11,
  "difficulty": 2,
  "title": "Gli indici delle liste in Python",
  "lang": "Python",
  "intro": "Abbiamo una lista di studenti. Quale indice stampa 'Luca'? Ricorda: si parte da 0!",
  "type": "MULTIPLE_CHOICE",
  "hint": "Il primo elemento ha indice 0, il secondo indice 1, il terzo indice 2...",
  "explanation": "Esatto! 'Luca' è il secondo elemento, quindi ha indice 1: in programmazione si conta da zero.",
  "code": [
   "studenti = [\"Anna\", \"Luca\", \"Sara\"]",
   "print(studenti[[ ??? ]])"
  ],
  "options": [
   {
    "text": "1",
    "correct": true
   },
   {
    "text": "2",
    "correct": false
   },
   {
    "text": "0",
    "correct": false
   },
   {
    "text": "3",
    "correct": false
   }
  ]
 },
 {
  "id": 12,
  "difficulty": 2,
  "title": "Il link in HTML",
  "lang": "HTML5",
  "intro": "Vogliamo creare un collegamento a un sito. Quale attributo contiene l'indirizzo di destinazione?",
  "type": "MULTIPLE_CHOICE",
  "hint": "È l'abbreviazione di 'hypertext reference'.",
  "explanation": "Bravo! L'attributo href indica la destinazione del collegamento nel tag <a>.",
  "code": [
   "<!-- Link al sito -->",
   "<a [ ??? ]=\"https://www.example.org\">Il nostro sito</a>"
  ],
  "options": [
   {
    "text": "href",
    "correct": true
   },
   {
    "text": "src",
    "correct": false
   },
   {
    "text": "link",
    "correct": false
   },
   {
    "text": "url",
    "correct": false
   }
  ]
 },
 {
  "id": 13,
  "difficulty": 2,
  "title": "Filtrare i dati con SQL",
  "lang": "SQL",
  "intro": "Vogliamo vedere solo gli studenti maggiorenni. Quale parola chiave introduce la condizione?",
  "type": "MULTIPLE_CHOICE",
  "hint": "In inglese significa 'dove': filtra le righe che rispettano la condizione.",
  "explanation": "Perfetto! WHERE filtra le righe della tabella in base a una condizione.",
  "code": [
   "-- Solo gli studenti con almeno 18 anni",
   "SELECT * FROM studenti [ ??? ] eta >= 18;"
  ],
  "options": [
   {
    "text": "WHERE",
    "correct": true
   },
   {
    "text": "WHEN",
    "correct": false
   },
   {
    "text": "IF",
    "correct": false
   },
   {
    "text": "ONLY",
    "correct": false
   }
  ]
 },
 {
  "id": 14,
  "difficulty": 2,
  "title": "Trasformare un array in JavaScript",
  "lang": "JavaScript",
  "intro": "Vogliamo raddoppiare ogni numero. Quale metodo crea un NUOVO array applicando una funzione a ogni elemento?",
  "type": "MULTIPLE_CHOICE",
  "hint": "Pensa a una 'mappa' che collega ogni valore di partenza al suo risultato.",
  "explanation": "Giusto! map() restituisce un nuovo array con il risultato della funzione per ogni elemento.",
  "code": [
   "const numeri = [1, 2, 3];",
   "const doppi = numeri.[ ??? ](n => n * 2);",
   "// doppi vale [2, 4, 6]"
  ],
  "options": [
   {
    "text": "map",
    "correct": true
   },
   {
    "text": "filter",
    "correct": false
   },
   {
    "text": "push",
    "correct": false
   },
   {
    "text": "find",
    "correct": false
   }
  ]
 },
 {
  "id": 15,
  "difficulty": 2,
  "title": "Trova il Bug in Python!",
  "lang": "Python",
  "intro": "Questo programma non parte nemmeno: trova la riga con l'errore di sintassi e cliccala!",
  "type": "BUG_HUNT",
  "hint": "In Python la riga di un 'if' deve finire con un carattere speciale: confrontala con la riga dell'else.",
  "explanation": "Trovato! Dopo la condizione dell'if servono i due punti ':'.",
  "code": [
   "eta = 17",
   "if eta >= 18",
   "    print(\"Maggiorenne\")",
   "else:",
   "    print(\"Minorenne\")"
  ],
  "bugLineIndex": 1
 },
 {
  "id": 16,
  "difficulty": 3,
  "title": "Scrivi tu: il ciclo for in Python",
  "lang": "Python",
  "intro": "Questa volta niente scelte: SCRIVI la parola mancante! Quale funzione genera i numeri da 0 a 4?",
  "type": "TYPE_ANSWER",
  "hint": "È una funzione già pronta di Python che significa 'intervallo'.",
  "explanation": "Ottimo! range(5) genera 0, 1, 2, 3, 4: il ciclo gira esattamente 5 volte.",
  "code": [
   "for i in [ ??? ](5):",
   "    print(\"Evviva ISISS!\")"
  ],
  "answers": [
   "range"
  ]
 },
 {
  "id": 17,
  "difficulty": 3,
  "title": "Rimetti in ordine: la funzione",
  "lang": "Python",
  "intro": "Le righe sono mescolate! Clicca nell'ordine giusto per far funzionare il programma.",
  "type": "ORDER_LINES",
  "hint": "Prima si definisce la funzione (def), poi si usa; il return chiude il corpo.",
  "explanation": "Perfetto! Prima si definisce la funzione, poi la si chiama con print.",
  "code": [
   "def somma(a, b):",
   "    risultato = a + b",
   "    return risultato",
   "print(somma(2, 3))"
  ]
 },
 {
  "id": 18,
  "difficulty": 3,
  "title": "Che cosa stampa? (Python)",
  "lang": "Python",
  "intro": "Leggi bene il codice: quale valore verrà stampato a schermo?",
  "type": "MULTIPLE_CHOICE",
  "hint": "In Python il doppio asterisco non è una moltiplicazione.",
  "explanation": "Esatto! L'operatore ** è l'elevamento a potenza: 3 alla seconda fa 9.",
  "code": [
   "x = 3",
   "y = 2",
   "print(x ** y)"
  ],
  "options": [
   {
    "text": "9",
    "correct": true
   },
   {
    "text": "6",
    "correct": false
   },
   {
    "text": "5",
    "correct": false
   },
   {
    "text": "8",
    "correct": false
   }
  ]
 },
 {
  "id": 19,
  "difficulty": 3,
  "title": "Scrivi tu: contare con SQL",
  "lang": "SQL",
  "intro": "Quanti corsi ci sono nella tabella? SCRIVI la funzione SQL che conta le righe.",
  "type": "TYPE_ANSWER",
  "hint": "In inglese 'contare' si dice così: è una funzione di aggregazione.",
  "explanation": "Grandioso! COUNT(*) restituisce il numero di righe della tabella.",
  "code": [
   "-- Numero totale di corsi",
   "SELECT [ ??? ](*) FROM corsi_matese;"
  ],
  "answers": [
   "count"
  ]
 },
 {
  "id": 20,
  "difficulty": 3,
  "title": "Il bug nascosto in C++",
  "lang": "C++",
  "intro": "Questo codice compila, ma legge fuori dall'array! Trova la riga con l'errore logico.",
  "type": "BUG_HUNT",
  "hint": "L'array ha 5 elementi, con indici da 0 a 4. Cosa succede quando i vale 5?",
  "explanation": "Trovato! Con i <= 5 si legge voti[5], che non esiste. La condizione corretta è i < 5.",
  "code": [
   "int voti[5] = {6, 7, 8, 9, 10};",
   "for (int i = 0; i <= 5; i++) {",
   "    std::cout << voti[i] << std::endl;",
   "}"
  ],
  "bugLineIndex": 1
 },
 {
  "id": 21,
  "difficulty": 3,
  "title": "Rimetti in ordine: il ciclo while",
  "lang": "JavaScript",
  "intro": "Ricostruisci il ciclo: clicca le righe nell'ordine corretto di scrittura.",
  "type": "ORDER_LINES",
  "hint": "Prima si crea la variabile, poi si apre il while; la graffa che chiude va per ultima.",
  "explanation": "Bravissimo! Inizializzazione, condizione, corpo con incremento e infine la chiusura del blocco.",
  "code": [
   "let contatore = 0;",
   "while (contatore < 3) {",
   "    console.log(contatore);",
   "    contatore++;",
   "}"
  ]
 },
 {
  "id": 22,
  "difficulty": 3,
  "title": "Che cosa stampa? (JavaScript)",
  "lang": "JavaScript",
  "intro": "JavaScript a volte sorprende! Cosa viene stampato in console?",
  "type": "MULTIPLE_CHOICE",
  "hint": "Il primo valore è tra virgolette: è una stringa. Cosa fa '+' con le stringhe?",
  "explanation": "Esatto! Con una stringa l'operatore + concatena: '5' e 3 diventano '53'.",
  "code": [
   "console.log(\"5\" + 3);"
  ],
  "options": [
   {
    "text": "53",
    "correct": true
   },
   {
    "text": "8",
    "correct": false
   },
   {
    "text": "2",
    "correct": false
   },
   {
    "text": "NaN",
    "correct": false
   }
  ]
 },
 {
  "id": 23,
  "difficulty": 3,
  "title": "Scrivi tu: il menu con Flexbox",
  "lang": "CSS3",
  "intro": "SCRIVI il valore di display che dispone le voci del menu in riga e permette di usare justify-content.",
  "type": "TYPE_ANSWER",
  "hint": "È il nome del modello di layout 'flessibile' di CSS3.",
  "explanation": "Ottimo! display: flex attiva Flexbox e rende utilizzabili le proprietà come justify-content.",
  "code": [
   ".menu {",
   "    display: [ ??? ];",
   "    justify-content: space-between;",
   "}"
  ],
  "answers": [
   "flex",
   "flex;"
  ]
 }
];
