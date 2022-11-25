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
exports.id = "pages/api/redis/update";
exports.ids = ["pages/api/redis/update"];
exports.modules = {

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "(api)/./pages/api/redis/update.ts":
/*!***********************************!*\
  !*** ./pages/api/redis/update.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ioredis */ \"ioredis\");\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst redis = new (ioredis__WEBPACK_IMPORTED_MODULE_0___default())();\nasync function handler(req, res) {\n    try {\n        const { name , updatedValue  } = req.body;\n        console.log(req.body);\n        const KEY = \"todo\";\n        const VALUE = name;\n        const UPDATE_VALUE = updatedValue;\n        console.log(\"VALUES\", KEY, VALUE);\n        const FIND = await redis.lpos(KEY, VALUE);\n        console.log(\"FIND\", FIND);\n        if (FIND !== null) {\n            console.log(KEY, FIND, UPDATE_VALUE);\n            const UPDATE = await redis.lset(KEY, FIND, UPDATE_VALUE);\n            console.log(UPDATE);\n            res.status(200).send({\n                data: \"UPDATED!\"\n            });\n        }\n    } catch (e) {\n        console.log(e.message);\n        res.status(500).send({\n            message: e.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVkaXMvdXBkYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixNQUFNQyxRQUFRLElBQUlELGdEQUFLQTtBQUVSLGVBQWVFLFFBQzVCQyxHQUFvQixFQUNwQkMsR0FBcUIsRUFDckI7SUFDQSxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLGFBQVksRUFBRSxHQUFHSCxJQUFJSSxJQUFJO1FBQ3ZDQyxRQUFRQyxHQUFHLENBQUNOLElBQUlJLElBQUk7UUFDcEIsTUFBTUcsTUFBTTtRQUNaLE1BQU1DLFFBQVFOO1FBQ2QsTUFBTU8sZUFBZU47UUFDckJFLFFBQVFDLEdBQUcsQ0FBQyxVQUFVQyxLQUFLQztRQUMzQixNQUFNRSxPQUFPLE1BQU1aLE1BQU1hLElBQUksQ0FBQ0osS0FBS0M7UUFDbkNILFFBQVFDLEdBQUcsQ0FBQyxRQUFRSTtRQUNwQixJQUFJQSxTQUFTLElBQUksRUFBRTtZQUNqQkwsUUFBUUMsR0FBRyxDQUFDQyxLQUFLRyxNQUFNRDtZQUN2QixNQUFNRyxTQUFTLE1BQU1kLE1BQU1lLElBQUksQ0FBQ04sS0FBS0csTUFBTUQ7WUFDM0NKLFFBQVFDLEdBQUcsQ0FBQ007WUFDWlgsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsTUFBTTtZQUFXO1FBQzFDLENBQUM7SUFDSCxFQUFFLE9BQU9DLEdBQVE7UUFDZlosUUFBUUMsR0FBRyxDQUFDVyxFQUFFQyxPQUFPO1FBQ3JCakIsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRyxTQUFTRCxFQUFFQyxPQUFPO1FBQUM7SUFDNUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcmVkaXMvLi9wYWdlcy9hcGkvcmVkaXMvdXBkYXRlLnRzPzMxMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlZGlzIGZyb20gXCJpb3JlZGlzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuY29uc3QgcmVkaXMgPSBuZXcgUmVkaXMoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBleHByZXNzLlJlcXVlc3QsXG4gIHJlczogZXhwcmVzcy5SZXNwb25zZVxuKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBuYW1lLCB1cGRhdGVkVmFsdWUgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICBjb25zdCBLRVkgPSBcInRvZG9cIjtcbiAgICBjb25zdCBWQUxVRSA9IG5hbWU7XG4gICAgY29uc3QgVVBEQVRFX1ZBTFVFID0gdXBkYXRlZFZhbHVlO1xuICAgIGNvbnNvbGUubG9nKFwiVkFMVUVTXCIsIEtFWSwgVkFMVUUpO1xuICAgIGNvbnN0IEZJTkQgPSBhd2FpdCByZWRpcy5scG9zKEtFWSwgVkFMVUUpO1xuICAgIGNvbnNvbGUubG9nKFwiRklORFwiLCBGSU5EKTtcbiAgICBpZiAoRklORCAhPT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coS0VZLCBGSU5ELCBVUERBVEVfVkFMVUUpO1xuICAgICAgY29uc3QgVVBEQVRFID0gYXdhaXQgcmVkaXMubHNldChLRVksIEZJTkQsIFVQREFURV9WQUxVRSk7XG4gICAgICBjb25zb2xlLmxvZyhVUERBVEUpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBkYXRhOiBcIlVQREFURUQhXCIgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZS5tZXNzYWdlIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVkaXMiLCJyZWRpcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwidXBkYXRlZFZhbHVlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJLRVkiLCJWQUxVRSIsIlVQREFURV9WQUxVRSIsIkZJTkQiLCJscG9zIiwiVVBEQVRFIiwibHNldCIsInN0YXR1cyIsInNlbmQiLCJkYXRhIiwiZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/redis/update.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/redis/update.ts"));
module.exports = __webpack_exports__;

})();