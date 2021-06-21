/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/events";
exports.ids = ["pages/api/events"];
exports.modules = {

/***/ "./pages/api/events/index.js":
/*!***********************************!*\
  !*** ./pages/api/events/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst {\n  events\n} = __webpack_require__(/*! ./data.json */ \"./pages/api/events/data.json\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (req.method === \"GET\") {\n    res.status(200).json(events);\n  } else {\n    res.setHeader(\"Allow\", [\"GET\"]);\n    res.status(405).json({\n      message: `Method ${req.method} is not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL2V2ZW50cy9pbmRleC5qcz9iZmQwIl0sIm5hbWVzIjpbImV2ZW50cyIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwic2V0SGVhZGVyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWFDLG1CQUFPLENBQUMsaURBQUQsQ0FBMUI7O0FBRUEsK0RBQWUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDM0IsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEJELE9BQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTixNQUFyQjtBQUNELEdBRkQsTUFFTztBQUNMRyxPQUFHLENBQUNJLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBSixPQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRSxhQUFPLEVBQUcsVUFBU04sR0FBRyxDQUFDRSxNQUFPO0FBQWhDLEtBQXJCO0FBQ0Q7QUFDRixDQVBEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2V2ZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCB7IGV2ZW50cyB9ID0gcmVxdWlyZShcIi4vZGF0YS5qc29uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihldmVudHMpO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJHRVRcIl0pO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IGlzIG5vdCBhbGxvd2VkYCB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/events/index.js\n");

/***/ }),

/***/ "./pages/api/events/data.json":
/*!************************************!*\
  !*** ./pages/api/events/data.json ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"events":[{"id":"1","name":"Openaire Float In Cinema in Paddington","slug":"openaire-float-in-cinema-in-paddington","venue":"Paddington Basin","address":"5 Merchant Square, Paddington, London W2 1AY","performers":"DJ Manny Duke","date":"July 09, 2021","time":"07:00 PM EST","description":"At Openaire Float-In Cinema, movies are shown on a six-by-three-metre LED screen at Merchant Square in Paddington Basin.","image":"/images/sample/event1.jpg"},{"id":"2","name":"The Big London Bake","slug":"the-big-london-bake","venue":"Tooting","address":"38, Tooting High Street, SW17 0RG","performers":"Big London Bake","date":"July 2, 2021","time":"02:00 PM EST","description":"Challenge your friends at London\'s multi award winning bake off! All the ingredients are good to go, a top baker at your side, an irresistible monthly baking theme, an unforgettable experience and one winner.","image":"/images/sample/event2.jpg"},{"id":"3","name":"Georgian London Walk","slug":"georgian-london-walk","venue":"Angel","address":"nearest tube Angel","performers":"London Guide Walk","date":"July 11, 2021","time":"11:00 AM EST","description":"On this guided walk we take you back to the days when the surrounding area had a raucous reputation and see how it transformed from a place to be avoided at all costs to a most desirable postcode. We explore Georgian North Clerkenwell discovering tales of radicals and clowns, we will see see great Georgian engineering feats from engineering to town planning, in an area where Georgians came to play and be entertained.","image":"/images/sample/event3.jpg"},{"id":"4","name":"Jam Concert Live","slug":"jam-concert-live","venue":"Club Ozone","address":"70 W 115th St New York, New York(NY), 10026","performers":"DJ RNB","date":"July 20, 2021","time":"10:00 PM EST","description":"The most diverse dj on the east coast, DJ RNB team up once again to bring you the next installment in the high energy, Jam Concert Live series!","image":"/images/sample/event4.jpg"},{"id":"5","name":"UnMute Rock Festival","slug":"unmute-rock-festival","venue":"Studio 54","address":"55 La Salle St #12K New York, New York(NY), 10027","performers":"Big Wednesday, Black Pyre, Calling Apollo","date":"July 30, 2021","time":"8:00 PM EST","description":"With bands from around the UK ready to send the roof into orbit, get ready for the loudest Welsh festival: the inaugural UnMute 2021.","image":"/images/sample/event5.jpg"},{"id":"6","name":"Soul Kitchen Party","slug":"soul-kitchen-party","venue":"Onyx Club","address":"60 Gramercy Park N #2 New York, London, 10010","performers":"A-Trak, Nightmares on Wax, Rakim, Jay Electronica","date":"Augest 2, 2021","time":"8:00 PM EST","description":"Dope party which features Hip Hop legends, emerging artists and world-class turntablists","image":"/images/sample/event6.jpg"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/events/index.js"));
module.exports = __webpack_exports__;

})();