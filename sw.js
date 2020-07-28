importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.f8a70a1.js",
    "revision": "e03f4b7e0140b62602016f1f558f50ea"
  },
  {
    "url": "/_nuxt/commons/app.34fe1f9.js",
    "revision": "8c70a9c4f1e124d9fcefd47eb16e04e0"
  },
  {
    "url": "/_nuxt/index.9a1375c.js",
    "revision": "73345e10f99f27d411ea263f989ad1ff"
  },
  {
    "url": "/_nuxt/runtime.fab0ffc.js",
    "revision": "4f144d253f1b015d493409c57ae7f358"
  },
  {
    "url": "/_nuxt/vendors~app.ab6e5f0.js",
    "revision": "d3b51d5f498b3527e4c0395a98c8d6b9"
  }
], {
  "cacheId": "uuid-confilct-simulator",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
