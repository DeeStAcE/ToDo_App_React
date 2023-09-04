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
/******/ 	__webpack_require__.h = () => ("53794ec43ed650c27b19")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsZUFDcEV4QywwREFBQTtJQUFLK0IsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQi9CLDBEQUFBO0lBQVErQixTQUFTLEVBQUMseUJBQXlCO0lBQUNhLE9BQU8sRUFBRXhCO0VBQWMsZ0JBQUNwQiwwREFBQTtJQUNoRStCLFNBQVMsRUFBQztFQUFhLENBQUksQ0FBUyxDQUFDLGVBQ3pDL0IsMERBQUE7SUFBUStCLFNBQVMsRUFBQyxzQkFBc0I7SUFBQ2EsT0FBTyxFQUFFZjtFQUFjLGdCQUFDN0IsMERBQUE7SUFDN0QrQixTQUFTLEVBQUM7RUFBb0IsQ0FBSSxDQUFTLENBQzlDLENBQ0osQ0FDSCxDQUFFLEVBRVAsQ0FBQ3RCLGNBQWMsaUJBQUtULDBEQUFBLDJCQUVqQkEsMERBQUE7SUFBUStCLFNBQVMsRUFBQyxxQ0FBcUM7SUFDL0NhLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTWxDLGlCQUFpQixDQUFDLENBQUNELGNBQWMsQ0FBQztJQUFBO0VBQUMsR0FBQyxVQUV2RCxlQUFBVCwwREFBQTtJQUFHK0IsU0FBUyxFQUFDO0VBQW1CLENBQUksQ0FDaEMsQ0FBQyxlQUVUL0IsMERBQUE7SUFBUStCLFNBQVMsRUFBQztFQUErQixnQkFBQy9CLDBEQUFBO0lBQUcrQixTQUFTLEVBQUM7RUFBYyxDQUFJLENBQVMsQ0FDekYsQ0FDTCxDQUFDO0FBQ1Q7Ozs7Ozs7O1VDdEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1cGRhdGVPcGVyYXRpb259IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xuXG4vLyBUT0RPLi4uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbih7b3BlcmF0aW9ufSkge1xuXG4gICAgY29uc3QgW2FkZFRpbWVCb29sZWFuLCBzZXRBZGRUaW1lQm9vbGVhbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbmV3VGltZVNwZW50LCBzZXROZXdUaW1lU3BlbnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbdGltZVNwZW50U3RhdGUsIHNldFRpbWVTcGVudFN0YXRlXSA9IHVzZVN0YXRlKG9wZXJhdGlvbi50aW1lU3BlbnQpXG5cbiAgICBjb25zdCBoYW5kbGVBZGRUaW1lID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgdXBkYXRlZE9wZXJhdGlvbiA9IHtcbiAgICAgICAgICAgIC4uLm9wZXJhdGlvbiwgdGltZVNwZW50OiB0aW1lU3BlbnRTdGF0ZSArIG5ld1RpbWVTcGVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codXBkYXRlZE9wZXJhdGlvbilcbiAgICAgICAgdXBkYXRlT3BlcmF0aW9uKG9wZXJhdGlvbi5pZCwgdXBkYXRlZE9wZXJhdGlvbiwgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgc2V0QWRkVGltZUJvb2xlYW4oZmFsc2UpXG4gICAgICAgICAgICBzZXRUaW1lU3BlbnRTdGF0ZShkYXRhLnRpbWVTcGVudClcbiAgICAgICAgICAgIHNldE5ld1RpbWVTcGVudCgwKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVhCdXR0b24gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0QWRkVGltZUJvb2xlYW4oZmFsc2UpXG4gICAgICAgIHNldE5ld1RpbWVTcGVudCgwKVxuICAgIH1cblxuICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7b3BlcmF0aW9uLmRlc2NyaXB0aW9ufVxuXG4gICAgICAgICAgICB7dGltZVNwZW50U3RhdGUgPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGltZVNwZW50U3RhdGUgPj0gNjAgJiYgYCR7TWF0aC5mbG9vcih0aW1lU3BlbnRTdGF0ZSAvIDYwKX1oYH0ge3RpbWVTcGVudFN0YXRlIC0gKE1hdGguZmxvb3IodGltZVNwZW50U3RhdGUgLyA2MCkpICogNjB9bWluXG5cbiAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthZGRUaW1lQm9vbGVhbiAmJiAoPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNwZW50IHRpbWUgaW4gbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMnJlbSd9fVxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGltZVNwZW50fVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RpbWVTcGVudChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiIG9uQ2xpY2s9e2hhbmRsZUFkZFRpbWV9PjxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9e2hhbmRsZVhCdXR0b259PjxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPil9XG5cbiAgICAgICAgeyFhZGRUaW1lQm9vbGVhbiAmJiAoPGRpdj5cbiAgICAgICAgICAgIHsvKiA8IS0tIFByenljaXNrIHdpZG9jem55IHR5bGtvIGplxbxlbGkgc3RhdHVzIHphZGFuaWEgamVzdCBcIm9wZW5cIiAtLT4gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbSBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkVGltZUJvb2xlYW4oIWFkZFRpbWVCb29sZWFuKX0+XG4gICAgICAgICAgICAgICAgQWRkIHRpbWVcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4pfVxuICAgIDwvbGk+KVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUzNzk0ZWM0M2VkNjUwYzI3YjE5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1cGRhdGVPcGVyYXRpb24iLCJPcGVyYXRpb24iLCJfcmVmIiwib3BlcmF0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWRkVGltZUJvb2xlYW4iLCJzZXRBZGRUaW1lQm9vbGVhbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibmV3VGltZVNwZW50Iiwic2V0TmV3VGltZVNwZW50IiwiX3VzZVN0YXRlNSIsInRpbWVTcGVudCIsIl91c2VTdGF0ZTYiLCJ0aW1lU3BlbnRTdGF0ZSIsInNldFRpbWVTcGVudFN0YXRlIiwiaGFuZGxlQWRkVGltZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWRPcGVyYXRpb24iLCJfb2JqZWN0U3ByZWFkIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0YSIsImhhbmRsZVhCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJjb25jYXQiLCJNYXRoIiwiZmxvb3IiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhcnNlSW50IiwidGFyZ2V0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=