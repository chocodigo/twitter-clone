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
exports.id = "pages/api/tweet/[id]";
exports.ids = ["pages/api/tweet/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/tweet/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/tweet/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { query: { id  } ,  } = req;\n    if (req.method === \"GET\") {\n        try {\n            const tweet = await prisma.tweet.findUnique({\n                where: {\n                    id: Number(id)\n                }\n            });\n            if (!tweet) {\n                return res.status(404).json({\n                    error: \"Tweet not found\"\n                });\n            }\n            return res.json(tweet);\n        } catch (error) {\n            return res.status(500).json({\n                error: \"Failed to fetch the tweet\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXQvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDOEM7QUFFOUMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFakMsaUVBQWUsT0FBT0UsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNoRSxNQUFNLEVBQ0ZDLEtBQUssRUFBRSxFQUFFQyxFQUFFLEdBQUUsS0FDaEIsR0FBR0gsR0FBRztJQUVQLElBQUlBLEdBQUcsQ0FBQ0ksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN0QixJQUFJO1lBQ0EsTUFBTUMsS0FBSyxHQUFHLE1BQU1OLE1BQU0sQ0FBQ00sS0FBSyxDQUFDQyxVQUFVLENBQUM7Z0JBQ3hDQyxLQUFLLEVBQUU7b0JBQUVKLEVBQUUsRUFBRUssTUFBTSxDQUFDTCxFQUFFLENBQUM7aUJBQUU7YUFDNUIsQ0FBQztZQUVGLElBQUksQ0FBQ0UsS0FBSyxFQUFFO2dCQUNSLE9BQU9KLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLEtBQUssRUFBRSxpQkFBaUI7aUJBQUUsQ0FBQyxDQUFDO2FBQzdEO1lBRUQsT0FBT1YsR0FBRyxDQUFDUyxJQUFJLENBQUNMLEtBQUssQ0FBQyxDQUFDO1NBQzFCLENBQUMsT0FBT00sS0FBSyxFQUFFO1lBQ1osT0FBT1YsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLDJCQUEyQjthQUFFLENBQUMsQ0FBQztTQUN2RTtLQUNKLE1BQU07UUFDSFYsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0tBQ3pEO0NBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdHdlZXQvW2lkXS50cz81ZDBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcXVlcnk6IHsgaWQgfSxcclxuICAgIH0gPSByZXE7XHJcblxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdHdlZXQgPSBhd2FpdCBwcmlzbWEudHdlZXQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkKSB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdHdlZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnVHdlZXQgbm90IGZvdW5kJyB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHR3ZWV0KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCB0aGUgdHdlZXQnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwidHdlZXQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJOdW1iZXIiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweet/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweet/[id].ts"));
module.exports = __webpack_exports__;

})();