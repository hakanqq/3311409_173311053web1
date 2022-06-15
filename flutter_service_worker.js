'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7eb0be002301ebfeae5e206faf36861d",
".git/config": "99409644c05b4cdf369d13e095770f11",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "30c5b154f554d308dedbb4cf147b7cec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac35c13dbd5ca07468e7c24bf8f82ffc",
".git/logs/refs/heads/master": "ac35c13dbd5ca07468e7c24bf8f82ffc",
".git/logs/refs/remotes/origin/master": "f5e1b571a3a24ca9ddd20505f62f2433",
".git/objects/01/18dd66bf65733f19813d881eed8148d5476fae": "bbcddef43726e25f8ced800c8d95c3d7",
".git/objects/03/2aa66a61f386ae605b08a9ad7700de31e47efe": "39a420bc6457d0c1fb55b71bb69d0531",
".git/objects/09/6d0d42db70f72ec5567241441d7626d7e804d9": "cb676e851224ea56ed8313695f3d332a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/3a996d330ce5d2d30378294038f97a4fbe729a": "480fbb478770967119f0e2ead271e472",
".git/objects/18/ec1f68fbbf94d20b4778096378ae2c80d4751a": "a12ffb2d72afd34eff1bd7fffc3772a4",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2a/350b635b0c78c7d9f165a808a4b486b3f2cbd4": "284aeef39762cb185bb81555ab29e2f7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/533a879f74545f8ec43832938608cd2cd56fbe": "8e2adffe1471d9d63df02f0d971c9990",
".git/objects/41/885e7b2abe895af73e8ea504d778174c013e44": "fdded95b328dae129e67f3484a4aeb78",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9fbaf7a8552f954e3c811a384881e40e60b3bf": "c90420b381f6ac1f73f94c9a5c7c668b",
".git/objects/48/9f76774977d1147e10a6c906753913183cbdc2": "c67b7f9a653facfe6379c7d6266fff0e",
".git/objects/4b/428b7ce0f432638f54234abab44e302c08e804": "c8e44b97b89f14a1260b66caa3974b8e",
".git/objects/4e/6de63d2a218aa2b1cc0d25b59915249e45f172": "cecd7d24708676b094d702c6d3f43ffc",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5c/fef82adafd40208b4b8b1c8751900ee50b9288": "54bf17bae465f32b6b9f470449f8977e",
".git/objects/68/4bd624850047cdad44f2939d33b7caf72c8ab0": "979ec17cd03c09927c69c560813614ff",
".git/objects/6b/a6a7ea5483df0c209563354809b903867b5cfd": "965042071ebe096631e9c50a594e068b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/b02f70c559448b3bd8c0d580570fcc68f02d95": "e5f17e8e747a7d17883bc6d6463e9f69",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/c924242bdd4ab906c073e05a2554ac9f79b694": "4648e147e1354dcd85c8ef8fef56b5ba",
".git/objects/82/83c925a5c44264ef75f1a5f2caaa56076fccc4": "a20bb4d324de29fb6b65efbfb32658a1",
".git/objects/86/d7b30380c20f2ac6da56ecb84f210f660424ca": "390102c3616c853101fabaac41fd1476",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b1482a19c9b8f8edb79ea51526885d1f4a149f": "2d1c0f6b1a21dfe12f9501644e62798c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/83051f86b42fd6ee666aef47e1dc6c1a4d7343": "dc6f22abb77b4b1b7659c514dad9bd61",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/541fe5add15d46fe735a7445f9535692973e4b": "8b8dab61c65bdb4df03f52a247a29cff",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/deca8e1eb091a88ba61043a9c007331a9867ec": "a07e7e0829461d4aadf88e0ed8fe583d",
".git/objects/cd/0e61a4c2974ac62a4a2f37d4a9d012dfeec998": "2cfdd47a8aacd154a75ba0d63d87883a",
".git/objects/d0/eca8da0079242e6a0306439e51500e55f64d30": "300f8d045aedf9bece25e367cb210f3e",
".git/objects/d2/4ef83e9f1593aad2ca1e1d9e9a4c9918a0cd9e": "6d0a016365fa66898533cb789d54f49b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/0d3934f372d15850e4bb4982dcb41d29478d01": "564bb5263dad43521849ff658a0d6838",
".git/objects/e2/d472346929ca79aa1a65e5a213886dc0cccf59": "32e3e8c80d7c4790e11c841e1470e6e2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/ad9a1ec2ebf3f343500045b292576bee156a58": "fd3c33e8005bad5f035be52264777f12",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b436475e82bfcefc9207c81ded25f97383093e": "b05cf20d6916eacc3d380b3bfda88ddc",
".git/objects/f5/d1f5d147a44241e3e41c7f54683b3ac5aab143": "77f22caba9374f56ecfd6a58b4fa24f4",
".git/objects/f7/b8203f05c385174edf5cc0da90f78ccc295cc2": "40f69cd43c7c6e71f9de7a7cf754aebd",
".git/refs/heads/master": "110e3855f240948db21dd20be955acd7",
".git/refs/remotes/origin/master": "e2c1e640c4a95265b1126c267ad1658f",
"assets/AssetManifest.json": "e288cb11a52cc3f96d83011d0a04f7d7",
"assets/Assets/crunch.jpg": "4966bfd892b41fb78db7efe36173ada9",
"assets/Assets/crunch1221.jpg": "082c724a90311cd069a6f50c08ca49fd",
"assets/Assets/dizkaldirma.jpg": "a7e4718af4cab2638fa5311c8d50f058",
"assets/Assets/dizkaldirmaa.jpg": "eb95c0e105635dd7fa0e551a13721b8f",
"assets/Assets/dizsinav.jpg": "05972e12fb9e2f10a2e526d35272bb38",
"assets/Assets/dizustsinav222.jpg": "8e2743ec8259248bad8d2496a2a220b1",
"assets/Assets/kopru.jpg": "9a1e0f3d8a0f8d6f86b05072bf650f7f",
"assets/Assets/kopruu.jpg": "4a7e438097d65294d6f77a9c37f9cfc2",
"assets/Assets/lunge.jpg": "d15bb20330aba77a95e561a798b2b69a",
"assets/Assets/plank.jpg": "eef078b09c53917033fc4b6dc36f6a1a",
"assets/Assets/plankk.jpg": "b1181e6d813d39c11b0429ebaae0ec98",
"assets/Assets/sporapp2.jpg": "725f87153414ef20f1b6d94c3f3fa252",
"assets/Assets/squaat.jpg": "d65e91458bf1cfe6715b01307e967104",
"assets/Assets/squatpage3.jpg": "6ad2de42e6dcbfa0dea00c0f3402d976",
"assets/Assets/terslunge.jpg": "9098d98846c91ad30ebe111b418414cd",
"assets/Assets/welcomepage.jpg": "dd8c3af321497606ecd59d95cbd3d4a9",
"assets/Assets/yanbacakkaldrima.jpg": "bbbdba9fe3e7da2aadddd5a4dc178f68",
"assets/Assets/yanbacakpage.jpg": "9d32dca93291a3e6d9bab00da1e5316d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6b6eb096e53af2f60471751aef0783f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "190af20753098671550a3d701408a671",
"/": "190af20753098671550a3d701408a671",
"main.dart.js": "56fc1cad7bf1ce5dbe1358e8a07ffb04",
"manifest.json": "6222c70b0fc83b3382a95ce310c8528d",
"version.json": "c73c9f810950224b8887db4b61339f62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
