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
exports.id = "pages/api/redis";
exports.ids = ["pages/api/redis"];
exports.modules = {

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "(api)/./pages/api/redis/index.ts":
/*!**********************************!*\
  !*** ./pages/api/redis/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ioredis */ \"ioredis\");\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst redis = new (ioredis__WEBPACK_IMPORTED_MODULE_0___default())();\nasync function handler(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            const KEY = \"todo\";\n            const GET = await redis.lrange(KEY, 0, -1);\n            res.status(200).send({\n                data: GET\n            });\n        } else if (req.method === \"POST\") {\n            const { name  } = req.body;\n            const KEY1 = \"todo\";\n            const VALUE = name;\n            const FIND = await redis.lpos(KEY1, VALUE);\n            if (FIND === null) {\n                const SET = await redis.lpush(KEY1, VALUE);\n                res.status(200).send({\n                    data: SET\n                });\n            } else {\n                res.status(403).send({\n                    data: \"Already exists\"\n                });\n            }\n        } else if (req.method === \"DELETE\") {\n            console.log(req.body);\n            console.log(\"DELte\");\n        } else {\n            res.status(500).send({\n                error: \"Something went wrong!\"\n            });\n        }\n    } catch (e) {\n        console.log(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVkaXMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRCO0FBRTVCLE1BQU1DLFFBQVEsSUFBSUQsZ0RBQUtBO0FBRVIsZUFBZUUsUUFDNUJDLEdBQW9CLEVBQ3BCQyxHQUFxQixFQUNyQjtJQUNBLElBQUk7UUFDRixJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztZQUN4QixNQUFNQyxNQUFNO1lBQ1osTUFBTUMsTUFBTSxNQUFNTixNQUFNTyxNQUFNLENBQUNGLEtBQUssR0FBRyxDQUFDO1lBQ3hDRixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxNQUFNSjtZQUFJO1FBQ25DLE9BQU8sSUFBSUosSUFBSUUsTUFBTSxLQUFLLFFBQVE7WUFDaEMsTUFBTSxFQUFFTyxLQUFJLEVBQUUsR0FBR1QsSUFBSVUsSUFBSTtZQUN6QixNQUFNUCxPQUFNO1lBQ1osTUFBTVEsUUFBUUY7WUFDZCxNQUFNRyxPQUFPLE1BQU1kLE1BQU1lLElBQUksQ0FBQ1YsTUFBS1E7WUFFbkMsSUFBSUMsU0FBUyxJQUFJLEVBQUU7Z0JBQ2pCLE1BQU1FLE1BQU0sTUFBTWhCLE1BQU1pQixLQUFLLENBQUNaLE1BQUtRO2dCQUNuQ1YsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsTUFBTU07Z0JBQUk7WUFDbkMsT0FBTztnQkFDTGIsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsTUFBTTtnQkFBaUI7WUFDaEQsQ0FBQztRQUNILE9BQU8sSUFBSVIsSUFBSUUsTUFBTSxLQUFLLFVBQVU7WUFDbENjLFFBQVFDLEdBQUcsQ0FBQ2pCLElBQUlVLElBQUk7WUFDcEJNLFFBQVFDLEdBQUcsQ0FBQztRQUNkLE9BQU87WUFDTGhCLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVXLE9BQU87WUFBd0I7UUFDeEQsQ0FBQztJQUNILEVBQUUsT0FBT0MsR0FBRztRQUNWSCxRQUFRQyxHQUFHLENBQUNFO0lBQ2Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcmVkaXMvLi9wYWdlcy9hcGkvcmVkaXMvaW5kZXgudHM/ZTk4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVkaXMgZnJvbSBcImlvcmVkaXNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5jb25zdCByZWRpcyA9IG5ldyBSZWRpcygpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IGV4cHJlc3MuUmVxdWVzdCxcbiAgcmVzOiBleHByZXNzLlJlc3BvbnNlXG4pIHtcbiAgdHJ5IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgY29uc3QgS0VZID0gXCJ0b2RvXCI7XG4gICAgICBjb25zdCBHRVQgPSBhd2FpdCByZWRpcy5scmFuZ2UoS0VZLCAwLCAtMSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGRhdGE6IEdFVCB9KTtcbiAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5O1xuICAgICAgY29uc3QgS0VZID0gXCJ0b2RvXCI7XG4gICAgICBjb25zdCBWQUxVRSA9IG5hbWU7XG4gICAgICBjb25zdCBGSU5EID0gYXdhaXQgcmVkaXMubHBvcyhLRVksIFZBTFVFKTtcblxuICAgICAgaWYgKEZJTkQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgU0VUID0gYXdhaXQgcmVkaXMubHB1c2goS0VZLCBWQUxVRSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZGF0YTogU0VUIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBkYXRhOiBcIkFscmVhZHkgZXhpc3RzXCIgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkRFTHRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVkaXMiLCJyZWRpcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJLRVkiLCJHRVQiLCJscmFuZ2UiLCJzdGF0dXMiLCJzZW5kIiwiZGF0YSIsIm5hbWUiLCJib2R5IiwiVkFMVUUiLCJGSU5EIiwibHBvcyIsIlNFVCIsImxwdXNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/redis/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/redis/index.ts"));
module.exports = __webpack_exports__;

})();