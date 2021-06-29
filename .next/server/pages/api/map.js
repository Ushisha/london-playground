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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.geoapify.com/v1/geocode/search?text=${req.body.address}&apiKey=${process.env.GEOAPIFY_API_KEY}`).then(result => res.send(result.data.features[0].geometry.coordinates)).catch(error => console.log(error));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL21hcC5qcz8wYjcyIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImF4aW9zIiwiYm9keSIsImFkZHJlc3MiLCJwcm9jZXNzIiwiZW52IiwiR0VPQVBJRllfQVBJX0tFWSIsInRoZW4iLCJyZXN1bHQiLCJzZW5kIiwiZGF0YSIsImZlYXR1cmVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQ0Msa0RBQUEsQ0FFSyxtREFBa0RGLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxPQUFRLFdBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBaUIsRUFGL0csRUFJR0MsSUFKSCxDQUlTQyxNQUFELElBQVlSLEdBQUcsQ0FBQ1MsSUFBSixDQUFTRCxNQUFNLENBQUNFLElBQVAsQ0FBWUMsUUFBWixDQUFxQixDQUFyQixFQUF3QkMsUUFBeEIsQ0FBaUNDLFdBQTFDLENBSnBCLEVBS0dDLEtBTEgsQ0FLVUMsS0FBRCxJQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUxwQjtBQU1ELENBUEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgYXhpb3NcbiAgICAuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLmdlb2FwaWZ5LmNvbS92MS9nZW9jb2RlL3NlYXJjaD90ZXh0PSR7cmVxLmJvZHkuYWRkcmVzc30mYXBpS2V5PSR7cHJvY2Vzcy5lbnYuR0VPQVBJRllfQVBJX0tFWX1gXG4gICAgKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHJlcy5zZW5kKHJlc3VsdC5kYXRhLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/map.js\n");

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