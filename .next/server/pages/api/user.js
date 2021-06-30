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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; },\n/* harmony export */   \"NEXT_URL\": function() { return /* binding */ NEXT_URL; },\n/* harmony export */   \"PER_PAGE\": function() { return /* binding */ PER_PAGE; }\n/* harmony export */ });\nconst API_URL = \"https://nexteventbackend.herokuapp.com\" || 0; //checks to see if its hosted on another website or localhost:1337 (strapi)\n\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\nconst PER_PAGE = 5; //global const for number of events per page//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vY29uZmlnL2luZGV4LmpzP2FjZTciXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJORVhUX1VSTCIsImVudiIsIk5FWFRfUFVCTElDX0ZST05URU5EX1VSTCIsIlBFUl9QQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQ2xCQyx3Q0FBQSxJQUFtQyxDQUQ5QixDLENBRVA7O0FBRU8sTUFBTUMsUUFBUSxHQUNuQkQsT0FBTyxDQUFDRSxHQUFSLENBQVlDLHdCQUFaLElBQXdDLHVCQURuQztBQUdBLE1BQU1DLFFBQVEsR0FBRyxDQUFqQixDLENBQW9CIiwiZmlsZSI6Ii4vY29uZmlnL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG4vL2NoZWNrcyB0byBzZWUgaWYgaXRzIGhvc3RlZCBvbiBhbm90aGVyIHdlYnNpdGUgb3IgbG9jYWxob3N0OjEzMzcgKHN0cmFwaSlcblxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDU7IC8vZ2xvYmFsIGNvbnN0IGZvciBudW1iZXIgb2YgZXZlbnRzIHBlciBwYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === \"GET\") {\n    if (!req.headers.cookie) {\n      res.status(403).json({\n        message: \"Not Authorized\"\n      });\n      return;\n    }\n\n    const {\n      token\n    } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);\n    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/users/me`, {\n      method: \"GET\",\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    });\n    const user = await strapiRes.json();\n\n    if (strapiRes.ok) {\n      res.status(200).json({\n        user\n      });\n    } else {\n      res.status(403).json({\n        message: \"User forbidden\"\n      });\n    }\n  } else {\n    res.setHeader(\"Allow\", [\"GET\"]);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL3VzZXIuanM/MmFiYiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29va2llIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0b2tlbiIsInN0cmFwaVJlcyIsImZldGNoIiwiQVBJX1VSTCIsIkF1dGhvcml6YXRpb24iLCJ1c2VyIiwib2siLCJzZXRIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLFFBQUksQ0FBQ0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQWpCLEVBQXlCO0FBQ3ZCSCxTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTTtBQUFFQztBQUFGLFFBQVlKLG1EQUFBLENBQWFKLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUF6QixDQUFsQjtBQUVBLFVBQU1LLFNBQVMsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsa0RBQVEsV0FBWixFQUF3QjtBQUNuRFQsWUFBTSxFQUFFLEtBRDJDO0FBRW5EQyxhQUFPLEVBQUU7QUFDUFMscUJBQWEsRUFBRyxVQUFTSixLQUFNO0FBRHhCO0FBRjBDLEtBQXhCLENBQTdCO0FBT0EsVUFBTUssSUFBSSxHQUFHLE1BQU1KLFNBQVMsQ0FBQ0gsSUFBVixFQUFuQjs7QUFFQSxRQUFJRyxTQUFTLENBQUNLLEVBQWQsRUFBa0I7QUFDaEJiLFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVPO0FBQUYsT0FBckI7QUFDRCxLQUZELE1BRU87QUFDTFosU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDRDtBQUNGLEdBdEJELE1Bc0JPO0FBQ0xOLE9BQUcsQ0FBQ2MsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FkLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRyxVQUFTUCxHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDRDtBQUNGLENBM0JEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiQC9jb25maWcvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogXCJOb3QgQXV0aG9yaXplZFwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpO1xuXG4gICAgY29uc3Qgc3RyYXBpUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBzdHJhcGlSZXMuanNvbigpO1xuXG4gICAgaWYgKHN0cmFwaVJlcy5vaykge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBmb3JiaWRkZW5cIiB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIkdFVFwiXSk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user.js\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/user.js"));
module.exports = __webpack_exports__;

})();