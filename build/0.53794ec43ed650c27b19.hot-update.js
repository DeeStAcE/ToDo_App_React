"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewOperation: () => (/* binding */ addNewOperation),
/* harmony export */   deleteOperation: () => (/* binding */ deleteOperation),
/* harmony export */   getOperations: () => (/* binding */ getOperations),
/* harmony export */   updateOperation: () => (/* binding */ updateOperation)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
var getOperations = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, successCallback) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks/").concat(id, "/operations"), {
            headers: {
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
            }
          });
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          if (!(data.error || typeof successCallback !== "function")) {
            _context.next = 9;
            break;
          }
          throw new Error("Błąd!");
        case 9:
          successCallback(data.data);
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function getOperations(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Add new operation
 */
var addNewOperation = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, operation, successCallback) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks/").concat(id, "/operations"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
            },
            body: JSON.stringify(operation)
          });
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          if (!(data.error || typeof successCallback !== "function")) {
            _context2.next = 9;
            break;
          }
          throw new Error("Błąd!");
        case 9:
          successCallback(data.data);
          _context2.next = 15;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function addNewOperation(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Update operation
 */
var updateOperation = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id, operation, successCallback) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/operations/").concat(id), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
            },
            body: JSON.stringify(operation)
          });
        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return response.json();
        case 6:
          data = _context3.sent;
          if (!(data.error || typeof successCallback !== "function")) {
            _context3.next = 9;
            break;
          }
          throw new Error("Błąd!");
        case 9:
          successCallback(data.data);
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function updateOperation(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Delete operation
 */
var deleteOperation = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id, operation, successCallback) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/operations/").concat(id), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
            },
            body: JSON.stringify(operation)
          });
        case 3:
          response = _context4.sent;
          _context4.next = 6;
          return response.json();
        case 6:
          data = _context4.sent;
          if (!(data.error || typeof successCallback !== "function")) {
            _context4.next = 9;
            break;
          }
          throw new Error("Błąd!");
        case 9:
          successCallback(data.data);
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function deleteOperation(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Operation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// TODO...

function Operation(_ref) {
  var operation = _ref.operation;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    addTimeBoolean = _useState2[0],
    setAddTimeBoolean = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    newTimeSpent = _useState4[0],
    setNewTimeSpent = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(operation.timeSpent),
    _useState6 = _slicedToArray(_useState5, 2),
    timeSpentState = _useState6[0],
    setTimeSpentState = _useState6[1];
  var handleAddTime = function handleAddTime(e) {
    e.preventDefault();
    var updatedOperation = _objectSpread(_objectSpread({}, operation), {}, {
      timeSpent: timeSpentState + newTimeSpent
    });
    console.log(updatedOperation);
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_1__.updateOperation)(operation.id, updatedOperation, function (data) {
      // console.log(data)
      setAddTimeBoolean(false);
      setTimeSpentState(data.timeSpent);
      setNewTimeSpent(0);
    });
  };
  var handleXButton = function handleXButton(e) {
    e.preventDefault();
    setAddTimeBoolean(false);
    setNewTimeSpent(0);
  };
  var onRemoveOperation = function onRemoveOperation(e) {
    e.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, operation.description, timeSpentState > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, timeSpentState >= 60 && "".concat(Math.floor(timeSpentState / 60), "h"), " ", timeSpentState - Math.floor(timeSpentState / 60) * 60, "min")), addTimeBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    style: {
      width: '12rem'
    },
    value: newTimeSpent,
    onChange: function onChange(e) {
      return setNewTimeSpent(parseInt(e.target.value));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success",
    onClick: handleAddTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-dark",
    onClick: handleXButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false"
  }))))), !addTimeBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success btn-sm mr-2",
    onClick: function onClick() {
      return setAddTimeBoolean(!addTimeBoolean);
    }
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-clock ml-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm",
    onClick: onRemoveOperation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }))));
}

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Operations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);


