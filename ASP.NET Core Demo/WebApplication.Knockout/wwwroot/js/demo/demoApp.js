﻿require.config({
   baseUrl: '/lib',
   paths: {
      "jquery": "jquery.min",
      "jquery-ui": "jquery.ui.widget",
      "knockout": "knockout-latest",
      "ko-mapping": "knockout.mapping-latest",
      "dotnetify": "dotnetify",
      "router": "dotnetify.router",
      "binder": "dotnetify.binder",
      "binder-polymer": "dotnetify.binder.polymer",
      "signalr": "signalr-clientES5-1.0.0-alpha1-final", 
      "bootstrap": "demo/bootstrap.min"
   },
   shim: {
      "jquery": { exports: "$" },
      "jquery-ui": ["jquery"],
      "knockout": { exports: "ko" },
      "bootstrap": ["jquery"],
      "binder-polymer": ["binder"]
   }
});

// Specify specific transports for SignalR.
var dotnetify = {};
dotnetify.hubOptions = { "transport": ["webSockets", "longPolling"] };


require(['jquery', 'knockout', 'dotnetify', 'router', 'bootstrap'], function ($, ko) {
   $(function () {
      dotnetify.debug = true;
   });
});