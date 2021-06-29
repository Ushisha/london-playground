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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; },\n/* harmony export */   \"NEXT_URL\": function() { return /* binding */ NEXT_URL; },\n/* harmony export */   \"PER_PAGE\": function() { return /* binding */ PER_PAGE; }\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\"; //checks to see if its hosted on another website or localhost:1337 (strapi)\n\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\nconst PER_PAGE = 5; //global const for number of events per page//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vY29uZmlnL2luZGV4LmpzP2FjZTciXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTkVYVF9VUkwiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUNsQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUQ5QixDLENBRVA7O0FBRU8sTUFBTUMsUUFBUSxHQUNuQkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLHdCQUFaLElBQXdDLHVCQURuQztBQUdBLE1BQU1DLFFBQVEsR0FBRyxDQUFqQixDLENBQW9CIiwiZmlsZSI6Ii4vY29uZmlnL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG4vL2NoZWNrcyB0byBzZWUgaWYgaXRzIGhvc3RlZCBvbiBhbm90aGVyIHdlYnNpdGUgb3IgbG9jYWxob3N0OjEzMzcgKHN0cmFwaSlcblxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDU7IC8vZ2xvYmFsIGNvbnN0IGZvciBudW1iZXIgb2YgZXZlbnRzIHBlciBwYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === \"POST\") {\n    const {\n      identifier,\n      password\n    } = req.body;\n    const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/auth/local`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        identifier,\n        password\n      })\n    });\n    const data = await strapiRes.json();\n\n    if (strapiRes.ok) {\n      // Set Cookie\n      res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", data.jwt, {\n        httpOnly: true,\n        secure: false,\n        maxAge: 60 * 60 * 24 * 7,\n        // 1 week\n        sameSite: \"strict\",\n        path: \"/\"\n      }));\n      res.status(200).json({\n        user: data.user\n      });\n    } else {\n      res.status(data.statusCode).json({\n        message: data.message[0].messages[0].message\n      });\n    }\n  } else {\n    res.setHeader(\"Allow\", [\"POST\"]);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL2xvZ2luLmpzPzAzODQiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwiYm9keSIsInN0cmFwaVJlcyIsImZldGNoIiwiQVBJX1VSTCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsInNldEhlYWRlciIsImNvb2tpZSIsImp3dCIsImh0dHBPbmx5Iiwic2VjdXJlIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwidXNlciIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU07QUFBRUMsZ0JBQUY7QUFBY0M7QUFBZCxRQUEyQkosR0FBRyxDQUFDSyxJQUFyQztBQUVBLFVBQU1DLFNBQVMsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsa0RBQVEsYUFBWixFQUEwQjtBQUNyRE4sWUFBTSxFQUFFLE1BRDZDO0FBRXJETyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUY0QztBQUtyREosVUFBSSxFQUFFSyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlIsa0JBRG1CO0FBRW5CQztBQUZtQixPQUFmO0FBTCtDLEtBQTFCLENBQTdCO0FBV0EsVUFBTVEsSUFBSSxHQUFHLE1BQU1OLFNBQVMsQ0FBQ08sSUFBVixFQUFuQjs7QUFFQSxRQUFJUCxTQUFTLENBQUNRLEVBQWQsRUFBa0I7QUFDaEI7QUFDQWIsU0FBRyxDQUFDYyxTQUFKLENBQ0UsWUFERixFQUVFQyx1REFBQSxDQUFpQixPQUFqQixFQUEwQkosSUFBSSxDQUFDSyxHQUEvQixFQUFvQztBQUNsQ0MsZ0JBQVEsRUFBRSxJQUR3QjtBQUVsQ0MsY0FBTSxPQUY0QjtBQUdsQ0MsY0FBTSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxDQUhXO0FBR1I7QUFDMUJDLGdCQUFRLEVBQUUsUUFKd0I7QUFLbENDLFlBQUksRUFBRTtBQUw0QixPQUFwQyxDQUZGO0FBV0FyQixTQUFHLENBQUNzQixNQUFKLENBQVcsR0FBWCxFQUFnQlYsSUFBaEIsQ0FBcUI7QUFBRVcsWUFBSSxFQUFFWixJQUFJLENBQUNZO0FBQWIsT0FBckI7QUFDRCxLQWRELE1BY087QUFDTHZCLFNBQUcsQ0FDQXNCLE1BREgsQ0FDVVgsSUFBSSxDQUFDYSxVQURmLEVBRUdaLElBRkgsQ0FFUTtBQUFFYSxlQUFPLEVBQUVkLElBQUksQ0FBQ2MsT0FBTCxDQUFhLENBQWIsRUFBZ0JDLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCRDtBQUF2QyxPQUZSO0FBR0Q7QUFDRixHQW5DRCxNQW1DTztBQUNMekIsT0FBRyxDQUFDYyxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDQWQsT0FBRyxDQUFDc0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JWLElBQWhCLENBQXFCO0FBQUVhLGFBQU8sRUFBRyxVQUFTMUIsR0FBRyxDQUFDRSxNQUFPO0FBQWhDLEtBQXJCO0FBQ0Q7QUFDRixDQXhDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCJAL2NvbmZpZy9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBzdHJhcGlSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hdXRoL2xvY2FsYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHN0cmFwaVJlcy5qc29uKCk7XG5cbiAgICBpZiAoc3RyYXBpUmVzLm9rKSB7XG4gICAgICAvLyBTZXQgQ29va2llXG4gICAgICByZXMuc2V0SGVhZGVyKFxuICAgICAgICBcIlNldC1Db29raWVcIixcbiAgICAgICAgY29va2llLnNlcmlhbGl6ZShcInRva2VuXCIsIGRhdGEuand0LCB7XG4gICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNywgLy8gMSB3ZWVrXG4gICAgICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXG4gICAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHVzZXI6IGRhdGEudXNlciB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoZGF0YS5zdGF0dXNDb2RlKVxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZVswXS5tZXNzYWdlc1swXS5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiUE9TVFwiXSk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();