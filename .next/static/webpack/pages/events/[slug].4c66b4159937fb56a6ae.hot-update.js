/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[slug]",{

/***/ "./pages/events/[slug].js":
/*!********************************!*\
  !*** ./pages/events/[slug].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ EventPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ak7l_Desktop_next_event_next_event_frontend_next_event_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ak7l_Desktop_next_event_next_event_frontend_next_event_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ak7l_Desktop_next_event_next_event_frontend_next_event_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ak7l_Desktop_next_event_next_event_frontend_next_event_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n/* harmony import */ var _styles_Event_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Event.module.css */ \"./styles/Event.module.css\");\n/* harmony import */ var _styles_Event_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/ak7l/Desktop/next-event/next-event-frontend/next-event-app-frontend/pages/events/[slug].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction EventPage(_ref) {\n  _s();\n\n  var evt = _ref.evt;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var deleteEvent = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_ak7l_Desktop_next_event_next_event_frontend_next_event_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_ak7l_Desktop_next_event_next_event_frontend_next_event_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var res, data;\n      return _Users_ak7l_Desktop_next_event_next_event_frontend_next_event_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!confirm(\"Are you sure?\")) {\n                _context.next = 8;\n                break;\n              }\n\n              _context.next = 3;\n              return fetch(\"\".concat(_config_index__WEBPACK_IMPORTED_MODULE_7__.API_URL, \"/events/\").concat(evt.id), {\n                method: \"DELETE\"\n              });\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              data = _context.sent;\n\n              if (!res.ok) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(data.message);\n              } else {\n                router.push(\"/events\");\n              }\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function deleteEvent(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_10___default().event),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_10___default().control),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"/events/edit/\".concat(evt.id),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaPencilAlt, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, this), \"Edit Event\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"#\",\n          className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_10___default().delete),\n          onClick: deleteEvent,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaTimes, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this), \" Delete Event\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [new Date(evt.date).toLocaleDateString(\"en-GB\"), \" at \", evt.time]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: evt.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_9__.ToastContainer, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), evt.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_10___default().image),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          src: evt.image.formats.medium.url,\n          width: 960,\n          height: 600\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Description:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: evt.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [\"Venue: \", evt.venue]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: evt.address\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/events\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_10___default().back),\n          children: [\"<\", \" Go Back\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n} // export async function getServerSideProps({ query: { slug } }) {\n//   const res = await fetch(`${API_URL}/api/events/${slug}`);\n//   const events = await res.json();\n//   return {\n//     props: {\n//       evt: events[0],\n//     },\n//   };\n// }\n\n_s(EventPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];\n});\n\n_c = EventPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tzbHVnXS5qcz9mNzhjIl0sIm5hbWVzIjpbIkV2ZW50UGFnZSIsImV2dCIsInJvdXRlciIsInVzZVJvdXRlciIsImRlbGV0ZUV2ZW50IiwiZSIsImNvbmZpcm0iLCJmZXRjaCIsIkFQSV9VUkwiLCJpZCIsIm1ldGhvZCIsInJlcyIsImpzb24iLCJkYXRhIiwib2siLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwdXNoIiwic3R5bGVzIiwiRGF0ZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0aW1lIiwibmFtZSIsImltYWdlIiwiZm9ybWF0cyIsIm1lZGl1bSIsInVybCIsImRlc2NyaXB0aW9uIiwidmVudWUiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxTQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ3pDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsV0FBVztBQUFBLHdXQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNkQyxPQUFPLENBQUMsZUFBRCxDQURPO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRUVDLEtBQUssV0FBSUMsa0RBQUoscUJBQXNCUCxHQUFHLENBQUNRLEVBQTFCLEdBQWdDO0FBQ3JEQyxzQkFBTSxFQUFFO0FBRDZDLGVBQWhDLENBRlA7O0FBQUE7QUFFVkMsaUJBRlU7QUFBQTtBQUFBLHFCQUtHQSxHQUFHLENBQUNDLElBQUosRUFMSDs7QUFBQTtBQUtWQyxrQkFMVTs7QUFNaEIsa0JBQUksQ0FBQ0YsR0FBRyxDQUFDRyxFQUFULEVBQWE7QUFDWEMsdUVBQUEsQ0FBWUYsSUFBSSxDQUFDRyxPQUFqQjtBQUNELGVBRkQsTUFFTztBQUNMZCxzQkFBTSxDQUFDZSxJQUFQLENBQVksU0FBWjtBQUNEOztBQVZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhiLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBYUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRWMsd0VBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQSwwRUFBaEI7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUFNLGNBQUkseUJBQWtCakIsR0FBRyxDQUFDUSxFQUF0QixDQUFWO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksbUJBQVMsRUFBRVMseUVBQXZCO0FBQXNDLGlCQUFPLEVBQUVkLFdBQS9DO0FBQUEsa0NBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRTtBQUFBLG1CQUNHLElBQUllLElBQUosQ0FBU2xCLEdBQUcsQ0FBQ21CLElBQWIsRUFBbUJDLGtCQUFuQixDQUFzQyxPQUF0QyxDQURILFVBQ3VEcEIsR0FBRyxDQUFDcUIsSUFEM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFlRTtBQUFBLGtCQUFLckIsR0FBRyxDQUFDc0I7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkYsZUFnQkUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRixFQWlCR3RCLEdBQUcsQ0FBQ3VCLEtBQUosaUJBQ0M7QUFBSyxpQkFBUyxFQUFFTix3RUFBaEI7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBRWpCLEdBQUcsQ0FBQ3VCLEtBQUosQ0FBVUMsT0FBVixDQUFrQkMsTUFBbEIsQ0FBeUJDLEdBRGhDO0FBRUUsZUFBSyxFQUFFLEdBRlQ7QUFHRSxnQkFBTSxFQUFFO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkosZUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkYsZUE2QkU7QUFBQSxrQkFBSTFCLEdBQUcsQ0FBQzJCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRixlQThCRTtBQUFBLDhCQUFZM0IsR0FBRyxDQUFDNEIsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJGLGVBK0JFO0FBQUEsa0JBQUk1QixHQUFHLENBQUM2QjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkYsZUFpQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRVosdUVBQWQ7QUFBQSxxQkFBNEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5Q0QsQyxDQTBCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBMUZ3QmxCLFM7VUFDUEcsa0Q7OztLQURPSCxTIiwiZmlsZSI6Ii4vcGFnZXMvZXZlbnRzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGYVBlbmNpbEFsdCwgRmFUaW1lcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCJAL2NvbmZpZy9pbmRleFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvRXZlbnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50UGFnZSh7IGV2dCB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkZWxldGVFdmVudCA9IGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHMvJHtldnQuaWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2V2ZW50c1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXZlbnRzL2VkaXQvJHtldnQuaWR9YH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPEZhUGVuY2lsQWx0IC8+XG4gICAgICAgICAgICAgIEVkaXQgRXZlbnRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9IG9uQ2xpY2s9e2RlbGV0ZUV2ZW50fT5cbiAgICAgICAgICAgIDxGYVRpbWVzIC8+IERlbGV0ZSBFdmVudFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtuZXcgRGF0ZShldnQuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tR0JcIil9IGF0IHtldnQudGltZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aDE+e2V2dC5uYW1lfTwvaDE+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICB7ZXZ0LmltYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2V2dC5pbWFnZS5mb3JtYXRzLm1lZGl1bS51cmx9XG4gICAgICAgICAgICAgIHdpZHRoPXs5NjB9XG4gICAgICAgICAgICAgIGhlaWdodD17NjAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgey8qIDxoMz5QZXJmb3JtZXJzOjwvaDM+XG4gICAgICAgIDxwPntldnQucGVyZm9ybWVyc308L3A+ICovfVxuICAgICAgICA8aDM+RGVzY3JpcHRpb246PC9oMz5cbiAgICAgICAgPHA+e2V2dC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxoMz5WZW51ZToge2V2dC52ZW51ZX08L2gzPlxuICAgICAgICA8cD57ZXZ0LmFkZHJlc3N9PC9wPlxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFja30+e1wiPFwifSBHbyBCYWNrPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ldmVudHNgKTtcbiAgY29uc3QgZXZlbnRzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBwYXRocyA9IGV2ZW50cy5tYXAoKGV2dCkgPT4gKHtcbiAgICBwYXJhbXM6IHsgc2x1ZzogZXZ0LnNsdWcgfSxcbiAgfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vZXZlbnRzP3NsdWc9JHtzbHVnfWApO1xuICBjb25zdCBldmVudHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBldnQ6IGV2ZW50c1swXSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeTogeyBzbHVnIH0gfSkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcGkvZXZlbnRzLyR7c2x1Z31gKTtcbi8vICAgY29uc3QgZXZlbnRzID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgZXZ0OiBldmVudHNbMF0sXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[slug].js\n");

/***/ })

});