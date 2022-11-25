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
exports.id = "pages/api/redis/delete";
exports.ids = ["pages/api/redis/delete"];
exports.modules = {

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "(api)/./pages/api/redis/delete.ts":
/*!***********************************!*\
  !*** ./pages/api/redis/delete.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ioredis */ \"ioredis\");\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst redis = new (ioredis__WEBPACK_IMPORTED_MODULE_0___default())();\nasync function handler(req, res) {\n    try {\n        const { name  } = req.body;\n        const KEY = \"todo\";\n        const VALUE = name;\n        const FIND = await redis.lpos(KEY, VALUE);\n        console.log(FIND);\n        const DELETE = await redis.lrem(KEY, 1, VALUE);\n        if (DELETE) {\n            res.status(200).send({\n                data: \"Deleted!\"\n            });\n        }\n    } catch (e) {\n        console.log(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVkaXMvZGVsZXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixNQUFNQyxRQUFRLElBQUlELGdEQUFLQTtBQUVSLGVBQWVFLFFBQzVCQyxHQUFvQixFQUNwQkMsR0FBcUIsRUFDckI7SUFDQSxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0YsSUFBSUcsSUFBSTtRQUN6QixNQUFNQyxNQUFNO1FBQ1osTUFBTUMsUUFBUUg7UUFDZCxNQUFNSSxPQUFPLE1BQU1SLE1BQU1TLElBQUksQ0FBQ0gsS0FBS0M7UUFDbkNHLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixNQUFNSSxTQUFTLE1BQU1aLE1BQU1hLElBQUksQ0FBQ1AsS0FBSyxHQUFHQztRQUN4QyxJQUFJSyxRQUFRO1lBQ1ZULElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE1BQU07WUFBVztRQUMxQyxDQUFDO0lBQ0gsRUFBRSxPQUFPQyxHQUFHO1FBQ1ZQLFFBQVFDLEdBQUcsQ0FBQ007SUFDZDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZWRpcy8uL3BhZ2VzL2FwaS9yZWRpcy9kZWxldGUudHM/NjdkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVkaXMgZnJvbSBcImlvcmVkaXNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5jb25zdCByZWRpcyA9IG5ldyBSZWRpcygpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IGV4cHJlc3MuUmVxdWVzdCxcbiAgcmVzOiBleHByZXNzLlJlc3BvbnNlXG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IEtFWSA9IFwidG9kb1wiO1xuICAgIGNvbnN0IFZBTFVFID0gbmFtZTtcbiAgICBjb25zdCBGSU5EID0gYXdhaXQgcmVkaXMubHBvcyhLRVksIFZBTFVFKTtcbiAgICBjb25zb2xlLmxvZyhGSU5EKTtcbiAgICBjb25zdCBERUxFVEUgPSBhd2FpdCByZWRpcy5scmVtKEtFWSwgMSwgVkFMVUUpO1xuICAgIGlmIChERUxFVEUpIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZGF0YTogXCJEZWxldGVkIVwiIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVkaXMiLCJyZWRpcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiYm9keSIsIktFWSIsIlZBTFVFIiwiRklORCIsImxwb3MiLCJjb25zb2xlIiwibG9nIiwiREVMRVRFIiwibHJlbSIsInN0YXR1cyIsInNlbmQiLCJkYXRhIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/redis/delete.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/redis/delete.ts"));
module.exports = __webpack_exports__;

})();