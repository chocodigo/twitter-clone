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
exports.id = "pages/api/check-login";
exports.ids = ["pages/api/check-login"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/check-login.ts":
/*!**********************************!*\
  !*** ./pages/api/check-login.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        // 쿠키에서 user id를 가져옴\n        const userId = req.cookies.userId;\n        if (!userId) {\n            return res.status(401).json({\n                error: \"Not authenticated\"\n            });\n        }\n        // 사용자 정보 확인\n        const user = await prisma.user.findUnique({\n            where: {\n                id: parseInt(userId)\n            }\n        });\n        if (!user) {\n            return res.status(401).json({\n                error: \"User not found\"\n            });\n        }\n        // 로그인 상태 확인 완료\n        res.status(200).json({\n            message: \"Authenticated\"\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: \"Something went wrong\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2stbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWpDLGlFQUFlLE9BQU9FLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDaEUsSUFBSTtRQUNBO1FBQ2dCLE1BQVZDLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNELE1BQU07UUFFakMsSUFBSSxDQUFDQSxNQUFNLEVBQUU7WUFDVCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsbUJBQW1CO2FBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBRUQ7UUFDYyxNQUFSQyxJQUFJLEdBQUcsTUFBTVIsTUFBTSxDQUFDUSxJQUFJLENBQUNDLFVBQVUsQ0FBQztZQUN0Q0MsS0FBSyxFQUFFO2dCQUNIQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ1QsTUFBTSxDQUFDO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLElBQUksQ0FBQ0ssSUFBSSxFQUFFO1lBQ1AsT0FBT04sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLGdCQUFnQjthQUFFLENBQUMsQ0FBQztTQUM1RDtRQUVEO1FBQ0FMLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRU8sT0FBTyxFQUFFLGVBQWU7U0FBRSxDQUFDLENBQUM7S0FDdEQsQ0FBQyxPQUFPTixLQUFLLEVBQUU7UUFDWkwsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsc0JBQXNCO1NBQUUsQ0FBQyxDQUFDO0tBQzNELFFBQVM7UUFDTixNQUFNUCxNQUFNLENBQUNjLFdBQVcsRUFBRSxDQUFDO0tBQzlCO0NBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvY2hlY2stbG9naW4udHM/MTgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDsv6DtgqTsl5DshJwgdXNlciBpZOulvCDqsIDsoLjsmLRcclxuICAgICAgICBjb25zdCB1c2VySWQgPSByZXEuY29va2llcy51c2VySWQ7XHJcblxyXG4gICAgICAgIGlmICghdXNlcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7IKs7Jqp7J6QIOygleuztCDtmZXsnbhcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcGFyc2VJbnQodXNlcklkKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g66Gc6re47J24IOyDge2DnCDtmZXsnbgg7JmE66OMXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQXV0aGVudGljYXRlZCcgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicmVxIiwicmVzIiwidXNlcklkIiwiY29va2llcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInBhcnNlSW50IiwibWVzc2FnZSIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/check-login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/check-login.ts"));
module.exports = __webpack_exports__;

})();