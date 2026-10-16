/* ISISS Arcade — service worker
   Quando manca la connessione e si prova ad aprire una pagina del sito,
   mostra offline.html (il gioco del logo, come il dinosauro di Chrome).
   Le pagine normali NON vengono messe in cache: online si vede sempre la versione aggiornata. */
const CACHE = 'isiss-offline-v1';
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
  event.respondWith(
    fetch(req).catch(() =>
      caches.open(CACHE).then((c) => c.match(OFFLINE_URL)).then((r) => r || Response.error())
    )
  );
});
