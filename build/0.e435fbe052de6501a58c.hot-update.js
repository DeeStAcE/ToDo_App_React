"use strict";
self["webpackHotUpdatees6_react"](0,{

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
  var updateOperations = function updateOperations(operation) {
    setComponentState(false);
    console.log(operation);
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_2__.addNewOperation)(task.id, operation, function (data) {
      // console.log(data)
      setOperations(function (prevOperations) {
        return [].concat(_toConsumableArray(prevOperations), [operation]);
      });
    });
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
    task: task,
    operations: operations,
    form: componentState,
    updateOperations: updateOperations
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b51db095118332cb3539")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBUXlDLFNBQVMsRUFBQywwQkFBMEI7SUFDcENJLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTTFCLGlCQUFpQixDQUFDLENBQUNELGNBQWMsQ0FBQztJQUFBO0VBQUMsR0FBQyxlQUV2RCxlQUFBbEIsMERBQUE7SUFBR3lDLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQUMsZUFFVHpDLDBEQUFBO0lBQVF5QyxTQUFTLEVBQUMscUJBQXFCO0lBQUNJLE9BQU8sRUFBRWxCO0VBQWlCLEdBQUMsUUFFL0QsZUFBQTNCLDBEQUFBO0lBQUd5QyxTQUFTLEVBQUM7RUFBcUIsQ0FBSSxDQUNsQyxDQUNWLENBQ0wsRUFHQTNCLFVBQVUsSUFBSUEsVUFBVSxDQUFDZ0MsTUFBTSxHQUFHLENBQUMsaUJBQ2hDOUMsMERBQUE7SUFBUXlDLFNBQVMsRUFBQyxvQ0FBb0M7SUFBQ0ksT0FBTyxFQUFFYjtFQUFpQixnQkFDN0VoQywwREFBQTtJQUFHeUMsU0FBUyxFQUFDO0VBQW9CLENBQUksQ0FDakMsQ0FHZixDQUNKLENBQUMsZUFFTnpDLDBEQUFBLENBQUNHLG1EQUFVO0lBQUNNLElBQUksRUFBRUEsSUFBSztJQUFDSyxVQUFVLEVBQUVBLFVBQVc7SUFBQ2lDLElBQUksRUFBRTdCLGNBQWU7SUFDekRlLGdCQUFnQixFQUFFQTtFQUFpQixDQUFDLENBQzNDLENBQUM7QUFFbEI7Ozs7Ozs7O1VDekZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSAnLi9PcGVyYXRpb25zJztcblxuaW1wb3J0IHtnZXRPcGVyYXRpb25zLCBhZGROZXdPcGVyYXRpb259IGZyb20gJy4uL2FwaS9vcGVyYXRpb25zJztcbmltcG9ydCB7dXBkYXRlVGFza30gZnJvbSBcIi4uL2FwaS90YXNrc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHt0YXNrLCBvblJlbW92ZVRhc2t9KSB7XG5cbiAgICBjb25zdCBbb3BlcmF0aW9ucywgc2V0T3BlcmF0aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY29tcG9uZW50U3RhdGUsIHNldENvbXBvbmVudFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFt0YXNrU3RhdHVzLCBzZXRUYXNrU3RhdHVzXSA9IHVzZVN0YXRlKHRhc2suc3RhdHVzKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRPcGVyYXRpb25zKGRhdGEpO1xuICAgICAgICB9KVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUZpbmlzaFRhc2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBzZXRUYXNrU3RhdHVzKFwiY2xvc2VkXCIpXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0ge1xuICAgICAgICAgICAgLi4udGFzayxcbiAgICAgICAgICAgIHN0YXR1czogXCJjbG9zZWRcIlxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGFzayh0YXNrLmlkLCB1cGRhdGVkVGFzaywgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZVRhc2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBvblJlbW92ZVRhc2sodGFzay5pZClcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVPcGVyYXRpb25zID0gKG9wZXJhdGlvbikgPT4ge1xuICAgICAgICBzZXRDb21wb25lbnRTdGF0ZShmYWxzZSlcbiAgICAgICAgY29uc29sZS5sb2cob3BlcmF0aW9uKVxuXG4gICAgICAgIGFkZE5ld09wZXJhdGlvbih0YXNrLmlkLCBvcGVyYXRpb24sIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHNldE9wZXJhdGlvbnMocHJldk9wZXJhdGlvbnMgPT4gWy4uLnByZXZPcGVyYXRpb25zLCBvcGVyYXRpb25dKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1cyA9PT0gJ29wZW4nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29tcG9uZW50U3RhdGUoIWNvbXBvbmVudFN0YXRlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCIgb25DbGljaz17aGFuZGxlRmluaXNoVGFza30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChvcGVyYXRpb25zICYmIG9wZXJhdGlvbnMubGVuZ3RoIDwgMSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbWwtMlwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZVRhc2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8T3BlcmF0aW9ucyB0YXNrPXt0YXNrfSBvcGVyYXRpb25zPXtvcGVyYXRpb25zfSBmb3JtPXtjb21wb25lbnRTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU9wZXJhdGlvbnM9e3VwZGF0ZU9wZXJhdGlvbnN9Lz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNTFkYjA5NTExODMzMmNiMzUzOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9ucyIsImdldE9wZXJhdGlvbnMiLCJhZGROZXdPcGVyYXRpb24iLCJ1cGRhdGVUYXNrIiwiVGFzayIsIl9yZWYiLCJ0YXNrIiwib25SZW1vdmVUYXNrIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlcmF0aW9ucyIsInNldE9wZXJhdGlvbnMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImNvbXBvbmVudFN0YXRlIiwic2V0Q29tcG9uZW50U3RhdGUiLCJfdXNlU3RhdGU1Iiwic3RhdHVzIiwiX3VzZVN0YXRlNiIsInRhc2tTdGF0dXMiLCJzZXRUYXNrU3RhdHVzIiwiaWQiLCJkYXRhIiwiaGFuZGxlRmluaXNoVGFzayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWRUYXNrIiwiX29iamVjdFNwcmVhZCIsImhhbmRsZVJlbW92ZVRhc2siLCJ1cGRhdGVPcGVyYXRpb25zIiwib3BlcmF0aW9uIiwiY29uc29sZSIsImxvZyIsInByZXZPcGVyYXRpb25zIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJsZW5ndGgiLCJmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==