function Operations(props) {
  var updateOperations = function updateOperations(e) {
    e.preventDefault();
    var elements = e.currentTarget.elements;
    // console.log(elements)

    props.updateOperations({
      description: elements[0].value,
      timeSpent: 0,
      task: props.task
    });
    elements[0].value = "";
  };
  var onRemoveOperation = function onRemoveOperation() {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.form === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: updateOperations
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Operation description"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info"
  }, "Add", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, props.operations && props.operations.map(function (operation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: operation.id,
      operation: operation,
      onRemoveOpration: onRemoveOperation
    });
  })));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2f1638e0d1c8b77d3974")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUEsRUFBUyxDQUVoQyxDQUFDO0VBRUQsb0JBQ0l0QiwwREFBQSxDQUFBQSx1REFBQSxRQUVRb0MsS0FBSyxDQUFDTSxJQUFJLEtBQUssSUFBSSxpQkFDZjFDLDBEQUFBO0lBQUt3QixTQUFTLEVBQUM7RUFBVyxnQkFDdEJ4QiwwREFBQTtJQUFNMkMsUUFBUSxFQUFFTjtFQUFpQixnQkFDN0JyQywwREFBQTtJQUFLd0IsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCeEIsMERBQUE7SUFBTzNJLElBQUksRUFBQyxNQUFNO0lBQ1htSyxTQUFTLEVBQUMsY0FBYztJQUN4QkksV0FBVyxFQUFDO0VBQXVCLENBQUMsQ0FBQyxlQUU1QzVCLDBEQUFBO0lBQUt3QixTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CeEIsMERBQUE7SUFBUXdCLFNBQVMsRUFBQztFQUFjLEdBQUMsS0FFN0IsZUFBQXhCLDBEQUFBO0lBQUd3QixTQUFTLEVBQUM7RUFBeUIsQ0FBSSxDQUN0QyxDQUNQLENBQ0osQ0FDSCxDQUNMLENBQ1IsZUFHTHhCLDBEQUFBO0lBQUl3QixTQUFTLEVBQUM7RUFBNkIsR0FFbkNZLEtBQUssQ0FBQ1EsVUFBVSxJQUFJUixLQUFLLENBQUNRLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQUF0RSxTQUFTO0lBQUEsb0JBQUl5QiwwREFBQSxDQUFDRSxrREFBUztNQUFDOUQsR0FBRyxFQUFFbUMsU0FBUyxDQUFDbkIsRUFBRztNQUNsQm1CLFNBQVMsRUFBRUEsU0FBVTtNQUNyQnVFLGdCQUFnQixFQUFFeEI7SUFBa0IsQ0FBQyxDQUFDO0VBQUEsRUFFM0csQ0FDTixDQUFDO0FBRVg7Ozs7Ozs7O1VDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvYXBpL29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUElfS0VZLCBBUElfVVJMfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBGZXRjaCBhbGwgb3BlcmF0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gSUQgb2YgdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2Vzc0NhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCBzYXZlcyBpbmNvbWluZyBkYXRhXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPcGVyYXRpb25zID0gYXN5bmMgKGlkLCBzdWNjZXNzQ2FsbGJhY2spID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3Rhc2tzLyR7aWR9L29wZXJhdGlvbnNgLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogQVBJX0tFWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKGRhdGEuZXJyb3IgfHwgdHlwZW9mIHN1Y2Nlc3NDYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCxYLEhWQhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGRhdGEuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIEFkZCBuZXcgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBhZGROZXdPcGVyYXRpb24gPSBhc3luYyAoaWQsIG9wZXJhdGlvbiwgc3VjY2Vzc0NhbGxiYWNrKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS90YXNrcy8ke2lkfS9vcGVyYXRpb25zYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBBUElfS0VZLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wZXJhdGlvbilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAoZGF0YS5lcnJvciB8fCB0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkLFgsSFZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soZGF0YS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBvcGVyYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU9wZXJhdGlvbiA9IGFzeW5jIChpZCwgb3BlcmF0aW9uLCBzdWNjZXNzQ2FsbGJhY2spID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L29wZXJhdGlvbnMvJHtpZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogQVBJX0tFWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcGVyYXRpb24pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKGRhdGEuZXJyb3IgfHwgdHlwZW9mIHN1Y2Nlc3NDYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCxYLEhWQhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGRhdGEuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZWxldGUgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBkZWxldGVPcGVyYXRpb24gPSBhc3luYyAoaWQsIG9wZXJhdGlvbiwgc3VjY2Vzc0NhbGxiYWNrKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcGVyYXRpb25zLyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEFQSV9LRVksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uKVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmIChkYXRhLmVycm9yIHx8IHR5cGVvZiBzdWNjZXNzQ2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQsWCxIVkIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhkYXRhLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn07IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXBkYXRlT3BlcmF0aW9ufSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcblxuLy8gVE9ETy4uLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRpb24oe29wZXJhdGlvbn0pIHtcblxuICAgIGNvbnN0IFthZGRUaW1lQm9vbGVhbiwgc2V0QWRkVGltZUJvb2xlYW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW25ld1RpbWVTcGVudCwgc2V0TmV3VGltZVNwZW50XSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW3RpbWVTcGVudFN0YXRlLCBzZXRUaW1lU3BlbnRTdGF0ZV0gPSB1c2VTdGF0ZShvcGVyYXRpb24udGltZVNwZW50KVxuXG4gICAgY29uc3QgaGFuZGxlQWRkVGltZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRPcGVyYXRpb24gPSB7XG4gICAgICAgICAgICAuLi5vcGVyYXRpb24sIHRpbWVTcGVudDogdGltZVNwZW50U3RhdGUgKyBuZXdUaW1lU3BlbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRPcGVyYXRpb24pXG4gICAgICAgIHVwZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24uaWQsIHVwZGF0ZWRPcGVyYXRpb24sIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHNldEFkZFRpbWVCb29sZWFuKGZhbHNlKVxuICAgICAgICAgICAgc2V0VGltZVNwZW50U3RhdGUoZGF0YS50aW1lU3BlbnQpXG4gICAgICAgICAgICBzZXROZXdUaW1lU3BlbnQoMClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVYQnV0dG9uID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldEFkZFRpbWVCb29sZWFuKGZhbHNlKVxuICAgICAgICBzZXROZXdUaW1lU3BlbnQoMClcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbW92ZU9wZXJhdGlvbiA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge29wZXJhdGlvbi5kZXNjcmlwdGlvbn1cblxuICAgICAgICAgICAge3RpbWVTcGVudFN0YXRlID4gMCAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVTcGVudFN0YXRlID49IDYwICYmIGAke01hdGguZmxvb3IodGltZVNwZW50U3RhdGUgLyA2MCl9aGB9IHt0aW1lU3BlbnRTdGF0ZSAtIChNYXRoLmZsb29yKHRpbWVTcGVudFN0YXRlIC8gNjApKSAqIDYwfW1pblxuXG4gICAgICAgIDwvc3Bhbj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YWRkVGltZUJvb2xlYW4gJiYgKDxmb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTJyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1RpbWVTcGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUaW1lU3BlbnQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiBvbkNsaWNrPXtoYW5kbGVBZGRUaW1lfT48aVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIiBvbkNsaWNrPXtoYW5kbGVYQnV0dG9ufT48aVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT4pfVxuXG4gICAgICAgIHshYWRkVGltZUJvb2xlYW4gJiYgKDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbSBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkVGltZUJvb2xlYW4oIWFkZFRpbWVCb29sZWFuKX0+XG4gICAgICAgICAgICAgICAgQWRkIHRpbWVcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCIgb25DbGljaz17b25SZW1vdmVPcGVyYXRpb259PjxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4pfVxuICAgIDwvbGk+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gJy4vT3BlcmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3BlcmF0aW9ucyhwcm9wcykge1xuXG4gICAgY29uc3QgdXBkYXRlT3BlcmF0aW9ucyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZS5jdXJyZW50VGFyZ2V0LmVsZW1lbnRzXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRzKVxuXG4gICAgICAgIHByb3BzLnVwZGF0ZU9wZXJhdGlvbnMoe1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICAgICAgdGltZVNwZW50OiAwLFxuICAgICAgICAgICAgdGFzazogcHJvcHMudGFza1xuICAgICAgICB9KVxuXG4gICAgICAgIGVsZW1lbnRzWzBdLnZhbHVlID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IG9uUmVtb3ZlT3BlcmF0aW9uID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5mb3JtID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVPcGVyYXRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3BlcmF0aW9ucyAmJiBwcm9wcy5vcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZU9wcmF0aW9uPXtvblJlbW92ZU9wZXJhdGlvbn0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmYxNjM4ZTBkMWM4Yjc3ZDM5NzRcIikiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJBUElfS0VZIiwiQVBJX1VSTCIsImdldE9wZXJhdGlvbnMiLCJfcmVmIiwiX2NhbGxlZSIsImlkIiwic3VjY2Vzc0NhbGxiYWNrIiwicmVzcG9uc2UiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwiY29uY2F0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqc29uIiwidDAiLCJjb25zb2xlIiwibG9nIiwiX3giLCJfeDIiLCJhZGROZXdPcGVyYXRpb24iLCJfcmVmMiIsIl9jYWxsZWUyIiwib3BlcmF0aW9uIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJfeDMiLCJfeDQiLCJfeDUiLCJ1cGRhdGVPcGVyYXRpb24iLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3g2IiwiX3g3IiwiX3g4IiwiZGVsZXRlT3BlcmF0aW9uIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl94OSIsIl94MTAiLCJfeDExIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIk9wZXJhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFRpbWVCb29sZWFuIiwic2V0QWRkVGltZUJvb2xlYW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm5ld1RpbWVTcGVudCIsInNldE5ld1RpbWVTcGVudCIsIl91c2VTdGF0ZTUiLCJ0aW1lU3BlbnQiLCJfdXNlU3RhdGU2IiwidGltZVNwZW50U3RhdGUiLCJzZXRUaW1lU3BlbnRTdGF0ZSIsImhhbmRsZUFkZFRpbWUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWRPcGVyYXRpb24iLCJfb2JqZWN0U3ByZWFkIiwiaGFuZGxlWEJ1dHRvbiIsIm9uUmVtb3ZlT3BlcmF0aW9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiTWF0aCIsImZsb29yIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwib25DaGFuZ2UiLCJwYXJzZUludCIsInRhcmdldCIsIm9uQ2xpY2siLCJPcGVyYXRpb25zIiwicHJvcHMiLCJ1cGRhdGVPcGVyYXRpb25zIiwiZWxlbWVudHMiLCJjdXJyZW50VGFyZ2V0IiwidGFzayIsIkZyYWdtZW50IiwiZm9ybSIsIm9uU3VibWl0Iiwib3BlcmF0aW9ucyIsIm1hcCIsIm9uUmVtb3ZlT3ByYXRpb24iXSwic291cmNlUm9vdCI6IiJ9