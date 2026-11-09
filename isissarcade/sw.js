/* ISISS Arcade — service worker
   Quando manca la connessione e si prova ad aprire una pagina del sito,
   mostra offline.html (il gioco del logo, come il dinosauro di Chrome).
   Le pagine normali NON vengono messe in cache: online si vede sempre la versione aggiornata. */
const CACHE = 'isiss-offline-v3';
const TIMEOUT_MS = 3000; // oltre questo tempo senza risposta si considera "offline" (Wi-Fi senza internet)
const OFFLINE_URL = new URL('offline.html', self.registration.scope).href;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(new Request(OFFLINE_URL, { cache: 'reload' })))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.mode !== 'navigate') return;

  const offlinePage = () =>
    caches.open(CACHE).then((c) => c.match(OFFLINE_URL)).then((r) => r || Response.error());

  // Il dispositivo sa già di essere offline: risposta immediata.
  if (self.navigator && self.navigator.onLine === false) {
    event.respondWith(offlinePage());
    return;
  }

  // 'no-cache' = chiedi sempre al server: senza rete fallisce subito, invece di riusare la copia
  // che il browser tiene per 10 minuti (GitHub Pages) e che mostrerebbe la pagina normale offline.

  // Rete lenta o "Wi-Fi senza internet": non aspettare il timeout del browser (decine di secondi).
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), TIMEOUT_MS));
  event.respondWith(Promise.race([fetch(req, { cache: 'no-cache' }), timeout]).catch(offlinePage));
});
