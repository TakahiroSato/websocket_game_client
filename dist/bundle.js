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
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar shape_1 = __webpack_require__(/*! ./shape */ \"./src/shape/index.ts\");\nvar canvas2d_1 = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\nvar bullet = /** @class */ (function (_super) {\n    __extends(bullet, _super);\n    function bullet(x, y, r, mx, my, color) {\n        var _this = _super.call(this, x, y, r, color) || this;\n        _this._mv = new canvas2d_1.vec2(mx, my);\n        bullet._bullets.push(_this);\n        return _this;\n    }\n    bullet.draw = function () {\n        bullet._bullets.map(function (b) {\n            b.draw();\n        });\n    };\n    bullet._bullets = [];\n    return bullet;\n}(shape_1.circle));\nexports.default = bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.ts?");

/***/ }),

/***/ "./src/gameMain.ts":
/*!*************************!*\
  !*** ./src/gameMain.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar player_1 = __importDefault(__webpack_require__(/*! ./player */ \"./src/player.ts\"));\nvar bullet_1 = __importDefault(__webpack_require__(/*! ./bullet */ \"./src/bullet.ts\"));\nvar util_1 = __webpack_require__(/*! ./util */ \"./src/util/index.ts\");\nvar gameMain = /** @class */ (function () {\n    function gameMain() {\n        var _this = this;\n        this._socket = new WebSocket(\"ws://\" + \"192.168.3.11\" + \":\" + \"3012\");\n        this._socket.addEventListener(\"open\", function (e) {\n            console.log(\"connect\");\n        });\n        this._socket.addEventListener(\"message\", function (e) {\n            var _data = JSON.parse(e.data);\n            var _users = _data.users;\n            var _bullets = _data.bullets;\n            bullet_1.default._bullets = [];\n            _bullets.map(function (b) {\n                bullet_1.default._bullets.push(new bullet_1.default(b.x, b.y, 5, 0, 0, \"#ff0000\"));\n            });\n            var _loop_1 = function (key) {\n                if (!_users.some(function (d) { return d.id === key; })) {\n                    delete _this._players[key];\n                }\n            };\n            for (var _i = 0, _a = Object.keys(_this._players); _i < _a.length; _i++) {\n                var key = _a[_i];\n                _loop_1(key);\n            }\n            _users.map(function (data) {\n                if (_this._players[data.id]) {\n                    var p = _this._players[data.id];\n                    p.x = data.x;\n                    p.y = data.y;\n                    p.degree = data.degree;\n                    p.life = data.life;\n                }\n                else {\n                    _this._players[data.id] = new player_1.default(data.x, data.y, 50, 50, data.life, data.color);\n                    _this._players[data.id].degree = data.degree;\n                }\n            });\n        });\n        this._players = {};\n        this._setKeyDownListener();\n    }\n    gameMain.prototype._setKeyDownListener = function () {\n        var _this = this;\n        util_1.event.keyDownEventListeners.push({\n            key: util_1.keyCode.left,\n            listener: function (e) {\n                _this._socket.send(JSON.stringify({ left: 1 }));\n            }\n        });\n        util_1.event.keyDownEventListeners.push({\n            key: util_1.keyCode.up,\n            listener: function (e) {\n                _this._socket.send(JSON.stringify({ up: 1 }));\n            }\n        });\n        util_1.event.keyDownEventListeners.push({\n            key: util_1.keyCode.right,\n            listener: function (e) {\n                _this._socket.send(JSON.stringify({ right: 1 }));\n            }\n        });\n        util_1.event.keyDownEventListeners.push({\n            key: util_1.keyCode.down,\n            listener: function (e) {\n                _this._socket.send(JSON.stringify({ down: 1 }));\n            }\n        });\n        util_1.event.keyDownEventListeners.push({\n            key: util_1.keyCode.space,\n            listener: function (e) {\n                _this._socket.send(JSON.stringify({ shot: 1 }));\n            }\n        });\n    };\n    gameMain.prototype.draw = function () {\n        for (var _i = 0, _a = Object.keys(this._players); _i < _a.length; _i++) {\n            var key = _a[_i];\n            this._players[key].draw();\n        }\n        bullet_1.default.draw();\n    };\n    return gameMain;\n}());\nexports.default = gameMain;\n\n\n//# sourceURL=webpack:///./src/gameMain.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar c2d_1 = __webpack_require__(/*! ./util/c2d */ \"./src/util/c2d.ts\");\nvar gameMain_1 = __importDefault(__webpack_require__(/*! ./gameMain */ \"./src/gameMain.ts\"));\nvar game = new gameMain_1.default();\nvar animation = function () {\n    c2d_1.c2d.clear();\n    game.draw();\n    requestAnimationFrame(animation);\n};\nrequestAnimationFrame(animation);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar shape_1 = __webpack_require__(/*! ./shape */ \"./src/shape/index.ts\");\nvar canvas2d_1 = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./src/util/index.ts\");\nvar speed = 5;\nvar player = /** @class */ (function (_super) {\n    __extends(player, _super);\n    function player(x, y, w, h, life, color) {\n        var _this = _super.call(this, x, y, w, h, color) || this;\n        _this._head = new shape_1.rect(_this.x, _this.y - 40, 30, 30, color);\n        _this._degree = 0;\n        _this.life = life;\n        return _this;\n    }\n    Object.defineProperty(player.prototype, \"degree\", {\n        set: function (degree) {\n            this._degree = degree;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    player.prototype._set_head = function () {\n        var v = new canvas2d_1.vec2(0, -(this.height + this._head.height) / 2).rotate(this._degree);\n        this._head.x = this.x + v.x;\n        this._head.y = this.y + v.y;\n    };\n    player.prototype.draw = function () {\n        this._set_head();\n        _super.prototype.draw.call(this, this._degree);\n        this._head.draw(this._degree);\n        // new circle(this.x, this.y, 5, \"#ff0000\").draw();\n        // new circle(this._head.x, this._head.y, 5, \"#ff0000\").draw();\n        // new line(\n        //   [new vec2(this.x, this.y), new vec2(this._head.x, this._head.y)],\n        //   2,\n        //   \"#ff0000\"\n        // ).draw();\n        util_1.c2d.drawText(this.life.toString(), this.x - 10, this.y - 7, \"#ffffff\", 10);\n    };\n    return player;\n}(shape_1.rect));\nexports.default = player;\n\n\n//# sourceURL=webpack:///./src/player.ts?");

