/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ReferenceError: window is not defined\\n    at eval (webpack:///./node_modules/style-loader/lib/addStyles.js?:23:9)\\n    at eval (webpack:///./node_modules/style-loader/lib/addStyles.js?:12:46)\\n    at module.exports (webpack:///./node_modules/style-loader/lib/addStyles.js?:77:88)\\n    at eval (webpack:///./src/style.scss?./node_modules/style-loader!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js:16:134)\\n    at Object../node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss (D:\\\\Projetos\\\\miner\\\\node_modules\\\\style-loader\\\\index.js!D:\\\\Projetos\\\\miner\\\\node_modules\\\\css-loader\\\\index.js!D:\\\\Projetos\\\\miner\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js!D:\\\\Projetos\\\\miner\\\\src\\\\style.scss:119:1)\\n    at __webpack_require__ (D:\\\\Projetos\\\\miner\\\\node_modules\\\\style-loader\\\\index.js!D:\\\\Projetos\\\\miner\\\\node_modules\\\\css-loader\\\\index.js!D:\\\\Projetos\\\\miner\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js!D:\\\\Projetos\\\\miner\\\\src\\\\style.scss:21:30)\\n    at D:\\\\Projetos\\\\miner\\\\node_modules\\\\style-loader\\\\index.js!D:\\\\Projetos\\\\miner\\\\node_modules\\\\css-loader\\\\index.js!D:\\\\Projetos\\\\miner\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js!D:\\\\Projetos\\\\miner\\\\src\\\\style.scss:85:18\\n    at Object.<anonymous> (D:\\\\Projetos\\\\miner\\\\node_modules\\\\style-loader\\\\index.js!D:\\\\Projetos\\\\miner\\\\node_modules\\\\css-loader\\\\index.js!D:\\\\Projetos\\\\miner\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js!D:\\\\Projetos\\\\miner\\\\src\\\\style.scss:88:10)\\n    at Module._compile (D:\\\\Projetos\\\\miner\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:178:30)\\n    at exec (D:\\\\Projetos\\\\miner\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:54:10)\\n    at childCompiler.runAsChild.e (D:\\\\Projetos\\\\miner\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:132:14)\\n    at compile (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:243:11)\\n    at hooks.afterCompile.callAsync.err (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:500:14)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:24:12), <anonymous>:24:1)\\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:35:21)\\n    at compilation.seal.err (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:497:30)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:24:12), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:35:21)\\n    at hooks.optimizeAssets.callAsync.err (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:985:35)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:24:12), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:35:21)\\n    at hooks.optimizeChunkAssets.callAsync.err (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:976:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:24:12), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:35:21)\\n    at hooks.additionalAssets.callAsync.err (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:971:36)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:24:12), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:35:21)\\n    at hooks.optimizeTree.callAsync.err (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:967:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:24:12), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:35:21)\\n    at Compilation.seal (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:904:27)\\n    at hooks.make.callAsync.err (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:494:17)\\n    at _err0 (eval at create (D:\\\\Projetos\\\\miner\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:24:12), <anonymous>:11:1)\\n    at _addModuleChain (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:770:12)\\n    at processModuleDependencies.err (D:\\\\Projetos\\\\miner\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:709:9)\\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\");\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });