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

/***/ "./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js":
/*!***************************************************************!*\
  !*** ./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar vec2_1 = __importDefault(__webpack_require__(/*! ./vec2 */ \"./node_modules/@takahiro_sato/canvas2d/dist/vec2.js\"));\r\nexports.vec2 = vec2_1.default;\r\nvar canvas2d = /** @class */ (function () {\r\n    function canvas2d(canvasId) {\r\n        this.canvas = document.getElementById(canvasId);\r\n        var ctx = this.canvas.getContext(\"2d\");\r\n        if (ctx !== null) {\r\n            this.ctx = ctx;\r\n        }\r\n        else {\r\n            throw new Error(\"can't get 2d context.\");\r\n        }\r\n    }\r\n    Object.defineProperty(canvas2d.prototype, \"width\", {\r\n        get: function () {\r\n            return this.canvas.clientWidth;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(canvas2d.prototype, \"height\", {\r\n        get: function () {\r\n            return this.canvas.clientHeight;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    canvas2d.prototype.rotate = function (degree, callback, obj) {\r\n        var _this = this;\r\n        var _a = (function () {\r\n            if (obj !== undefined) {\r\n                return obj;\r\n            }\r\n            else {\r\n                return { x: 0, y: 0, w: _this.width, h: _this.height };\r\n            }\r\n        })(), x = _a.x, y = _a.y, w = _a.w, h = _a.h;\r\n        this.ctx.save();\r\n        this.ctx.beginPath();\r\n        this.ctx.translate(x + w / 2, y + h / 2);\r\n        this.ctx.rotate((degree * Math.PI) / 180);\r\n        callback();\r\n        this.ctx.restore();\r\n    };\r\n    canvas2d.prototype.fillBackground = function (color) {\r\n        this.ctx.fillStyle = color;\r\n        this.ctx.fillRect(0, 0, this.width, this.height);\r\n    };\r\n    canvas2d.prototype.fillRect = function (obj) {\r\n        var _this = this;\r\n        var cx = obj.cx, cy = obj.cy, w = obj.w, h = obj.h, color = obj.color, degree = obj.degree;\r\n        if (color) {\r\n            this.ctx.fillStyle = color;\r\n        }\r\n        if (degree === undefined) {\r\n            this.ctx.fillRect(cx - w / 2, cy - h / 2, w, h);\r\n        }\r\n        else {\r\n            this.rotate(degree, function () {\r\n                _this.ctx.fillRect(-w / 2, -h / 2, w, h);\r\n            }, {\r\n                x: cx - w / 2,\r\n                y: cy - h / 2,\r\n                w: w,\r\n                h: h\r\n            });\r\n        }\r\n    };\r\n    canvas2d.prototype.fillCircle = function (obj) {\r\n        var cx = obj.cx, cy = obj.cy, r = obj.r, color = obj.color;\r\n        this.ctx.beginPath();\r\n        this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);\r\n        if (color !== undefined) {\r\n            this.ctx.fillStyle = color;\r\n        }\r\n        this.ctx.fill();\r\n    };\r\n    canvas2d.prototype.drawLines = function (points, obj) {\r\n        var _this = this;\r\n        var _a, _b, _c, _d;\r\n        var _e = (function () {\r\n            if (obj !== undefined) {\r\n                return obj;\r\n            }\r\n            else {\r\n                return {};\r\n            }\r\n        })(), lineWidth = _e.lineWidth, color = _e.color, degree = _e.degree, center = _e.center;\r\n        var _center = new vec2_1.default((_b = (_a = center) === null || _a === void 0 ? void 0 : _a.x, (_b !== null && _b !== void 0 ? _b : 0)), (_d = (_c = center) === null || _c === void 0 ? void 0 : _c.y, (_d !== null && _d !== void 0 ? _d : 0)));\r\n        var pos = points.map(function (p) {\r\n            if (degree) {\r\n                return new vec2_1.default(-(_center.x - p.x), -(_center.y - p.y));\r\n            }\r\n            else {\r\n                return new vec2_1.default(p.x, p.y);\r\n            }\r\n        });\r\n        if (lineWidth !== undefined) {\r\n            this.ctx.lineWidth = lineWidth;\r\n        }\r\n        var _draw = function () {\r\n            _this.ctx.beginPath();\r\n            if (color !== undefined) {\r\n                _this.ctx.strokeStyle = color;\r\n            }\r\n            _this.ctx.moveTo(pos[0].x, pos[0].y);\r\n            pos.shift();\r\n            pos.map(function (p) {\r\n                _this.ctx.lineTo(p.x, p.y);\r\n            });\r\n            _this.ctx.stroke();\r\n        };\r\n        if (degree !== undefined) {\r\n            this.rotate(degree, _draw, {\r\n                x: _center.x,\r\n                y: _center.y,\r\n                w: 0,\r\n                h: 0,\r\n            });\r\n        }\r\n        else {\r\n            _draw();\r\n        }\r\n    };\r\n    canvas2d.prototype.drawText = function (text, x, y, color, size, font) {\r\n        if (color === void 0) { color = \"#ffffff\"; }\r\n        if (size === void 0) { size = 10; }\r\n        if (font === void 0) { font = \"'ＭＳ　Ｐゴシック'\"; }\r\n        this.ctx.font = size + \"pt \" + font;\r\n        this.ctx.fillStyle = color;\r\n        this.ctx.textAlign = \"left\";\r\n        this.ctx.textBaseline = \"top\";\r\n        this.ctx.fillText(text, x, y);\r\n    };\r\n    canvas2d.prototype.clear = function () {\r\n        this.ctx.clearRect(0, 0, this.width, this.height);\r\n    };\r\n    return canvas2d;\r\n}());\r\nexports.canvas2d = canvas2d;\r\n\n\n//# sourceURL=webpack:///./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js?");

