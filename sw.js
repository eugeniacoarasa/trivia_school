const CACHE_NAME = 'trivia-school-v1.2.0';
const urlsToCache = [
  './index.html',
  './script.js',
  './preguntas_3.js',
  './preguntas_4.js',
  './preguntas_5.js',
  './preguntas_6.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});