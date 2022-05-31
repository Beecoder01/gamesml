const cacheName = 'vs apps'; 
const staticAssets = ['./', './index.html', './index.js','./style.css'];

self.addEventListener('install', async e => { 
    const cache = await caches.open(cacheName); 
    await cache.addAll(staticAssets); 
    return self.skipWaiting(); 
}); 

self.addEventListener('activate', e => { 
    self.clients.claim(); 
}); 

    
self.addEventListener('fetch', async e => { 
        const req = e.request; const url = new URL(req.url); 
        if (url.origin === location.origin) { 
            e.respondWith(cacheFirst(req)); 
        } else { 
            e.respondWith(networkAndCache(req)); 
        } 
}); 

async function cacheFirst(req) { 
        const cache = await caches.open(cacheName); 
        const cached = await cache.match(req); 
        return cached || fetch(req);
} 

async function networkAndCache(req) { 
        const cache = await caches.open(cacheName); 
        try { 
            const fresh = await fetch(req); 
            await cache.put(req, fresh.clone()); 
            return fresh; 
        } catch (e) { 
            const cached = await cache.match(req); 
            return cached; 
        } 
}


//extra
var version = "v2.0.3";
var swPath;
var urlObject = new URL(location);
var host;
if (urlObject.searchParams.get("swPath")) {
    swPath = urlObject.searchParams.get("swPath");
}
else {
    if (urlObject.searchParams.get("version")) {
        version = urlObject.searchParams.get("version");
    }
    if (urlObject.searchParams.get("swJSHost")) {
        host = "https://" + urlObject.searchParams.get("swJSHost");
    }
    else {
        host = "https://sdki.truepush.com/sdk/";
    }
    swPath = host + version + "/sw.js";
}
importScripts(swPath);
