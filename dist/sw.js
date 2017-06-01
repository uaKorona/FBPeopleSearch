/**
 * Created by roman.kovalskyi on 5/22/2017.
 */

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/*.jpg',
        '/debug.js'
      ]);
    })
  );
});


this.addEventListener('fetch', function(event) {
  console.log('url', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.info(response);
        return response;
      }

      return fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});