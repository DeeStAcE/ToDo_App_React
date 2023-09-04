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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(operation.timeSpent),
    _useState6 = _slicedToArray(_useState5, 2),
    timeSpentState = _useState6[0],
    setTimeSpentState = _useState6[1];
  var handleAddTime = function handleAddTime(e) {
    e.preventDefault();
    var updatedOperation = _objectSpread(_objectSpread({}, operation), {}, {
      timeSpent: operation.timeSpent + newTimeSpent
    });
    console.log(updatedOperation);
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_1__.updateOperation)(operation.id, updatedOperation, function (data) {
      console.log(data);
    });
    setAddTimeBoolean(false);
    setNewTimeSpent(0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, operation.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, timeSpentState)), addTimeBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("fc1e04d9ceb15ff378cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNOUIsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBYyxDQUFDO0lBQUE7RUFBQyxHQUFDLFVBRXZELGVBQUFULDBEQUFBO0lBQUc4QixTQUFTLEVBQUM7RUFBbUIsQ0FBSSxDQUNoQyxDQUFDLGVBRVQ5QiwwREFBQTtJQUFROEIsU0FBUyxFQUFDO0VBQStCLGdCQUFDOUIsMERBQUE7SUFBRzhCLFNBQVMsRUFBQztFQUFjLENBQUksQ0FBUyxDQUN6RixDQUdiLENBQUM7QUFFYjs7Ozs7Ozs7VUMzRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VwZGF0ZU9wZXJhdGlvbn0gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XG5cbi8vIFRPRE8uLi5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3BlcmF0aW9uKHtvcGVyYXRpb259KSB7XG5cbiAgICBjb25zdCBbYWRkVGltZUJvb2xlYW4sIHNldEFkZFRpbWVCb29sZWFuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuZXdUaW1lU3BlbnQsIHNldE5ld1RpbWVTcGVudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFt0aW1lU3BlbnRTdGF0ZSwgc2V0VGltZVNwZW50U3RhdGVdID0gdXNlU3RhdGUob3BlcmF0aW9uLnRpbWVTcGVudClcblxuICAgIGNvbnN0IGhhbmRsZUFkZFRpbWUgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB1cGRhdGVkT3BlcmF0aW9uID0ge1xuICAgICAgICAgICAgLi4ub3BlcmF0aW9uLFxuICAgICAgICAgICAgdGltZVNwZW50OiBvcGVyYXRpb24udGltZVNwZW50ICsgbmV3VGltZVNwZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVkT3BlcmF0aW9uKVxuICAgICAgICB1cGRhdGVPcGVyYXRpb24ob3BlcmF0aW9uLmlkLCB1cGRhdGVkT3BlcmF0aW9uLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0QWRkVGltZUJvb2xlYW4oZmFsc2UpXG4gICAgICAgIHNldE5ld1RpbWVTcGVudCgwKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7b3BlcmF0aW9uLmRlc2NyaXB0aW9ufVxuXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gQ3phcyB3ecWbd2lldGxhbnkgdHlsa28gamXFvGVsaSB3acSZa3N6eSBvZCAwICAgIC0tPiAqL31cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxuICAgICAgICAgIHsvKiBUT0RPOiBmb3JtYXQgdGltZSAqL31cbiAgICAgICAgICAgICAgICAgICAge3RpbWVTcGVudFN0YXRlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhZGRUaW1lQm9vbGVhbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTJyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1RpbWVTcGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUaW1lU3BlbnQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiBvbkNsaWNrPXtoYW5kbGVBZGRUaW1lfT48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICFhZGRUaW1lQm9vbGVhbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBQcnp5Y2lzayB3aWRvY3pueSB0eWxrbyBqZcW8ZWxpIHN0YXR1cyB6YWRhbmlhIGplc3QgXCJvcGVuXCIgLS0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc20gbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZFRpbWVCb29sZWFuKCFhZGRUaW1lQm9vbGVhbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2xpPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYzFlMDRkOWNlYjE1ZmYzNzhjZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXBkYXRlT3BlcmF0aW9uIiwiT3BlcmF0aW9uIiwiX3JlZiIsIm9wZXJhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFRpbWVCb29sZWFuIiwic2V0QWRkVGltZUJvb2xlYW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm5ld1RpbWVTcGVudCIsInNldE5ld1RpbWVTcGVudCIsIl91c2VTdGF0ZTUiLCJ0aW1lU3BlbnQiLCJfdXNlU3RhdGU2IiwidGltZVNwZW50U3RhdGUiLCJzZXRUaW1lU3BlbnRTdGF0ZSIsImhhbmRsZUFkZFRpbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkT3BlcmF0aW9uIiwiX29iamVjdFNwcmVhZCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImRhdGEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhcnNlSW50IiwidGFyZ2V0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=