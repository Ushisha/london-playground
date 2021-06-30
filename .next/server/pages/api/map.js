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
exports.id = "pages/api/map";
exports.ids = ["pages/api/map"];
exports.modules = {

/***/ "./pages/api/map.js":
/*!**************************!*\
  !*** ./pages/api/map.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.geoapify.com/v1/geocode/search?text=${req.body.address}&apiKey=${\"205b3f8e0c464796a7d04412c349a80b\"}`).then(result => res.send(result.data.features[0].geometry.coordinates)).catch(error => console.log(error));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL21hcC5qcz8wYjcyIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImF4aW9zIiwiYm9keSIsImFkZHJlc3MiLCJwcm9jZXNzIiwidGhlbiIsInJlc3VsdCIsInNlbmQiLCJkYXRhIiwiZmVhdHVyZXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDQyxrREFBQSxDQUVLLG1EQUFrREYsR0FBRyxDQUFDRyxJQUFKLENBQVNDLE9BQVEsV0FBVUMsa0NBQXlDLEVBRjNILEVBSUdDLElBSkgsQ0FJU0MsTUFBRCxJQUFZTixHQUFHLENBQUNPLElBQUosQ0FBU0QsTUFBTSxDQUFDRSxJQUFQLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsRUFBd0JDLFFBQXhCLENBQWlDQyxXQUExQyxDQUpwQixFQUtHQyxLQUxILENBS1VDLEtBQUQsSUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FMcEI7QUFNRCxDQVBEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL21hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGF4aW9zXG4gICAgLmdldChcbiAgICAgIGBodHRwczovL2FwaS5nZW9hcGlmeS5jb20vdjEvZ2VvY29kZS9zZWFyY2g/dGV4dD0ke3JlcS5ib2R5LmFkZHJlc3N9JmFwaUtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dFT0FQSUZZX0FQSV9LRVl9YFxuICAgIClcbiAgICAudGhlbigocmVzdWx0KSA9PiByZXMuc2VuZChyZXN1bHQuZGF0YS5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcykpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/map.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/map.js"));
module.exports = __webpack_exports__;

})();