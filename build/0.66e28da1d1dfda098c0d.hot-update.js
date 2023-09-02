"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Operations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);


function Operations(_ref) {
  var operations = _ref.operations;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, operations && operations.map(function (operation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: operation.id,
      operation: operation
    });
  })));
}

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _api_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _api_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
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




function Task(_ref) {
  var task = _ref.task,
    onRemoveTask = _ref.onRemoveTask;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    operations = _useState2[0],
    setOperations = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    componentState = _useState4[0],
    setComponentState = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.status),
    _useState6 = _slicedToArray(_useState5, 2),
    taskStatus = _useState6[0],
    setTaskStatus = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_2__.getOperations)(task.id, function (data) {
      // console.log(data);
      setOperations(data);
    });
  }, []);
  var handleFinishTask = function handleFinishTask(e) {
    e.preventDefault();
    setTaskStatus("closed");
    var updatedTask = _objectSpread(_objectSpread({}, task), {}, {
      status: "closed"
    });
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_3__.updateTask)(task.id, updatedTask, function (data) {
      // console.log(data)
    });
  };
  var handleRemoveTask = function handleRemoveTask(e) {
    e.preventDefault();
    onRemoveTask(task.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, taskStatus === 'open' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info btn-sm mr-2",
    onClick: function onClick() {
      return setComponentState(!componentState);
    }
  }, "Add operation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-dark btn-sm",
    onClick: handleFinishTask
  }, "Finish", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-archive ml-1"
  }))), operations && operations.length < 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm ml-2",
    onClick: handleRemoveTask
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash false"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_1__["default"], {
    operations: operations,
    form: componentState
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e8f9e962fdf04bb27cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPcGVyYXRpb24gZnJvbSAnLi9PcGVyYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRpb25zKHtvcGVyYXRpb25zfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25zICYmIG9wZXJhdGlvbnMubWFwKG9wZXJhdGlvbiA9PiA8T3BlcmF0aW9uIGtleT17b3BlcmF0aW9uLmlkfSBvcGVyYXRpb249e29wZXJhdGlvbn0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSAnLi9PcGVyYXRpb25zJztcblxuaW1wb3J0IHtnZXRPcGVyYXRpb25zfSBmcm9tICcuLi9hcGkvb3BlcmF0aW9ucyc7XG5pbXBvcnQge3VwZGF0ZVRhc2t9IGZyb20gXCIuLi9hcGkvdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh7dGFzaywgb25SZW1vdmVUYXNrfSkge1xuXG4gICAgY29uc3QgW29wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2NvbXBvbmVudFN0YXRlLCBzZXRDb21wb25lbnRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbdGFza1N0YXR1cywgc2V0VGFza1N0YXR1c10gPSB1c2VTdGF0ZSh0YXNrLnN0YXR1cylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldE9wZXJhdGlvbnModGFzay5pZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0T3BlcmF0aW9ucyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVGaW5pc2hUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgc2V0VGFza1N0YXR1cyhcImNsb3NlZFwiKVxuICAgICAgICBjb25zdCB1cGRhdGVkVGFzayA9IHtcbiAgICAgICAgICAgIC4uLnRhc2ssXG4gICAgICAgICAgICBzdGF0dXM6IFwiY2xvc2VkXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRhc2sodGFzay5pZCwgdXBkYXRlZFRhc2ssIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgb25SZW1vdmVUYXNrKHRhc2suaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt0YXNrLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57dGFzay5kZXNjcmlwdGlvbn08L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzID09PSAnb3BlbicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbSBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb21wb25lbnRTdGF0ZSghY29tcG9uZW50U3RhdGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tc21cIiBvbkNsaWNrPXtoYW5kbGVGaW5pc2hUYXNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG9wZXJhdGlvbnMgJiYgb3BlcmF0aW9ucy5sZW5ndGggPCAxKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSBtbC0yXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlVGFza30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaCBmYWxzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxPcGVyYXRpb25zIG9wZXJhdGlvbnM9e29wZXJhdGlvbnN9IGZvcm09e2NvbXBvbmVudFN0YXRlfS8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGU4ZjllOTYyZmRmMDRiYjI3Y2ZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJPcGVyYXRpb24iLCJPcGVyYXRpb25zIiwiX3JlZiIsIm9wZXJhdGlvbnMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJvcGVyYXRpb24iLCJrZXkiLCJpZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0T3BlcmF0aW9ucyIsInVwZGF0ZVRhc2siLCJUYXNrIiwidGFzayIsIm9uUmVtb3ZlVGFzayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldE9wZXJhdGlvbnMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImNvbXBvbmVudFN0YXRlIiwic2V0Q29tcG9uZW50U3RhdGUiLCJfdXNlU3RhdGU1Iiwic3RhdHVzIiwiX3VzZVN0YXRlNiIsInRhc2tTdGF0dXMiLCJzZXRUYXNrU3RhdHVzIiwiZGF0YSIsImhhbmRsZUZpbmlzaFRhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkVGFzayIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVSZW1vdmVUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJsZW5ndGgiLCJmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==