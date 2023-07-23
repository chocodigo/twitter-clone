"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/create-account";
exports.ids = ["pages/create-account"];
exports.modules = {

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateAccount)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n// pages/create-account.tsx\n\nfunction CreateAccount() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSignUp = async (event)=>{\n        event.preventDefault();\n        const email = event.target.email.value;\n        const password = event.target.password.value;\n        const response = await fetch(\"/api/user\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        });\n        if (response.ok) {\n            router.push(\"/log-in\");\n        } else {\n            // 에러 처리\n            console.error(\"Account creation failed\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSignUp,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Email: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            name: \"email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Password: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            name: \"password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\reamhae\\\\WebstormProjects\\\\sandbox (1)\\\\pages\\\\create-account.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUZBLDJCQUEyQjtBQUVhO0FBRXpCLFNBQVNDLGFBQWEsR0FBRztJQUNwQyxNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFFMUIsTUFBTUcsWUFBWSxHQUFHLE9BQU9DLEtBQWUsR0FBSztRQUM1Q0EsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixNQUFNQyxLQUFLLEdBQUcsS0FBTSxDQUFDQyxNQUFNLENBQVNELEtBQUssQ0FBQ0UsS0FBSztRQUMvQyxNQUFNQyxRQUFRLEdBQUcsS0FBTSxDQUFDRixNQUFNLENBQVNFLFFBQVEsQ0FBQ0QsS0FBSztRQUVyRCxNQUFNRSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN0Q0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRSxrQkFBa0I7YUFBRTtZQUMvQ0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFBRVYsS0FBSztnQkFBRUcsUUFBUTthQUFFLENBQUM7U0FDNUMsQ0FBQztRQUVGLElBQUlDLFFBQVEsQ0FBQ08sRUFBRSxFQUFFO1lBQ2JmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQixNQUFNO1lBQ0g7WUFDQUMsT0FBTyxDQUFDQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztLQUNKO0lBRUQscUJBQ0ksOERBQUNDLEtBQUc7a0JBQ0EsNEVBQUNDLE1BQUk7WUFBQ0MsUUFBUSxFQUFFcEIsWUFBWTs7OEJBQ3hCLDhEQUFDa0IsS0FBRzs7c0NBQ0EsOERBQUNHLE9BQUs7c0NBQUMsU0FBTzs7Ozs7Z0NBQVE7c0NBQ3RCLDhEQUFDQyxPQUFLOzRCQUFDQyxJQUFJLEVBQUMsT0FBTzs0QkFBQ0MsSUFBSSxFQUFDLE9BQU87NEJBQUNDLFFBQVE7Ozs7O2dDQUFHOzs7Ozs7d0JBQzFDOzhCQUNOLDhEQUFDUCxLQUFHOztzQ0FDQSw4REFBQ0csT0FBSztzQ0FBQyxZQUFVOzs7OztnQ0FBUTtzQ0FDekIsOERBQUNDLE9BQUs7NEJBQUNDLElBQUksRUFBQyxVQUFVOzRCQUFDQyxJQUFJLEVBQUMsVUFBVTs0QkFBQ0MsUUFBUTs7Ozs7Z0NBQUc7Ozs7Ozt3QkFDaEQ7OEJBQ04sOERBQUNDLFFBQU07b0JBQUNILElBQUksRUFBQyxRQUFROzhCQUFDLFNBQU87Ozs7O3dCQUFTOzs7Ozs7Z0JBQ25DOzs7OztZQUNMLENBQ1I7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3g/NDUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9jcmVhdGUtYWNjb3VudC50c3hcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUFjY291bnQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWduVXAgPSBhc3luYyAoZXZlbnQ6Rm9ybUV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkuZW1haWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkucGFzc3dvcmQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9nLWluJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g7JeQ65+sIOyymOumrFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBY2NvdW50IGNyZWF0aW9uIGZhaWxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2lnblVwfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDcmVhdGVBY2NvdW50Iiwicm91dGVyIiwiaGFuZGxlU2lnblVwIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/create-account.tsx"));
module.exports = __webpack_exports__;

})();