/***/ }),

/***/ "./src/shape/circle.ts":
/*!*****************************!*\
  !*** ./src/shape/circle.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar c2d_1 = __webpack_require__(/*! ../util/c2d */ \"./src/util/c2d.ts\");\nvar drawpoint_1 = __importDefault(__webpack_require__(/*! ../super/drawpoint */ \"./src/super/drawpoint.ts\"));\nvar circle = /** @class */ (function (_super) {\n    __extends(circle, _super);\n    function circle(x, y, radius, color) {\n        var _this = _super.call(this, x, y) || this;\n        _this._radius = radius;\n        _this.color = color;\n        return _this;\n    }\n    Object.defineProperty(circle.prototype, \"radius\", {\n        get: function () {\n            return this._radius;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    circle.prototype.draw = function () {\n        c2d_1.c2d.fillCircle({\n            cx: this.x,\n            cy: this.y,\n            r: this.radius,\n            color: this.color\n        });\n    };\n    return circle;\n}(drawpoint_1.default));\nexports.default = circle;\n\n\n//# sourceURL=webpack:///./src/shape/circle.ts?");

/***/ }),

/***/ "./src/shape/index.ts":
/*!****************************!*\
  !*** ./src/shape/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar circle_1 = __importDefault(__webpack_require__(/*! ./circle */ \"./src/shape/circle.ts\"));\nexports.circle = circle_1.default;\nvar rect_1 = __importDefault(__webpack_require__(/*! ./rect */ \"./src/shape/rect.ts\"));\nexports.rect = rect_1.default;\nvar line_1 = __importDefault(__webpack_require__(/*! ./line */ \"./src/shape/line.ts\"));\nexports.line = line_1.default;\n\n\n//# sourceURL=webpack:///./src/shape/index.ts?");

/***/ }),

/***/ "./src/shape/line.ts":
/*!***************************!*\
  !*** ./src/shape/line.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar c2d_1 = __webpack_require__(/*! ../util/c2d */ \"./src/util/c2d.ts\");\nvar line = /** @class */ (function () {\n    function line(points, width, color) {\n        this.points = points.map(function (p) { return p; });\n        this.width = width;\n        this.color = color;\n    }\n    line.prototype.add = function (v) {\n        this.points.push(v);\n    };\n    line.prototype.draw = function () {\n        c2d_1.c2d.drawLines(this.points, {\n            lineWidth: this.width,\n            color: this.color\n        });\n    };\n    return line;\n}());\nexports.default = line;\n\n\n//# sourceURL=webpack:///./src/shape/line.ts?");

/***/ }),

