if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/E4Wdjbk_gQPEh1PqaJohG/_buildManifest.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/E4Wdjbk_gQPEh1PqaJohG/_ssgManifest.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/chunks/framework-64eb7138163e04c228e4.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/chunks/main-f9c2cd70524390774a27.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/chunks/pages/_app-2767ddbc84b83c8aece3.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/chunks/pages/_error-9faf4177fb4e528b4124.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/chunks/pages/index-6e4d7a7a9ccbf89ea619.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/chunks/webpack-672781b4256b347cef75.js",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/_next/static/css/c2cd011b61ce7ef68700.css",revision:"E4Wdjbk_gQPEh1PqaJohG"},{url:"/apple-icon.png",revision:"88d0c19ec1f50e6aabd114a7517f6e5a"},{url:"/favicon-16x16.png",revision:"2e38c1abde9556f255c8092bad30f5ed"},{url:"/favicon-32x32.png",revision:"82efd68fbe330cb5a748cb2f0c0f1fe2"},{url:"/icons/icon-192x192.png",revision:"2f474e45f60172a1ce802172ee9ec9e0"},{url:"/icons/icon-256x256.png",revision:"fc5d7ffb88ba54adccdf96a5a0274720"},{url:"/icons/icon-384x384.png",revision:"7160f6ea7f180fdeda85251a3b06c552"},{url:"/icons/icon-512x512.png",revision:"56978aa75e221446d9518f0b7c32e839"},{url:"/manifest.json",revision:"c529633c01fbae3df4a2d38535f1b5e2"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