/***/ }),

/***/ "./node_modules/@takahiro_sato/canvas2d/dist/vec2.js":
/*!***********************************************************!*\
  !*** ./node_modules/@takahiro_sato/canvas2d/dist/vec2.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar vec2 = /** @class */ (function () {\r\n    function vec2(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Object.defineProperty(vec2.prototype, \"length\", {\r\n        get: function () {\r\n            return Math.sqrt(this.x * this.x + this.y * this.y);\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    vec2.prototype.add = function (x, y) {\r\n        this.x += x;\r\n        this.y += y;\r\n        return this;\r\n    };\r\n    vec2.prototype.addv = function (v) {\r\n        this.x += v.x;\r\n        this.y += v.y;\r\n        return this;\r\n    };\r\n    vec2.prototype.rotate = function (degree) {\r\n        var _a;\r\n        var rad = (Math.PI * degree) / 180;\r\n        _a = [\r\n            this.x * Math.cos(rad) - this.y * Math.sin(rad),\r\n            this.x * Math.sin(rad) + this.y * Math.cos(rad)\r\n        ], this.x = _a[0], this.y = _a[1];\r\n        return this;\r\n    };\r\n    return vec2;\r\n}());\r\nexports.default = vec2;\r\n\n\n//# sourceURL=webpack:///./node_modules/@takahiro_sato/canvas2d/dist/vec2.js?");

/***/ }),

/***/ "./src/bullet.ts":
/*!***********************!*\
  !*** ./src/bullet.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar shape_1 = __webpack_require__(/*! ./shape */ \"./src/shape/index.ts\");\r\nvar canvas2d_1 = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\r\nvar bullet = /** @class */ (function (_super) {\r\n    __extends(bullet, _super);\r\n    function bullet(x, y, r, mx, my, color) {\r\n        var _this = _super.call(this, x, y, r, color) || this;\r\n        _this._mv = new canvas2d_1.vec2(mx, my);\r\n        bullet._bullets.push(_this);\r\n        return _this;\r\n    }\r\n    bullet.draw = function () {\r\n        bullet._bullets.map(function (b) {\r\n            b.draw();\r\n        });\r\n    };\r\n    bullet._bullets = [];\r\n    return bullet;\r\n}(shape_1.circle));\r\nexports.default = bullet;\r\n\n\n//# sourceURL=webpack:///./src/bullet.ts?");

/***/ }),