/***/ "./src/shape/rect.ts":
/*!***************************!*\
  !*** ./src/shape/rect.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar c2d_1 = __webpack_require__(/*! ../util/c2d */ \"./src/util/c2d.ts\");\nvar drawpoint_1 = __importDefault(__webpack_require__(/*! ../super/drawpoint */ \"./src/super/drawpoint.ts\"));\nvar rect = /** @class */ (function (_super) {\n    __extends(rect, _super);\n    function rect(x, y, w, h, color) {\n        var _this = _super.call(this, x, y) || this;\n        _this._width = w;\n        _this._height = h;\n        _this.color = color;\n        return _this;\n    }\n    Object.defineProperty(rect.prototype, \"width\", {\n        get: function () {\n            return this._width;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(rect.prototype, \"height\", {\n        get: function () {\n            return this._height;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    rect.prototype.draw = function (degree) {\n        c2d_1.c2d.fillRect({\n            cx: this.x,\n            cy: this.y,\n            w: this._width,\n            h: this._height,\n            color: this.color,\n            degree: degree\n        });\n    };\n    return rect;\n}(drawpoint_1.default));\nexports.default = rect;\n\n\n//# sourceURL=webpack:///./src/shape/rect.ts?");

/***/ }),

/***/ "./src/super/drawpoint.ts":
/*!********************************!*\
  !*** ./src/super/drawpoint.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar canvas2d_1 = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\nvar drawpoint = /** @class */ (function (_super) {\n    __extends(drawpoint, _super);\n    function drawpoint(x, y) {\n        return _super.call(this, x, y) || this;\n    }\n    return drawpoint;\n}(canvas2d_1.vec2));\nexports.default = drawpoint;\n\n\n//# sourceURL=webpack:///./src/super/drawpoint.ts?");

/***/ }),

/***/ "./src/util/c2d.ts":
/*!*************************!*\
  !*** ./src/util/c2d.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar canvas2d_1 = __webpack_require__(/*! @takahiro_sato/canvas2d */ \"./node_modules/@takahiro_sato/canvas2d/dist/canvas2d.js\");\nexports.canvasId = \"canvas2d\";\nexports.c2d = new canvas2d_1.canvas2d(exports.canvasId);\n\n\n//# sourceURL=webpack:///./src/util/c2d.ts?");

/***/ }),

/***/ "./src/util/event.ts":
/*!***************************!*\
  !*** ./src/util/event.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar c2d_1 = __webpack_require__(/*! ./c2d */ \"./src/util/c2d.ts\");\nvar keyCode;\n(function (keyCode) {\n    keyCode[keyCode[\"space\"] = 32] = \"space\";\n    keyCode[keyCode[\"left\"] = 37] = \"left\";\n    keyCode[keyCode[\"up\"] = 38] = \"up\";\n    keyCode[keyCode[\"right\"] = 39] = \"right\";\n    keyCode[keyCode[\"down\"] = 40] = \"down\";\n    keyCode[keyCode[\"F12\"] = 123] = \"F12\";\n})(keyCode = exports.keyCode || (exports.keyCode = {}));\nvar _event = /** @class */ (function () {\n    function _event() {\n        var _this = this;\n        this.keyDownEventListeners = [];\n        window.addEventListener(\"keydown\", function (e) {\n            _this.keyDownEventListeners\n                .filter(function (l) { return l.key === e.keyCode; })\n                .map(function (l) {\n                l.listener(e);\n            });\n            if (e.keyCode !== keyCode.F12)\n                e.preventDefault();\n        });\n    }\n    _event.prototype.addMouseDownEvent = function (callback) {\n        var _a;\n        (_a = document.getElementById(c2d_1.canvasId)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mousedown\", callback);\n    };\n    _event.prototype.addMouseMoveEvent = function (callback) {\n        var _a;\n        (_a = document.getElementById(c2d_1.canvasId)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mousemove\", callback);\n    };\n    _event.prototype.addMouseUpEvent = function (callBack) {\n        var _a;\n        (_a = document.getElementById(c2d_1.canvasId)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"mouseup\", callBack);\n    };\n    return _event;\n}());\nexports.event = new _event();\n\n\n//# sourceURL=webpack:///./src/util/event.ts?");

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar c2d_1 = __webpack_require__(/*! ./c2d */ \"./src/util/c2d.ts\");\nexports.c2d = c2d_1.c2d;\nvar event_1 = __webpack_require__(/*! ./event */ \"./src/util/event.ts\");\nexports.event = event_1.event;\nexports.keyCode = event_1.keyCode;\n\n\n//# sourceURL=webpack:///./src/util/index.ts?");

/***/ })

/******/ });