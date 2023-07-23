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
exports.id = "pages/api/like-tweet";
exports.ids = ["pages/api/like-tweet"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/like-tweet.ts":
/*!*********************************!*\
  !*** ./pages/api/like-tweet.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { tweetId  } = req.body;\n    if (!tweetId) {\n        return res.status(400).json({\n            error: \"Tweet ID is required\"\n        });\n    }\n    try {\n        // 좋아요를 1 증가시킵니다.\n        const updatedTweet = await prisma.tweet.update({\n            where: {\n                id: parseInt(tweetId)\n            },\n            data: {\n                likes: {\n                    increment: 1\n                }\n            }\n        });\n        res.status(200).json(updatedTweet);\n    } catch (error) {\n        res.status(500).json({\n            error: \"Something went wrong\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlrZS10d2VldC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDOEM7QUFFOUMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFakMsaUVBQWUsT0FBT0UsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNoRSxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFFNUIsSUFBSSxDQUFDRCxPQUFPLEVBQUU7UUFDVixPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxzQkFBc0I7U0FBRSxDQUFDLENBQUM7S0FDbEU7SUFFRCxJQUFJO1FBQ0E7UUFDQSxNQUFNQyxZQUFZLEdBQUcsTUFBTVIsTUFBTSxDQUFDUyxLQUFLLENBQUNDLE1BQU0sQ0FBQztZQUMzQ0MsS0FBSyxFQUFFO2dCQUNIQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ1YsT0FBTyxDQUFDO2FBQ3hCO1lBQ0RXLElBQUksRUFBRTtnQkFDRkMsS0FBSyxFQUFFO29CQUNIQyxTQUFTLEVBQUUsQ0FBQztpQkFDZjthQUNKO1NBQ0osQ0FBQztRQUVGZCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRSxZQUFZLENBQUMsQ0FBQztLQUN0QyxDQUFDLE9BQU9ELEtBQUssRUFBRTtRQUNaTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxzQkFBc0I7U0FBRSxDQUFDLENBQUM7S0FDM0QsUUFBUztRQUNOLE1BQU1QLE1BQU0sQ0FBQ2lCLFdBQVcsRUFBRSxDQUFDO0tBQzlCO0NBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvbGlrZS10d2VldC50cz9iYmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCB7IHR3ZWV0SWQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGlmICghdHdlZXRJZCkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnVHdlZXQgSUQgaXMgcmVxdWlyZWQnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8g7KKL7JWE7JqU66W8IDEg7Kad6rCA7Iuc7YK164uI64ukLlxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUd2VldCA9IGF3YWl0IHByaXNtYS50d2VldC51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHR3ZWV0SWQpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsaWtlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudDogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVwZGF0ZWRUd2VldCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicmVxIiwicmVzIiwidHdlZXRJZCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1cGRhdGVkVHdlZXQiLCJ0d2VldCIsInVwZGF0ZSIsIndoZXJlIiwiaWQiLCJwYXJzZUludCIsImRhdGEiLCJsaWtlcyIsImluY3JlbWVudCIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/like-tweet.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/like-tweet.ts"));
module.exports = __webpack_exports__;

})();