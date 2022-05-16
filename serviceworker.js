let cacheName = "cc-cache";
let filesToCache = ["/", "index.html", "login.html", "booking.html",
                    "contact.html", "time.html", "location.html",
                    "service.html", "language.html", "components/header.js",
                    "css/style.css", "js/index.js"];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