/***/ "./src/gameMain.ts":
/*!*************************!*\
  !*** ./src/gameMain.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar player_1 = __importDefault(__webpack_require__(/*! ./player */ \"./src/player.ts\"));\r\nvar bullet_1 = __importDefault(__webpack_require__(/*! ./bullet */ \"./src/bullet.ts\"));\r\nvar util_1 = __webpack_require__(/*! ./util */ \"./src/util/index.ts\");\r\nvar gameMain = /** @class */ (function () {\r\n    function gameMain() {\r\n        var _this = this;\r\n        this._socket = new WebSocket(\"ws://localhost:3012\");\r\n        this._socket.addEventListener(\"open\", function (e) {\r\n            console.log(\"connect\");\r\n        });\r\n        this._socket.addEventListener(\"message\", function (e) {\r\n            var _data = JSON.parse(e.data);\r\n            var _users = _data.users;\r\n            var _bullets = _data.bullets;\r\n            bullet_1.default._bullets = [];\r\n            _bullets.map(function (b) {\r\n                bullet_1.default._bullets.push(new bullet_1.default(b.x, b.y, 5, 0, 0, \"#ff0000\"));\r\n            });\r\n            var _loop_1 = function (key) {\r\n                if (!_users.some(function (d) { return d.id === key; })) {\r\n                    delete _this._players[key];\r\n                }\r\n            };\r\n            for (var _i = 0, _a = Object.keys(_this._players); _i < _a.length; _i++) {\r\n                var key = _a[_i];\r\n                _loop_1(key);\r\n            }\r\n            _users.map(function (data) {\r\n                if (_this._players[data.id]) {\r\n                    var p = _this._players[data.id];\r\n                    p.x = data.x;\r\n                    p.y = data.y;\r\n                    p.degree = data.degree;\r\n                }\r\n                else {\r\n                    _this._players[data.id] = new player_1.default(data.x, data.y, 50, 50, \"#0000ff\");\r\n                    _this._players[data.id].degree = data.degree;\r\n                }\r\n            });\r\n        });\r\n        this._players = {};\r\n        this._setKeyDownListener();\r\n    }\r\n    gameMain.prototype._setKeyDownListener = function () {\r\n        var _this = this;\r\n        util_1.event.keyDownEventListeners.push({\r\n            key: util_1.keyCode.left,\r\n            listener: function (e) {\r\n                _this._socket.send(JSON.stringify({ left: 1 }));\r\n            }\r\n        });\r\n        util_1.event.keyDownEventListeners.push({\r\n            key: util_1.keyCode.up,\r\n            listener: function (e) {\r\n                _this._socket.send(JSON.stringify({ up: 1 }));\r\n            }\r\n        });\r\n        util_1.event.keyDownEventListeners.push({\r\n            key: util_1.keyCode.right,\r\n            listener: function (e) {\r\n                _this._socket.send(JSON.stringify({ right: 1 }));\r\n            }\r\n        });\r\n        util_1.event.keyDownEventListeners.push({\r\n            key: util_1.keyCode.down,\r\n            listener: function (e) {\r\n                _this._socket.send(JSON.stringify({ down: 1 }));\r\n            }\r\n        });\r\n        util_1.event.keyDownEventListeners.push({\r\n            key: util_1.keyCode.space,\r\n            listener: function (e) {\r\n                _this._socket.send(JSON.stringify({ shot: 1 }));\r\n            }\r\n        });\r\n    };\r\n    gameMain.prototype.draw = function () {\r\n        for (var _i = 0, _a = Object.keys(this._players); _i < _a.length; _i++) {\r\n            var key = _a[_i];\r\n            this._players[key].draw();\r\n        }\r\n        bullet_1.default.draw();\r\n    };\r\n    return gameMain;\r\n}());\r\nexports.default = gameMain;\r\n\n\n//# sourceURL=webpack:///./src/gameMain.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar c2d_1 = __webpack_require__(/*! ./util/c2d */ \"./src/util/c2d.ts\");\r\nvar gameMain_1 = __importDefault(__webpack_require__(/*! ./gameMain */ \"./src/gameMain.ts\"));\r\nvar game = new gameMain_1.default();\r\nvar animation = function () {\r\n    c2d_1.c2d.clear();\r\n    game.draw();\r\n    requestAnimationFrame(animation);\r\n};\r\nrequestAnimationFrame(animation);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar shape_1 = __webpack_require__(/*! ./shape */ \"./src/shape/index.ts\");\r\nvar canvas2d_1 = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\r\nvar shape_2 = __webpack_require__(/*! ./shape */ \"./src/shape/index.ts\");\r\nvar speed = 5;\r\nvar player = /** @class */ (function (_super) {\r\n    __extends(player, _super);\r\n    function player(x, y, w, h, color) {\r\n        var _this = _super.call(this, x, y, w, h, color) || this;\r\n        _this._head = new shape_1.rect(_this.x, _this.y - 40, 30, 30, color);\r\n        _this._degree = 0;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(player.prototype, \"degree\", {\r\n        set: function (degree) {\r\n            this._degree = degree;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    player.prototype._set_head = function () {\r\n        var v = new canvas2d_1.vec2(0, -(this.height + this._head.height) / 2).rotate(this._degree);\r\n        this._head.x = this.x + v.x;\r\n        this._head.y = this.y + v.y;\r\n    };\r\n    player.prototype.draw = function () {\r\n        this._set_head();\r\n        _super.prototype.draw.call(this, this._degree);\r\n        this._head.draw(this._degree);\r\n        new shape_2.circle(this.x, this.y, 5, \"#ff0000\").draw();\r\n        new shape_2.circle(this._head.x, this._head.y, 5, \"#ff0000\").draw();\r\n        new shape_2.line([new canvas2d_1.vec2(this.x, this.y), new canvas2d_1.vec2(this._head.x, this._head.y)], 2, \"#ff0000\").draw();\r\n    };\r\n    return player;\r\n}(shape_1.rect));\r\nexports.default = player;\r\n\n\n//# sourceURL=webpack:///./src/player.ts?");

