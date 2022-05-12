let cacheName = "cc-cache";
let filesToCache = ["/", "index.html", "about.html", "contact.html",
                    "explore.html", "profile.html", "components/header.js",
                    "css/style.css", "css/login.css", "css/contact.css",
                    "js/index.js"];

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
