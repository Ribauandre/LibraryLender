"use strict";var precacheConfig=[["/LibraryLender/index.html","a20488159a012225d714f63e389271f8"],["/LibraryLender/static/css/main.0f8bcf59.css","915d22c376efd100b9bb02cb8d33e78f"],["/LibraryLender/static/js/main.2118bc97.js","5314e9af2c0b8d7912c25a297d38c548"],["/LibraryLender/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/LibraryLender/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/LibraryLender/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/LibraryLender/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/LibraryLender/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,r){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=r),n.toString()},cleanResponse=function(r){return r.redirected?("body"in r?Promise.resolve(r.body):r.blob()).then(function(e){return new Response(e,{headers:r.headers,status:r.status,statusText:r.statusText})}):Promise.resolve(r)},createCacheKey=function(e,r,n,t){var a=new URL(e);return t&&a.pathname.match(t)||(a.search+=(a.search?"&":"")+encodeURIComponent(r)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,r){if(0===e.length)return!0;var n=new URL(r).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(r){return n.every(function(e){return!e.test(r[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var r=e[0],n=e[1],t=new URL(r,self.location),a=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!n.has(r)){var e=new Request(r,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+r+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(r,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(r){return r.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return r.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(r){if("GET"===r.request.method){var e,n=stripIgnoredUrlParameters(r.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),e=urlsToCacheKeys.has(n));var a="/LibraryLender/index.html";!e&&"navigate"===r.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],r.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&r.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',r.request.url,e),fetch(r.request)}))}});