/***/ }),

/***/ "./src/shape/circle.ts":
/*!*****************************!*\
  !*** ./src/shape/circle.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar c2d_1 = __webpack_require__(/*! ../util/c2d */ \"./src/util/c2d.ts\");\r\nvar drawpoint_1 = __importDefault(__webpack_require__(/*! ../super/drawpoint */ \"./src/super/drawpoint.ts\"));\r\nvar circle = /** @class */ (function (_super) {\r\n    __extends(circle, _super);\r\n    function circle(x, y, radius, color) {\r\n        var _this = _super.call(this, x, y) || this;\r\n        _this._radius = radius;\r\n        _this.color = color;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(circle.prototype, \"radius\", {\r\n        get: function () {\r\n            return this._radius;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    circle.prototype.draw = function () {\r\n        c2d_1.c2d.fillCircle({\r\n            cx: this.x,\r\n            cy: this.y,\r\n            r: this.radius,\r\n            color: this.color\r\n        });\r\n    };\r\n    return circle;\r\n}(drawpoint_1.default));\r\nexports.default = circle;\r\n\n\n//# sourceURL=webpack:///./src/shape/circle.ts?");

/***/ }),

/***/ "./src/shape/index.ts":
/*!****************************!*\
  !*** ./src/shape/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar circle_1 = __importDefault(__webpack_require__(/*! ./circle */ \"./src/shape/circle.ts\"));\r\nexports.circle = circle_1.default;\r\nvar rect_1 = __importDefault(__webpack_require__(/*! ./rect */ \"./src/shape/rect.ts\"));\r\nexports.rect = rect_1.default;\r\nvar line_1 = __importDefault(__webpack_require__(/*! ./line */ \"./src/shape/line.ts\"));\r\nexports.line = line_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shape/index.ts?");

/***/ }),

/***/ "./src/shape/line.ts":
/*!***************************!*\
  !*** ./src/shape/line.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar c2d_1 = __webpack_require__(/*! ../util/c2d */ \"./src/util/c2d.ts\");\r\nvar line = /** @class */ (function () {\r\n    function line(points, width, color) {\r\n        this.points = points.map(function (p) { return p; });\r\n        this.width = width;\r\n        this.color = color;\r\n    }\r\n    line.prototype.add = function (v) {\r\n        this.points.push(v);\r\n    };\r\n    line.prototype.draw = function () {\r\n        c2d_1.c2d.drawLines(this.points, {\r\n            lineWidth: this.width,\r\n            color: this.color\r\n        });\r\n    };\r\n    return line;\r\n}());\r\nexports.default = line;\r\n\n\n//# sourceURL=webpack:///./src/shape/line.ts?");

/***/ }),

