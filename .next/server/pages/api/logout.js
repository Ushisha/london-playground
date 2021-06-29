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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; },\n/* harmony export */   \"NEXT_URL\": function() { return /* binding */ NEXT_URL; },\n/* harmony export */   \"PER_PAGE\": function() { return /* binding */ PER_PAGE; }\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\"; //checks to see if its hosted on another website or localhost:1337 (strapi)\n\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\nconst PER_PAGE = 5; //global const for number of events per page//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vY29uZmlnL2luZGV4LmpzP2FjZTciXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTkVYVF9VUkwiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUNsQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUQ5QixDLENBRVA7O0FBRU8sTUFBTUMsUUFBUSxHQUNuQkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLHdCQUFaLElBQXdDLHVCQURuQztBQUdBLE1BQU1DLFFBQVEsR0FBRyxDQUFqQixDLENBQW9CIiwiZmlsZSI6Ii4vY29uZmlnL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG4vL2NoZWNrcyB0byBzZWUgaWYgaXRzIGhvc3RlZCBvbiBhbm90aGVyIHdlYnNpdGUgb3IgbG9jYWxob3N0OjEzMzcgKHN0cmFwaSlcblxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDU7IC8vZ2xvYmFsIGNvbnN0IGZvciBudW1iZXIgb2YgZXZlbnRzIHBlciBwYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === \"POST\") {\n    // Destroy cookie\n    res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", \"\", {\n      httpOnly: true,\n      secure: false,\n      expires: new Date(0),\n      sameSite: \"strict\",\n      path: \"/\"\n    }));\n    res.status(200).json({\n      message: \"Success\"\n    });\n  } else {\n    res.setHeader(\"Allow\", [\"POST\"]);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL2xvZ291dC5qcz8xYjIwIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNldEhlYWRlciIsImNvb2tpZSIsImh0dHBPbmx5Iiwic2VjdXJlIiwiZXhwaXJlcyIsIkRhdGUiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekI7QUFDQUQsT0FBRyxDQUFDRSxTQUFKLENBQ0UsWUFERixFQUVFQyx1REFBQSxDQUFpQixPQUFqQixFQUEwQixFQUExQixFQUE4QjtBQUM1QkMsY0FBUSxFQUFFLElBRGtCO0FBRTVCQyxZQUFNLE9BRnNCO0FBRzVCQyxhQUFPLEVBQUUsSUFBSUMsSUFBSixDQUFTLENBQVQsQ0FIbUI7QUFJNUJDLGNBQVEsRUFBRSxRQUprQjtBQUs1QkMsVUFBSSxFQUFFO0FBTHNCLEtBQTlCLENBRkY7QUFXQVQsT0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDRCxHQWRELE1BY087QUFDTFosT0FBRyxDQUFDRSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDQUYsT0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFHLFVBQVNiLEdBQUcsQ0FBQ0UsTUFBTztBQUFoQyxLQUFyQjtBQUNEO0FBQ0YsQ0FuQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9nb3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIkAvY29uZmlnL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAvLyBEZXN0cm95IGNvb2tpZVxuICAgIHJlcy5zZXRIZWFkZXIoXG4gICAgICBcIlNldC1Db29raWVcIixcbiAgICAgIGNvb2tpZS5zZXJpYWxpemUoXCJ0b2tlblwiLCBcIlwiLCB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsXG4gICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKDApLFxuICAgICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiU3VjY2Vzc1wiIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJQT1NUXCJdKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/logout.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();