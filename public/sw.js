// Minimal offline-fallback service worker for mecasouk.
// Caches the app shell on install and falls back to it for navigation
// requests when the network is unavailable.
const CACHE_NAME = "mecasouk-shell-v1";
// Scope-relative so this works whether the app is served from "/" or a
// subpath (e.g. GitHub Pages project sites at "/<repo>/").
const SCOPE = self.registration.scope;
const APP_SHELL = [SCOPE, `${SCOPE}index.html`, `${SCOPE}manifest.json`];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode !== "navigate") return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(`${SCOPE}index.html`))
  );
});