/***/ "./src/shape/rect.ts":
/*!***************************!*\
  !*** ./src/shape/rect.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar c2d_1 = __webpack_require__(/*! ../util/c2d */ \"./src/util/c2d.ts\");\r\nvar drawpoint_1 = __importDefault(__webpack_require__(/*! ../super/drawpoint */ \"./src/super/drawpoint.ts\"));\r\nvar rect = /** @class */ (function (_super) {\r\n    __extends(rect, _super);\r\n    function rect(x, y, w, h, color) {\r\n        var _this = _super.call(this, x, y) || this;\r\n        _this._width = w;\r\n        _this._height = h;\r\n        _this.color = color;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(rect.prototype, \"width\", {\r\n        get: function () {\r\n            return this._width;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(rect.prototype, \"height\", {\r\n        get: function () {\r\n            return this._height;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    rect.prototype.draw = function (degree) {\r\n        c2d_1.c2d.fillRect({\r\n            cx: this.x,\r\n            cy: this.y,\r\n            w: this._width,\r\n            h: this._height,\r\n            color: this.color,\r\n            degree: degree\r\n        });\r\n    };\r\n    return rect;\r\n}(drawpoint_1.default));\r\nexports.default = rect;\r\n\n\n//# sourceURL=webpack:///./src/shape/rect.ts?");

/***/ }),

/***/ "./src/super/drawpoint.ts":
/*!********************************!*\
  !*** ./src/super/drawpoint.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar canvas2d_1 = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\r\nvar drawpoint = /** @class */ (function (_super) {\r\n    __extends(drawpoint, _super);\r\n    function drawpoint(x, y) {\r\n        return _super.call(this, x, y) || this;\r\n    }\r\n    return drawpoint;\r\n}(canvas2d_1.vec2));\r\nexports.default = drawpoint;\r\n\n\n//# sourceURL=webpack:///./src/super/drawpoint.ts?");

/***/ }),

/***/ "./src/util/c2d.ts":
/*!*************************!*\
  !*** ./src/util/c2d.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar canvas2d_1 = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\r\nexports.canvasId = \"canvas2d\";\r\nexports.c2d = new canvas2d_1.canvas2d(exports.canvasId);\r\n\n\n//# sourceURL=webpack:///./src/util/c2d.ts?");

/***/ }),

/***/ "./src/util/event.ts":
/*!***************************!*\
  !*** ./src/util/event.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar c2d_1 = __webpack_require__(/*! ./c2d */ \"./src/util/c2d.ts\");\r\nvar keyCode;\r\n(function (keyCode) {\r\n    keyCode[keyCode[\"space\"] = 32] = \"space\";\r\n    keyCode[keyCode[\"left\"] = 37] = \"left\";\r\n    keyCode[keyCode[\"up\"] = 38] = \"up\";\r\n    keyCode[keyCode[\"right\"] = 39] = \"right\";\r\n    keyCode[keyCode[\"down\"] = 40] = \"down\";\r\n    keyCode[keyCode[\"F12\"] = 123] = \"F12\";\r\n})(keyCode = exports.keyCode || (exports.keyCode = {}));\r\nvar _event = /** @class */ (function () {\r\n    function _event() {\r\n        var _this = this;\r\n        this.keyDownEventListeners = [];\r\n        window.addEventListener(\"keydown\", function (e) {\r\n            _this.keyDownEventListeners\r\n                .filter(function (l) { return l.key === e.keyCode; })\r\n                .map(function (l) {\r\n                l.listener(e);\r\n            });\r\n            if (e.keyCode !== keyCode.F12)\r\n                e.preventDefault();\r\n        });\r\n    }\r\n    _event.prototype.addMouseDownEvent = function (callback) {\r\n        var _a;\r\n        (_a = document.getElementById(c2d_1.canvasId)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mousedown\", callback);\r\n    };\r\n    _event.prototype.addMouseMoveEvent = function (callback) {\r\n        var _a;\r\n        (_a = document.getElementById(c2d_1.canvasId)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mousemove\", callback);\r\n    };\r\n    _event.prototype.addMouseUpEvent = function (callBack) {\r\n        var _a;\r\n        (_a = document.getElementById(c2d_1.canvasId)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mouseup\", callBack);\r\n    };\r\n    return _event;\r\n}());\r\nexports.event = new _event();\r\n\n\n//# sourceURL=webpack:///./src/util/event.ts?");

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar c2d_1 = __webpack_require__(/*! ./c2d */ \"./src/util/c2d.ts\");\r\nexports.c2d = c2d_1.c2d;\r\nvar event_1 = __webpack_require__(/*! ./event */ \"./src/util/event.ts\");\r\nexports.event = event_1.event;\r\nexports.keyCode = event_1.keyCode;\r\n\n\n//# sourceURL=webpack:///./src/util/index.ts?");

/***/ })

/******/ });