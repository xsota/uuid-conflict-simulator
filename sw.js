importScripts('/uuid-conflict-simulator/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/uuid-conflict-simulator/_nuxt/app.54ada08.js",
    "revision": "ab3fe8f4000a80968aaf30dc2943ac22"
  },
  {
    "url": "/uuid-conflict-simulator/_nuxt/commons/app.34fe1f9.js",
    "revision": "8c70a9c4f1e124d9fcefd47eb16e04e0"
  },
  {
    "url": "/uuid-conflict-simulator/_nuxt/index.9a1375c.js",
    "revision": "73345e10f99f27d411ea263f989ad1ff"
  },
  {
    "url": "/uuid-conflict-simulator/_nuxt/runtime.82a87ea.js",
    "revision": "c3a594cad54935fac85a940c2bdb3b5a"
  },
  {
    "url": "/uuid-conflict-simulator/_nuxt/vendors~app.ab6e5f0.js",
    "revision": "d3b51d5f498b3527e4c0395a98c8d6b9"
  }
], {
  "cacheId": "uuid-confilct-simulator",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/uuid-conflict-simulator/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/uuid-conflict-simulator/.*'), workbox.strategies.networkFirst({}), 'GET')
