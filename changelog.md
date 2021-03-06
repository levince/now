NowJS Version 0.3 - 3/18/2011
---------------------------

Changes since version 0.2:

*   **Breaks** Remote functions can no longer use return values. Please pass in and use a callback parameter when you need a return value from your remote call

*   Internet Explorer IE6/7/8 are now supported! There is lower performance when changing the value of a variable inside now, but function calls and remote calls (pushing/pulling) is 100% realtime

Performance Improvements since 0.2:

*   now.js now contains nowUtil.js embedded, reducing number of requests

*   Static files (now.js) are now cached in memory on the server-side, reducing disk reads

*   Reduced per request latency; internal replacing of server/port info with actual server/port is now only done once on server startup
  
Bug fixes since version 0.2:

*   Safari, IE6/7/8, Android, iOS (iPhone/iPad/iPod Touch) Safari now supported. nowUtil.js now contains a minified json2.js shim

*   Rare instances when not all attributes of now on client side would be initialized is now fixed

*   Array.isArray replaced with more flexible array check (thanks andref)

*   Changed uses of `x in y` to `.hasOwnProperty(prop)`

*   Bugs resulting in cross-port setups not working have been fixed


NowJS Version 0.2 - 3/11/2011
---------------------------

Changes since version 0.1:

*   Unified nowLib.js was split into nowClientLib.js and nowServerLib.js

*   In nowServerLib.js, NowWatcher class was replaced with a Harmony Proxy implementation in proxy.js

*   nowClientLib.js continues to use NowWatcher class for namespace traversal.

Known Issues:

*   Server crashes with a "hasOwnProperty of undefined" error when a client abruptly connects.

*   Library does not expose client connect and disconnect events to the developer.

*   Library does not expose any form of unique client ID to the developer.

*   Library does not provide a way to select particular clients or a single client based on filters/criteria.