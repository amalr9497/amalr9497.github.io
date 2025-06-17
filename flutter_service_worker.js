'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c679821b6bb50d5806a7613901d97707",
"index.html": "54033a88bbb043eb9eef862bb1c3d663",
"/": "54033a88bbb043eb9eef862bb1c3d663",
"main.dart.js": "27356d84e1129b6340b5130dec0de354",
"version.json": "0f1cff39a33680acf89f1e2b5af7ebec",
"assets/assets/icons/about_us_icon.svg": "efba2266177598555e3458edf51df669",
"assets/assets/icons/add_icon.svg": "317af32adc3065545380442e09945d3d",
"assets/assets/icons/airport_icon.svg": "d4ec43746760c761d8d5e1d37191b894",
"assets/assets/icons/back_icon.svg": "1083bef0fed9f728235679d72351d61d",
"assets/assets/icons/city_icon.svg": "8d0ace2ec3c612e5e2a798e47ccfb5d3",
"assets/assets/icons/clear_icon.svg": "37952b9139b7f0f0d569a0e283547820",
"assets/assets/icons/contact_us_icon.svg": "e2d0b4aac3bb3bd7f981627e9e4f8a2c",
"assets/assets/icons/country_icon.svg": "106fe79885cab44e05be7aaacc65aeeb",
"assets/assets/icons/currency_icon.svg": "d112453da51b0220269e7cd35d048d57",
"assets/assets/icons/pick_up_icon.svg": "a95eee20e21a8c87373535031c8aa39a",
"assets/assets/icons/privacy_policy_icon.svg": "3a431a4e3caad60a471dbca941a7ceca",
"assets/assets/icons/rate_us_icon.svg": "9fe04aefd74d456a6d1bbd389a95693e",
"assets/assets/icons/round_trip_icon.svg": "d5952a0dd851a49ccd4a65d22739dc90",
"assets/assets/icons/settings_icon.svg": "86a4c9e1049cc22a92321218bb8c679e",
"assets/assets/icons/substract_icon.svg": "c03de465f97f2a5496524610368a9be3",
"assets/assets/icons/stay_icon.svg": "f993d8c107094fa1b287cfd8628beb5b",
"assets/assets/icons/child_icon.svg": "a5cbdb8d28e1b4a88deb8f86a90ae60b",
"assets/assets/icons/region_icon.svg": "e5b6172c7b0f65c48b69928e19d02d2e",
"assets/assets/icons/calender_icon.svg": "cf91e00ae17a856524b87db1f9107fec",
"assets/assets/icons/guest_icon.svg": "615f8607e65efd6f9bca12df1b916718",
"assets/assets/icons/arrow_forward.svg": "5977c8552d4a8096a7c1233f3555cac9",
"assets/assets/icons/top_destinations_icon.svg": "e8787d9a0224e7d16a8d688fcaf6218f",
"assets/assets/icons/offer_icon.svg": "998c44aec0f37592ec6a7ef66a192883",
"assets/assets/images/home_screen_appbar_image.png": "423330e876993354f5c28f9ccc7b64e2",
"assets/assets/images/bangkok.jpg": "5af99aaabb620cd7d11d3917b6380bc7",
"assets/assets/images/barcelona.jpg": "fe04a7746481ad81c0219857a60bf8bb",
"assets/assets/images/dubai.jpg": "584cd4f2f2cfb41e46d425cbe9437758",
"assets/assets/images/istanbul.jpg": "20fa6dd2354d8827ad2bf0838f2b5552",
"assets/assets/images/london.jpg": "d00754f5ff0e2dde0ae4646eae2f5eda",
"assets/assets/images/los_angeles.jpg": "68f1e63ab2519921b4d3530bbec1c755",
"assets/assets/images/mumbai.jpg": "0da3ad4483ae66afeb46374f0cccfcdb",
"assets/assets/images/munich.jpg": "b3af298751ad0e9a4c4d2ab23fbb2c92",
"assets/assets/images/rome.jpg": "29c08d617f99f6d582df09a578c1e593",
"assets/assets/images/paris.jpg": "e5ec42b66f389b6ad53d1e67ea660e3e",
"assets/assets/images/offer_banner_3.jpg": "d44849b099ce234c81af093334ed6e3f",
"assets/assets/images/offer_banner_2.jpg": "eec7d9b6c06f034a33fa702e02cbd8ac",
"assets/assets/images/offer_banner_1.jpg": "14facd18763de41d10a4c97e0c9a8914",
"assets/assets/fonts/lato.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/fonts/MaterialIcons-Regular.otf": "5bde0246e2e47c078d6ce1b277ca5605",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "aabe5beb7c659fc00f0e3cbfd90aba06",
"assets/AssetManifest.bin": "cd71edf7a7dba96d0773e666f29a9086",
"assets/FontManifest.json": "9c0b3e7d3128107e149cc672020244af",
"assets/AssetManifest.bin.json": "627ce5e86df04bd310addb668c3ac89c",
"assets/NOTICES": "9c1cb25df4ba04803d4a57f2ab99f66e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "63896d0af97420096da67a7cc9236f05"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
