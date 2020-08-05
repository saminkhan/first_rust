(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./frontend/init.js":
/*!**************************!*\
  !*** ./frontend/init.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg */ \"./frontend/pkg/index.js\");\n\n\nconst DEFAULT = 30;\n\nwindow.rs_fib = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"fib\"];\n\nwindow.js_fib = (n) => {\n    return n < 2 ? n : window.js_fib(n - 1) + window.js_fib(n - 2);\n};\n\nwindow.timer = async (func, n) => {\n    const t1 = performance.now();\n    const result = await func(n);\n    return [(performance.now() - t1) / 1000.0, result];\n};\n\nlet main_loop = async () => {\n    let x = DEFAULT;\n    while (true) {\n        const input = prompt(\n            'JavaScript vs Rust+Wasm benchmark using fibonacci(n)\\n\\n' +\n                'enter n (may need more than a minute for n >= 45):',\n            x.toString()\n        );\n        x = Math.max(0, parseInt(input, 10));\n        x = isNaN(x) ? DEFAULT : x;\n\n        const y = await Promise.all([\n            window.timer(window.js_fib, x),\n            window.timer(window.rs_fib, x),\n        ]);\n\n        alert(\n            `JavaScript: fibonacci(${x}) == ${y[0][1]} (${y[0][0]} seconds)\\n` +\n                `Rust+Wasm: fibonacci(${x}) == ${y[1][1]} (${y[1][0]} seconds)`\n        );\n    }\n};\n\nmain_loop();\n\n\n//# sourceURL=webpack:///./frontend/init.js?");

/***/ }),

/***/ "./frontend/pkg/index.js":
/*!*******************************!*\
  !*** ./frontend/pkg/index.js ***!
  \*******************************/
/*! exports provided: fib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./frontend/pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./frontend/pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fib\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"fib\"]; });\n\n\n\n\n//# sourceURL=webpack:///./frontend/pkg/index.js?");

/***/ }),

/***/ "./frontend/pkg/index_bg.js":
/*!**********************************!*\
  !*** ./frontend/pkg/index_bg.js ***!
  \**********************************/
/*! exports provided: fib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fib\", function() { return fib; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./frontend/pkg/index_bg.wasm\");\n\n\n/**\n* @param {number} n\n* @returns {number}\n*/\nfunction fib(n) {\n    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fib\"](n);\n    return ret >>> 0;\n}\n\n\n\n//# sourceURL=webpack:///./frontend/pkg/index_bg.js?");

/***/ }),

/***/ "./frontend/pkg/index_bg.wasm":
/*!************************************!*\
  !*** ./frontend/pkg/index_bg.wasm ***!
  \************************************/
/*! exports provided: memory, fib */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./frontend/pkg/index_bg.wasm?");

/***/ })

}]);