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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nvar me_1 = __webpack_require__(/*! ./me */ \"./src/me.ts\");\r\nvar pokemon_1 = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.ts\");\r\nvar cache = [\r\n    {\r\n        key: 'me',\r\n        title: 'Me',\r\n        data: {\r\n            name: 'Пичугин Данила Кириллович',\r\n            group: 'M3309'\r\n        }\r\n    },\r\n    {\r\n        key: 'pokemon1',\r\n        title: 'First Pokemon',\r\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/1/\"); }\r\n    },\r\n    {\r\n        key: 'pokemon2',\r\n        title: 'Second Pokemon',\r\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/2/\"); }\r\n    },\r\n    {\r\n        key: 'pokemon3',\r\n        title: 'Third Pokemon',\r\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/3/\"); }\r\n    },\r\n    {\r\n        key: 'pokemon4',\r\n        title: 'Fourth Pokemon',\r\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/4/\"); }\r\n    },\r\n    {\r\n        key: 'pokemon5',\r\n        title: 'Fifth Pokemon',\r\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/5/\"); }\r\n    },\r\n    {\r\n        key: 'pokemon6',\r\n        title: 'Sixth Pokemon',\r\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/6/\"); }\r\n    },\r\n    {\r\n        key: 'pokemon7',\r\n        title: 'Seventh Pokemon',\r\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/7/\"); }\r\n    },\r\n];\r\nvar root = document.querySelector('#root');\r\nvar app = document.createElement('div');\r\nvar tabList = document.createElement('ul');\r\nvar info = document.createElement('div');\r\nvar _loop_1 = function (title, key) {\r\n    var indexInCacheArray = cache.findIndex(function (item) { return item.key === key; });\r\n    var li = document.createElement('li');\r\n    var link = document.createElement('a');\r\n    link.setAttribute('href', '#');\r\n    li.appendChild(link);\r\n    link.innerText = title;\r\n    link.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {\r\n        var data, _a, infoRenderer;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    data = cache[indexInCacheArray].data;\r\n                    if (!(typeof data === 'function')) return [3 /*break*/, 3];\r\n                    _a = cache[indexInCacheArray];\r\n                    return [4 /*yield*/, data()];\r\n                case 1: return [4 /*yield*/, (_b.sent()).json()];\r\n                case 2:\r\n                    _a.data = _b.sent();\r\n                    _b.label = 3;\r\n                case 3:\r\n                    infoRenderer = key === 'me' ? me_1[\"default\"] : pokemon_1[\"default\"];\r\n                    infoRenderer(info, cache[indexInCacheArray].data);\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); });\r\n    tabList.appendChild(li);\r\n};\r\nfor (var _i = 0, cache_1 = cache; _i < cache_1.length; _i++) {\r\n    var _a = cache_1[_i], title = _a.title, key = _a.key;\r\n    _loop_1(title, key);\r\n}\r\napp.appendChild(tabList);\r\napp.appendChild(info);\r\nroot.appendChild(app);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/me.ts":
/*!*******************!*\
  !*** ./src/me.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar removeAllChilds_1 = __webpack_require__(/*! ./removeAllChilds */ \"./src/removeAllChilds.ts\");\r\nvar render = function (target, data) {\r\n    removeAllChilds_1[\"default\"](target);\r\n    var nameDiv = document.createElement('div');\r\n    nameDiv.innerHTML = \"\\u0424\\u0418\\u041E: \" + data.name;\r\n    var groupDiv = document.createElement('div');\r\n    groupDiv.innerHTML = \"\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430: \" + data.group;\r\n    target.append(nameDiv, groupDiv);\r\n};\r\nexports[\"default\"] = render;\r\n\n\n//# sourceURL=webpack:///./src/me.ts?");

/***/ }),

/***/ "./src/pokemon.ts":
/*!************************!*\
  !*** ./src/pokemon.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar removeAllChilds_1 = __webpack_require__(/*! ./removeAllChilds */ \"./src/removeAllChilds.ts\");\r\nvar pokemon = function (target, data) {\r\n    removeAllChilds_1[\"default\"](target);\r\n    console.log(data);\r\n    // Abilities\r\n    var abilities = document.createElement('div');\r\n    abilities.textContent = 'Abilities';\r\n    var abilitiesUl = document.createElement('ul');\r\n    abilities.appendChild(abilitiesUl);\r\n    data.abilities.forEach(function (ability) {\r\n        var abilityLi = document.createElement('li');\r\n        abilityLi.textContent = ability.ability.name + \" \" + (ability.is_hidden ? '(hidden)' : '');\r\n        abilitiesUl.appendChild(abilityLi);\r\n    });\r\n    target.appendChild(abilities);\r\n    // Base experience\r\n    var baseExperience = document.createElement('div');\r\n    baseExperience.textContent = \"Base experience: \" + data.base_experience;\r\n    target.appendChild(baseExperience);\r\n    // Species\r\n    var species = document.createElement('div');\r\n    species.textContent = \"Species: \" + data.species.name;\r\n    target.appendChild(species);\r\n    // Types\r\n    var types = document.createElement('div');\r\n    var typesUl = document.createElement('ul');\r\n    types.textContent = \"Types\";\r\n    types.appendChild(typesUl);\r\n    data.types.forEach(function (typeEntity) {\r\n        var typeLi = document.createElement('li');\r\n        typeLi.textContent = typeEntity.type.name + \" (\" + typeEntity.slot + \")\";\r\n        typesUl.appendChild(typeLi);\r\n    });\r\n    target.appendChild(types);\r\n};\r\nexports[\"default\"] = pokemon;\r\n\n\n//# sourceURL=webpack:///./src/pokemon.ts?");

/***/ }),

/***/ "./src/removeAllChilds.ts":
/*!********************************!*\
  !*** ./src/removeAllChilds.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports[\"default\"] = (function (target) {\r\n    target.querySelectorAll('*').forEach(function (child) {\r\n        child.remove();\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/removeAllChilds.ts?");

/***/ })

/******/ });