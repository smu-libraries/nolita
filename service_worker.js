/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about.html","09712e073e5d33497edcfbf2b15b0a64"],["images/close_left_white.svg","43fdb1d490d0cb364a72d6f61ba38e18"],["images/favicon.svg","633dc3cee3124176e1782051439435b1"],["images/favicon_120.png","34c54ede79ccfa160f5b4d4a61097169"],["images/favicon_128.png","fcf9c4171c0e5801b98215aaf5429f8d"],["images/favicon_144.png","2976123db2fb3502bc0570eb4fbbcc47"],["images/favicon_152.png","9ec252a4791845f2b36598ef9374633e"],["images/favicon_167.png","efa9c742c3b5cf8c66e1bcc49c11673b"],["images/favicon_168.png","09bfdd6f1a5cb5bed4f0980ab11e5518"],["images/favicon_180.png","453abfacda451a4c67c2cda5ab7e6d08"],["images/favicon_192.png","3952ca3405444a9d02810eae67005f22"],["images/favicon_48.png","1a04341a7691a3c5c77e42e9d8ab2107"],["images/favicon_72.png","bc3ebcc807d330afa99fe6f593f82011"],["images/favicon_96.png","aebf980fa1f6e28e8bddfcac233e7603"],["images/feedback_1.svg","3d3c5a07a1e9de5cba1fd38472c22594"],["images/feedback_2.svg","8577bfdd20756673e74b3b053813354e"],["images/feedback_3.svg","e3a0f591ce749863a3965ac6d15c53b7"],["images/feedback_4.svg","4fd89ef87793489a34f75f51474f2901"],["images/feedback_5.svg","d456cce9588ab7b3820ea73934dc5738"],["images/feedback_email.svg","e484d926f7ac786c7b2c795a1d96988e"],["images/hamburger_white.svg","54d2e5a6725fbd89f072297e9e4188ae"],["images/kgc_atrium_n_1.jpg","a87188bfa9fafa23d7a6eae272087c07"],["images/kgc_cover_n_1.jpg","2eaf816776f6a3667674f031395e20b4"],["images/kgc_exterior.jpg","df1e67297ec03bf2d241d2e4c56425dc"],["images/kgc_graduate_lounge_n_1.jpg","3765414478529d8f2009f7881ef8d3f3"],["images/kgc_graduate_lounge_n_2.jpg","f2bb368bd65627335334446674027b9a"],["images/kgc_l3_atrium_2.jpg","7fb4d38b58ef99ef25aa0b3e69fc1be4"],["images/kgc_l3_atrium_3.jpg","2c4aed1cf5f2c3612b0fbae907bfebbd"],["images/kgc_l3_learncommons_2.jpg","090337ff6fe0f4200b65016d02c2dd46"],["images/kgc_l3_learnlabs_3.jpg","aadeb875fd9ad30534b7334460993a8d"],["images/kgc_l4_gradlounge_3.jpg","4e32be27602e62baf9485745076a3f99"],["images/kgc_l4_quietarea_1.jpg","eeb2736bc6ff8dfbb1db6f145071c3f6"],["images/kgc_l4_quietarea_2.jpg","4b491eba41f83fc25e8cf1f0720b6387"],["images/kgc_l5_quietarea_2.jpg","6718bf587da94002a0a1dad49568840a"],["images/kgc_l5_terrace_1.jpg","2e1776fe95b4cb5a973afe4a28ef5931"],["images/kgc_l5_terrace_2.jpg","5feb82b16a95cea7d0a0be6846101036"],["images/kgc_learning_commons_n_1.jpg","2fe659c9de25073fc397c219005058fc"],["images/kgc_learning_commons_n_3.jpg","fd9b404018e089f0722087c9d1769185"],["images/kgc_learning_labs_n_1.jpg","b90a96c8afb3e0b14f433166b559eb07"],["images/kgc_learning_labs_n_2.jpg","7839eff5b886254b108ede56d763794a"],["images/kgc_project_rooms_n_1.jpg","756c9096882be1e8e5d347b7a034f1a7"],["images/kgc_project_rooms_n_2.jpg","377dcf957562781a21ff30a126b15950"],["images/kgc_quiet_area_n_1.jpg","93eaa65e7dace23bf2218c79302712cf"],["images/kgc_terrace_n_1.jpg","7cb37900264fee0b6b8a2060da9aba34"],["images/lks_cover_n_1.jpg","a82b3ddc6ca73fe166c0fe0a5efada72"],["images/lks_graduate_lounge_n_1.jpg","d61664d6df6220b5c9571b403495e664"],["images/lks_graduate_lounge_n_2.jpg","fc23a6a8047139e6eedc5bd2689c4325"],["images/lks_graduate_lounge_n_3.jpg","0344957f9c545a9c574149a8f6ab58a2"],["images/lks_hive_n_1.jpg","fc1009ebee670917a9881352c558befc"],["images/lks_learning_labs_n_2.jpg","7e4d4506c0a18d21f8b777db02c30eae"],["images/lks_overview_n_1.jpg","97660735678f90243dddba09fb4adba4"],["images/lks_quiet_area_n_1.jpg","08afd1158c93400ed0b8c096d63a8604"],["images/lks_study_booths_n_1.jpg","29ef6ef9cb79a6970de9379638c0b42b"],["images/logo_white.svg","dd7a3acff4a1c83f7663a33ca0a1a102"],["images/main_1.jpg","14f0ef70658f6b7a2db663fbda914449"],["images/main_2.jpg","6bfbd79207b517ca4f05b59f4deedcda"],["images/main_hive_1.jpg","2f69a676a9cb0c2b000dfdb9f47c1a6b"],["images/main_investment_studio_1.jpg","035368eecc7c26ffa9df225c36e44d9e"],["images/main_investment_studio_2.jpg","6f2dae9da06053277d0e768390b37757"],["images/main_learning_commons_1.jpg","5c1e452bd31d111e2ece160c4744bc7b"],["images/main_learning_commons_2.jpg","317d49a77745fbbd7f3c8af18d6af97e"],["images/main_learning_commons_3.jpg","5bbb977d3604fb4fab8061ced09b7740"],["images/main_learning_labs_1a.jpg","06be37538c89b5a90805919d229c47f9"],["images/main_learning_labs_1b.jpg","f393480391705b1c4177233f37c46cd6"],["images/main_lounge_6.jpg","a2b546f1b00396fd3a9e2a862f7bc305"],["images/main_lounge_7.jpg","5a64815c36ae94ac6f0a3cddeff2cf4b"],["images/main_lounge_dvds.jpg","f8d814007276ba51416168577bf1858a"],["images/main_lounge_newspaper.jpg","b7cb9a41bc8cc00eb31b64b87977a794"],["images/main_project_rooms_1.jpg","e8b05bef904ee6f99245d6994915709c"],["images/main_project_rooms_2.jpg","fda29503aed7c67c7ab328d384e5ca44"],["images/main_project_rooms_3.jpg","7cc8e471eb6ebdbd2f180c90c56bbc0a"],["images/main_quiet_area_1.jpg","69acb198c32201f51a8fcdfe85d11e91"],["images/main_quiet_area_5.jpg","420848b990c33994a0a2494db2198aa2"],["images/main_rooftop_garden_3.jpg","24ff2448d383817fd54e22fffdbc56cc"],["images/main_rooftop_garden_5.jpg","b7fb422fa071eec0ab12f3b1a8ca225e"],["images/main_rooftop_garden_7.jpg","5f6d84b5e3dc345e539c1d8252360c45"],["images/main_rooftop_garden_8.jpg","ab29168884f19c5d4e8204bb58819b10"],["images/main_study_booths_1.jpg","066602e252794b32968c8f793a09f7dd"],["images/main_study_booths_3.jpg","0412a897583e6e5f6e0505f0ce5cc280"],["images/smoo_smoo_blue_tiny.svg","6c58a858f0537625ebcf6513cdcd8be6"],["images/smoo_smoo_white.svg","66ef5f4faea50f93f7e6569ef67fb100"],["images/smoo_smoo_white_tiny.svg","f9bd335d263ed26bbb6d3ea11ff7ab60"],["images/social_media_facebook.svg","de2d5d9ace6b0c889e8479177f95fa77"],["images/social_media_instagram.svg","c29cba9229de62f591d372ee1d1f95f2"],["images/social_media_twitter.svg","22f991fbbe7b4d57cba717f9dfc10e27"],["index.html","8c268fbffc5d36ab07557d71dc6c0967"],["kgc_atrium.html","b5e3f727304786854dfea3ca648fa210"],["kgc_graduate_lounge.html","a183610034237eccae0917f9e2998af2"],["kgc_learning_commons.html","43f5a26206a1ded185fe81fa81ca0ee8"],["kgc_learning_labs.html","afa1685094111835177ea3fdc74d60da"],["kgc_overview.html","e884fbc61ea3c6591714f84c00b7ba10"],["kgc_project_rooms.html","2d9fa8893d264d034dd40bdfb1d288eb"],["kgc_quiet_area.html","1ea02a990ed70838b47432af3b596b9d"],["kgc_terrace.html","34482c2938bf6fb1db65a2f6b2e69e33"],["main_graduate_lounge_suite.html","dd513823ebbe5b9f35edc71df0f651f2"],["main_hive.html","f225c79e8bead040ed8233f282644864"],["main_investment_studio.html","6b149282c270f56b0aaaf85ee73716d9"],["main_learning_commons.html","ec164c7c78e4a66543dd073a87493353"],["main_learning_labs.html","3f02522942769633e95619192f388449"],["main_lounge.html","8a9a69eacad01b2950f63d6524b84fb3"],["main_overview.html","6ed236bed975ceeea2ba2ba62e490001"],["main_project_rooms.html","a86b20f3419cfc05e5da862a0b604bb6"],["main_quiet_area.html","0aa57d6fd6091d3a5dc0e6254c543c7e"],["main_rooftop_garden.html","e7f8ab1f1a41fc4ed402e598c9cfb5d9"],["main_study_booths.html","4d5c96684587050543f9395852286445"],["manifest.json","c791924472352e8aa0ea2c6b2f51d9de"]];
var cacheName = 'sw-precache-v3-spaces-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







