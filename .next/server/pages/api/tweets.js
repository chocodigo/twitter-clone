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
exports.id = "pages/api/tweets";
exports.ids = ["pages/api/tweets"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/tweets.ts":
/*!*****************************!*\
  !*** ./pages/api/tweets.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const tweets = await prisma.tweet.findMany();\n            res.status(200).json(tweets);\n        } catch (error) {\n            res.status(500).json({\n                error: \"Failed to fetch tweets.\"\n            });\n        }\n    } else if (req.method === \"POST\") {\n        try {\n            const userId = +req.cookies.userId;\n            const tweet = await prisma.tweet.create({\n                data: {\n                    ...req.body,\n                    userId\n                }\n            });\n            res.status(200).json(tweet);\n        } catch (error) {\n            console.log(error);\n            res.status(500).json({\n                error\n            });\n        }\n    } else {\n        res.status(405).end();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUU4QztBQUM5QyxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUVsQixlQUFlRSxNQUFNLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDNUUsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxNQUFNLEdBQUcsTUFBTUwsTUFBTSxDQUFDTSxLQUFLLENBQUNDLFFBQVEsRUFBRTtZQUM1Q0osR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0osTUFBTSxDQUFDLENBQUM7U0FDaEMsQ0FBQyxPQUFPSyxLQUFLLEVBQUU7WUFDWlAsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLHlCQUF5QjthQUFFLENBQUMsQ0FBQztTQUM5RDtLQUNKLE1BQU0sSUFBSVIsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQzlCLElBQUk7WUFDQSxNQUFNTyxNQUFNLEdBQVcsQ0FBQ1QsR0FBRyxDQUFDVSxPQUFPLENBQUNELE1BQU07WUFDMUMsTUFBTUwsS0FBSyxHQUFHLE1BQU1OLE1BQU0sQ0FBQ00sS0FBSyxDQUFDTyxNQUFNLENBQUM7Z0JBQUVDLElBQUksRUFBRTtvQkFBQyxHQUFHWixHQUFHLENBQUNhLElBQUk7b0JBQUNKLE1BQU07aUJBQUM7YUFBRSxDQUFDO1lBQ3ZFUixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxLQUFLLENBQUMsQ0FBQztTQUMvQixDQUFDLE9BQU9JLEtBQUssRUFBRTtZQUNaTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDO1lBQ2xCUCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLO2FBQUUsQ0FBQyxDQUFDO1NBQ25DO0tBQ0osTUFBTTtRQUNIUCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1UsR0FBRyxFQUFFLENBQUM7S0FDekI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdHdlZXRzLnRzPzJjNjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3R3ZWV0cy50c1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0d2VldHMgPSBhd2FpdCBwcmlzbWEudHdlZXQuZmluZE1hbnkoKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odHdlZXRzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIHR3ZWV0cy4nIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlcklkIDogbnVtYmVyPSArcmVxLmNvb2tpZXMudXNlcklkO1xyXG4gICAgICAgICAgICBjb25zdCB0d2VldCA9IGF3YWl0IHByaXNtYS50d2VldC5jcmVhdGUoeyBkYXRhOiB7Li4ucmVxLmJvZHksdXNlcklkfSB9KTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odHdlZXQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0d2VldHMiLCJ0d2VldCIsImZpbmRNYW55Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidXNlcklkIiwiY29va2llcyIsImNyZWF0ZSIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweets.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweets.ts"));
module.exports = __webpack_exports__;

})();