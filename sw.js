if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const o=e=>i(e,r),c={module:{uri:r},exports:d,require:o};s[r]=Promise.all(a.map((e=>c[e]||o(e)))).then((e=>(n(...e),d)))}}define(["./workbox-118fddf1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-120x120.png",revision:"35ab31c582ed8748063c19d57de61549"},{url:"assets/_...all_.022082f4.js",revision:null},{url:"assets/2023-03-02-C-programming.0ca1c57e.js",revision:null},{url:"assets/app.10854c11.js",revision:null},{url:"assets/index.264ec71b.css",revision:null},{url:"assets/index.71d65eae.js",revision:null},{url:"assets/index.98e1c734.css",revision:null},{url:"assets/post.889a7d1a.js",revision:null},{url:"assets/projects.2dc9dac3.js",revision:null},{url:"assets/projects.43bb286f.css",revision:null},{url:"assets/virtual_pwa-register.a80209a8.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"bg.webp",revision:"1c48f28840415e66d2cd66f5e1dda2af"},{url:"image/vitesse.webp",revision:"0b9cc33ddf160d7a921066e0dc2cb800"},{url:"index.html",revision:"a877ae0f41944765500314c6296bd638"},{url:"logo-dark.svg",revision:"eddef6d775af86c067c04643832dcd56"},{url:"logo-light.svg",revision:"da45f937d5f49fc3ddb71177600a3d0d"},{url:"logo.png",revision:"e6d9600e550502e83ffee8d58cff5b48"},{url:"posts.html",revision:"d058359ce8870d22aff5a8e36af3b3f0"},{url:"posts/2023-03-02-c-programming.html",revision:"9fe940ff213fd3eec7860512a4e069db"},{url:"projects.html",revision:"1b24b0924a9f5e2a4cc0a0477f4e81d3"},{url:"pwa-192x192.png",revision:"904d4d6f7abfadba6f4e860bebf8dfab"},{url:"pwa-512x512.png",revision:"71ba50e4dcafb4295b16f25010316200"},{url:"safari-pinned-tab.svg",revision:"594facdcda7fa0a3bf65f4ca2184e2e1"},{url:"apple-touch-120x120.png",revision:"35ab31c582ed8748063c19d57de61549"},{url:"avatar.jpg",revision:"7f0f1a91e1abaa757f1dc98f003a7116"},{url:"bg.webp",revision:"1c48f28840415e66d2cd66f5e1dda2af"},{url:"logo-dark.svg",revision:"eddef6d775af86c067c04643832dcd56"},{url:"logo-light.svg",revision:"da45f937d5f49fc3ddb71177600a3d0d"},{url:"logo.png",revision:"e6d9600e550502e83ffee8d58cff5b48"},{url:"pwa-192x192.png",revision:"904d4d6f7abfadba6f4e860bebf8dfab"},{url:"pwa-512x512.png",revision:"71ba50e4dcafb4295b16f25010316200"},{url:"safari-pinned-tab.svg",revision:"594facdcda7fa0a3bf65f4ca2184e2e1"},{url:"image/vitesse.webp",revision:"0b9cc33ddf160d7a921066e0dc2cb800"},{url:"manifest.webmanifest",revision:"06b4c54d478be1842da3407285499cdd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/new/]})),e.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new e.CacheFirst({cacheName:"google-font-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new e.CacheFirst({cacheName:"google-static-font-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*/i,new e.CacheFirst({cacheName:"jsdelivr-cdn-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/(((raw|user-images|camo).githubusercontent.com))\/.*/i,new e.CacheFirst({cacheName:"githubusercontent-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));