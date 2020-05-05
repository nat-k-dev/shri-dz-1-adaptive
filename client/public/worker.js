'use strict';
const CACHE_NAME = 'CI-server-v1.0.5';
const cacheList = [
    'favicon.ico',
    '/fonts'
];

console.log('WORKER: start.');

self.addEventListener("install", function(event) {
    console.log('WORKER: install event in progress.');
    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then(function(cache) {
          return cache.addAll(cacheList);
        })
        .then(function() {
          console.log('WORKER: install completed');
        })
    );
  });

const CACHE_PREFIX = 'CI-server';

this.addEventListener('activate', function (event) {
    console.log('WORKER: activate event in progress.');
    event.waitUntil(self.clients.claim());
});


self.addEventListener("fetch", function(event) {
  console.log('WORKER: fetch event in progress.');
  /* кэшируем только GET requests */
  if (event.request.method !== 'GET') {
    console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);
    return;
  }
  event.respondWith(
    caches
      .match(event.request)
      .then(function(cached) {
        console.log('WORKER: Promise fullfilled after match(event.request), cached = ', cached);
        // Стратегия кэширования: шрифты и иконку всегда отдаем из кэша.
        console.log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
        return cached;
      })
  );
});