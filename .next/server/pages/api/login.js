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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email , password  } = req.body;\n        const user = await prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (user && user.password === password) {\n            res.status(200).json({\n                success: true,\n                userId: user.id\n            });\n        } else {\n            res.status(401).json({\n                error: \"Invalid credentials\"\n            });\n        }\n    } else {\n        res.status(405).end(); // Method Not Allowed\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRzhDO0FBQzlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWxCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUM3RSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDdkIsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRSxHQUFHSixHQUFHLENBQUNLLElBQUk7UUFFcEMsTUFBTUMsSUFBSSxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDdENDLEtBQUssRUFBRTtnQkFBRUwsS0FBSzthQUFFO1NBQ25CLENBQUM7UUFFRixJQUFJRyxJQUFJLElBQUlBLElBQUksQ0FBQ0YsUUFBUSxLQUFLQSxRQUFRLEVBQUU7WUFDcENILEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxJQUFJO2dCQUFDQyxNQUFNLEVBQUNOLElBQUksQ0FBQ08sRUFBRTthQUFFLENBQUMsQ0FBQztTQUMxRCxNQUFNO1lBQ0haLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVJLEtBQUssRUFBRSxxQkFBcUI7YUFBRSxDQUFDLENBQUM7U0FDMUQ7S0FDSixNQUFNO1FBQ0hiLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtLQUMvQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS9sb2dpbi50cz9jMTIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9sb2dpbi50c1xyXG5cclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgZW1haWwgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLHVzZXJJZDp1c2VyLmlkIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIGNyZWRlbnRpYWxzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTsgLy8gTWV0aG9kIE5vdCBBbGxvd2VkXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsInVzZXJJZCIsImlkIiwiZXJyb3IiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();