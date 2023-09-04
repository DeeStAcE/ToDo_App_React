"use strict";
self["webpackHotUpdatees6_react"](0,{

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
  var handleAddTime = function handleAddTime(e) {
    e.preventDefault();
    var updatedOperation = _objectSpread(_objectSpread({}, operation.description), {}, {
      timeSpent: function timeSpent(prevTime) {
        return prevTime + newTimeSpent;
      }
    });
    console.log(updatedOperation);
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_1__.updateOperation)(operation.id, updatedOperation, function (data) {
      console.log(data);
    });
    setAddTimeBoolean(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, operation.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, operation.timeSpent)), addTimeBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    className: "btn btn-outline-dark"
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
    className: "btn btn-outline-danger btn-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e65ff030f53ad371e23d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQ2hDLENBQUMsZUFFVDVCLDBEQUFBO0lBQVE0QixTQUFTLEVBQUM7RUFBK0IsZ0JBQUM1QiwwREFBQTtJQUFHNEIsU0FBUyxFQUFDO0VBQWMsQ0FBSSxDQUFTLENBQ3pGLENBR2IsQ0FBQztBQUViOzs7Ozs7OztVQ3pFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvT3BlcmF0aW9uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXBkYXRlT3BlcmF0aW9ufSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcblxuLy8gVE9ETy4uLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRpb24oe29wZXJhdGlvbn0pIHtcblxuICAgIGNvbnN0IFthZGRUaW1lQm9vbGVhbiwgc2V0QWRkVGltZUJvb2xlYW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW25ld1RpbWVTcGVudCwgc2V0TmV3VGltZVNwZW50XSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCBoYW5kbGVBZGRUaW1lID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgdXBkYXRlZE9wZXJhdGlvbiA9IHtcbiAgICAgICAgICAgIC4uLm9wZXJhdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRpbWVTcGVudDogcHJldlRpbWUgPT4gcHJldlRpbWUgKyBuZXdUaW1lU3BlbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRPcGVyYXRpb24pXG4gICAgICAgIHVwZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24uaWQsIHVwZGF0ZWRPcGVyYXRpb24sIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRBZGRUaW1lQm9vbGVhbihmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge29wZXJhdGlvbi5kZXNjcmlwdGlvbn1cblxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEN6YXMgd3nFm3dpZXRsYW55IHR5bGtvIGplxbxlbGkgd2nEmWtzenkgb2QgMCAgICAtLT4gKi99XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj5cbiAgICAgICAgICB7LyogVE9ETzogZm9ybWF0IHRpbWUgKi99XG4gICAgICAgICAgICAgICAgICAgIHtvcGVyYXRpb24udGltZVNwZW50fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhZGRUaW1lQm9vbGVhbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTJyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1RpbWVTcGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUaW1lU3BlbnQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiBvbkNsaWNrPXtoYW5kbGVBZGRUaW1lfT48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICFhZGRUaW1lQm9vbGVhbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBQcnp5Y2lzayB3aWRvY3pueSB0eWxrbyBqZcW8ZWxpIHN0YXR1cyB6YWRhbmlhIGplc3QgXCJvcGVuXCIgLS0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc20gbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZFRpbWVCb29sZWFuKCFhZGRUaW1lQm9vbGVhbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2xpPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNjVmZjAzMGY1M2FkMzcxZTIzZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXBkYXRlT3BlcmF0aW9uIiwiT3BlcmF0aW9uIiwiX3JlZiIsIm9wZXJhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFRpbWVCb29sZWFuIiwic2V0QWRkVGltZUJvb2xlYW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm5ld1RpbWVTcGVudCIsInNldE5ld1RpbWVTcGVudCIsImhhbmRsZUFkZFRpbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkT3BlcmF0aW9uIiwiX29iamVjdFNwcmVhZCIsImRlc2NyaXB0aW9uIiwidGltZVNwZW50IiwicHJldlRpbWUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwid2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==