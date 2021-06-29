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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; },\n/* harmony export */   \"NEXT_URL\": function() { return /* binding */ NEXT_URL; },\n/* harmony export */   \"PER_PAGE\": function() { return /* binding */ PER_PAGE; }\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\"; //checks to see if its hosted on another website or localhost:1337 (strapi)\n\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\nconst PER_PAGE = 5; //global const for number of events per page//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vY29uZmlnL2luZGV4LmpzP2FjZTciXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTkVYVF9VUkwiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsT0FBTyxHQUNsQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUQ5QixDLENBRVA7O0FBRU8sTUFBTUMsUUFBUSxHQUNuQkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLHdCQUFaLElBQXdDLHVCQURuQztBQUdBLE1BQU1DLFFBQVEsR0FBRyxDQUFqQixDLENBQW9CIiwiZmlsZSI6Ii4vY29uZmlnL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG4vL2NoZWNrcyB0byBzZWUgaWYgaXRzIGhvc3RlZCBvbiBhbm90aGVyIHdlYnNpdGUgb3IgbG9jYWxob3N0OjEzMzcgKHN0cmFwaSlcblxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDU7IC8vZ2xvYmFsIGNvbnN0IGZvciBudW1iZXIgb2YgZXZlbnRzIHBlciBwYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\nvar _jsxFileName = \"/Users/ak7l/Desktop/next-event/next-event-frontend/next-event-app-frontend/context/AuthContext.js\";\n\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => checkUserLoggedIn(), []); // Register user\n\n  const register = async user => {\n    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/register`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(user)\n    });\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n      router.push(\"/account/dashboard\");\n    } else {\n      setError(data.message);\n      setError(null);\n    }\n  }; // Login user\n\n\n  const login = async ({\n    email: identifier,\n    password\n  }) => {\n    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/login`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        identifier,\n        password\n      })\n    });\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n      router.push(\"/account/dashboard\");\n    } else {\n      setError(data.message);\n      setError(null);\n    }\n  }; // Logout user\n\n\n  const logout = async () => {\n    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/logout`, {\n      method: \"POST\"\n    });\n\n    if (res.ok) {\n      setUser(null);\n      router.push(\"/\");\n    }\n  }; // Check if user is logged in\n\n\n  const checkUserLoggedIn = async user => {\n    const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/user`);\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n    } else {\n      setUser(null);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user,\n      error,\n      register,\n      login,\n      logout\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcz80ZjRkIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJjaGVja1VzZXJMb2dnZWRJbiIsInJlZ2lzdGVyIiwicmVzIiwiZmV0Y2giLCJORVhUX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJwdXNoIiwibWVzc2FnZSIsImxvZ2luIiwiZW1haWwiLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJsb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVPLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBRUEsUUFBTUcsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLE1BQU1DLGlCQUFpQixFQUF4QixFQUE0QixFQUE1QixDQUFULENBTjRDLENBUTVDOztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFPVCxJQUFQLElBQWdCO0FBQy9CLFVBQU1VLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsbURBQVMsZUFBYixFQUE2QjtBQUNsREMsWUFBTSxFQUFFLE1BRDBDO0FBRWxEQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZ5QztBQUtsREMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWpCLElBQWY7QUFMNEMsS0FBN0IsQ0FBdkI7QUFRQSxVQUFNa0IsSUFBSSxHQUFHLE1BQU1SLEdBQUcsQ0FBQ1MsSUFBSixFQUFuQjs7QUFFQSxRQUFJVCxHQUFHLENBQUNVLEVBQVIsRUFBWTtBQUNWbkIsYUFBTyxDQUFDaUIsSUFBSSxDQUFDbEIsSUFBTixDQUFQO0FBQ0FLLFlBQU0sQ0FBQ2dCLElBQVAsQ0FBWSxvQkFBWjtBQUNELEtBSEQsTUFHTztBQUNMakIsY0FBUSxDQUFDYyxJQUFJLENBQUNJLE9BQU4sQ0FBUjtBQUNBbEIsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FsQkQsQ0FUNEMsQ0E2QjVDOzs7QUFDQSxRQUFNbUIsS0FBSyxHQUFHLE9BQU87QUFBRUMsU0FBSyxFQUFFQyxVQUFUO0FBQXFCQztBQUFyQixHQUFQLEtBQTJDO0FBQ3ZELFVBQU1oQixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLG1EQUFTLFlBQWIsRUFBMEI7QUFDL0NDLFlBQU0sRUFBRSxNQUR1QztBQUUvQ0MsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGc0M7QUFLL0NDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJRLGtCQURtQjtBQUVuQkM7QUFGbUIsT0FBZjtBQUx5QyxLQUExQixDQUF2QjtBQVdBLFVBQU1SLElBQUksR0FBRyxNQUFNUixHQUFHLENBQUNTLElBQUosRUFBbkI7O0FBRUEsUUFBSVQsR0FBRyxDQUFDVSxFQUFSLEVBQVk7QUFDVm5CLGFBQU8sQ0FBQ2lCLElBQUksQ0FBQ2xCLElBQU4sQ0FBUDtBQUNBSyxZQUFNLENBQUNnQixJQUFQLENBQVksb0JBQVo7QUFDRCxLQUhELE1BR087QUFDTGpCLGNBQVEsQ0FBQ2MsSUFBSSxDQUFDSSxPQUFOLENBQVI7QUFDQWxCLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGLEdBckJELENBOUI0QyxDQXFENUM7OztBQUNBLFFBQU11QixNQUFNLEdBQUcsWUFBWTtBQUN6QixVQUFNakIsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxtREFBUyxhQUFiLEVBQTJCO0FBQ2hEQyxZQUFNLEVBQUU7QUFEd0MsS0FBM0IsQ0FBdkI7O0FBSUEsUUFBSUgsR0FBRyxDQUFDVSxFQUFSLEVBQVk7QUFDVm5CLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUksWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBVEQsQ0F0RDRDLENBaUU1Qzs7O0FBQ0EsUUFBTWIsaUJBQWlCLEdBQUcsTUFBT1IsSUFBUCxJQUFnQjtBQUN4QyxVQUFNVSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLG1EQUFTLFdBQWIsQ0FBdkI7QUFDQSxVQUFNTSxJQUFJLEdBQUcsTUFBTVIsR0FBRyxDQUFDUyxJQUFKLEVBQW5COztBQUVBLFFBQUlULEdBQUcsQ0FBQ1UsRUFBUixFQUFZO0FBQ1ZuQixhQUFPLENBQUNpQixJQUFJLENBQUNsQixJQUFOLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTEMsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FURDs7QUFXQSxzQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUQsVUFBRjtBQUFRRyxXQUFSO0FBQWVNLGNBQWY7QUFBeUJjLFdBQXpCO0FBQWdDSTtBQUFoQyxLQUE3QjtBQUFBLGNBQ0c1QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBbEZNO0FBb0ZQLCtEQUFlSCxXQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9BdXRoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTkVYVF9VUkwgfSBmcm9tIFwiQC9jb25maWcvaW5kZXhcIjtcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBjaGVja1VzZXJMb2dnZWRJbigpLCBbXSk7XG5cbiAgLy8gUmVnaXN0ZXIgdXNlclxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9yZWdpc3RlcmAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKGRhdGEudXNlcik7XG4gICAgICByb3V0ZXIucHVzaChcIi9hY2NvdW50L2Rhc2hib2FyZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICAvLyBMb2dpbiB1c2VyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWw6IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ2luYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBzZXRVc2VyKGRhdGEudXNlcik7XG4gICAgICByb3V0ZXIucHVzaChcIi9hY2NvdW50L2Rhc2hib2FyZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICAvLyBMb2dvdXQgdXNlclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dvdXRgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgY29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAodXNlcikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvdXNlcmApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgc2V0VXNlcihkYXRhLnVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVc2VyKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBlcnJvciwgcmVnaXN0ZXIsIGxvZ2luLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/AuthContext */ \"./context/AuthContext.js\");\n\nvar _jsxFileName = \"/Users/ak7l/Desktop/next-event/next-event-frontend/next-event-app-frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWV2ZW50LWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSw4REFBQyw4REFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();