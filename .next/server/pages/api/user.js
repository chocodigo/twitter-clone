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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/user.ts":
/*!***************************!*\
  !*** ./pages/api/user.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    // Simplified user creation for the sake of example\n    if (req.method === \"POST\") {\n        try {\n            const user = await prisma.user.create({\n                data: req.body\n            });\n            res.status(200).json(user);\n        } catch (error) {\n            res.status(500).json({\n                error\n            });\n        }\n    } else {\n        res.status(405).end();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFOEM7QUFDOUMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFbEIsZUFBZUUsTUFBTSxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQzVFLG1EQUFtRDtJQUNuRCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDdkIsSUFBSTtZQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNTCxNQUFNLENBQUNLLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2dCQUFFQyxJQUFJLEVBQUVMLEdBQUcsQ0FBQ00sSUFBSTthQUFFLENBQUM7WUFDekRMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLElBQUksQ0FBQyxDQUFDO1NBQzlCLENBQUMsT0FBT00sS0FBSyxFQUFFO1lBQ1pSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDbkM7S0FDSixNQUFNO1FBQ0hSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxHQUFHLEVBQUUsQ0FBQztLQUN6QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS91c2VyLnRzPzE3MTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3VzZXIudHNcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gICAgLy8gU2ltcGxpZmllZCB1c2VyIGNyZWF0aW9uIGZvciB0aGUgc2FrZSBvZiBleGFtcGxlXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7IGRhdGE6IHJlcS5ib2R5IH0pO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyIiwiY3JlYXRlIiwiZGF0YSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user.ts"));
module.exports = __webpack_exports__;

})();