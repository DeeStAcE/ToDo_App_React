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
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_2__.addNewOperation)(task.id, operation, function (data) {
      console.log(data);
      setOperations(function (prevOperations) {
        return [].concat(_toConsumableArray(prevOperations), [data]);
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
/******/ 	__webpack_require__.h = () => ("d955c872cc3b4cd57006")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFDLDBCQUEwQjtJQUNwQ0ksT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNMUIsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBYyxDQUFDO0lBQUE7RUFBQyxHQUFDLGVBRXZELGVBQUFsQiwwREFBQTtJQUFHeUMsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FBQyxlQUVUekMsMERBQUE7SUFBUXlDLFNBQVMsRUFBQyxxQkFBcUI7SUFBQ0ksT0FBTyxFQUFFbEI7RUFBaUIsR0FBQyxRQUUvRCxlQUFBM0IsMERBQUE7SUFBR3lDLFNBQVMsRUFBQztFQUFxQixDQUFJLENBQ2xDLENBQ1YsQ0FDTCxFQUdBM0IsVUFBVSxJQUFJQSxVQUFVLENBQUNnQyxNQUFNLEdBQUcsQ0FBQyxpQkFDaEM5QywwREFBQTtJQUFReUMsU0FBUyxFQUFDLG9DQUFvQztJQUFDSSxPQUFPLEVBQUViO0VBQWlCLGdCQUM3RWhDLDBEQUFBO0lBQUd5QyxTQUFTLEVBQUM7RUFBb0IsQ0FBSSxDQUNqQyxDQUdmLENBQ0osQ0FBQyxlQUVOekMsMERBQUEsQ0FBQ0csbURBQVU7SUFBQ00sSUFBSSxFQUFFQSxJQUFLO0lBQUNLLFVBQVUsRUFBRUEsVUFBVztJQUFDaUMsSUFBSSxFQUFFN0IsY0FBZTtJQUN6RGUsZ0JBQWdCLEVBQUVBO0VBQWlCLENBQUMsQ0FDM0MsQ0FBQztBQUVsQjs7Ozs7Ozs7VUN4RkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3BlcmF0aW9ucyBmcm9tICcuL09wZXJhdGlvbnMnO1xuXG5pbXBvcnQge2dldE9wZXJhdGlvbnMsIGFkZE5ld09wZXJhdGlvbn0gZnJvbSAnLi4vYXBpL29wZXJhdGlvbnMnO1xuaW1wb3J0IHt1cGRhdGVUYXNrfSBmcm9tIFwiLi4vYXBpL3Rhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soe3Rhc2ssIG9uUmVtb3ZlVGFza30pIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjb21wb25lbnRTdGF0ZSwgc2V0Q29tcG9uZW50U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Rhc2tTdGF0dXMsIHNldFRhc2tTdGF0dXNdID0gdXNlU3RhdGUodGFzay5zdGF0dXMpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRPcGVyYXRpb25zKHRhc2suaWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldE9wZXJhdGlvbnMoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlRmluaXNoVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIHNldFRhc2tTdGF0dXMoXCJjbG9zZWRcIilcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XG4gICAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgICAgc3RhdHVzOiBcImNsb3NlZFwiXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUYXNrKHRhc2suaWQsIHVwZGF0ZWRUYXNrLCBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIG9uUmVtb3ZlVGFzayh0YXNrLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZU9wZXJhdGlvbnMgPSAob3BlcmF0aW9uKSA9PiB7XG4gICAgICAgIHNldENvbXBvbmVudFN0YXRlKGZhbHNlKVxuXG4gICAgICAgIGFkZE5ld09wZXJhdGlvbih0YXNrLmlkLCBvcGVyYXRpb24sIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHNldE9wZXJhdGlvbnMocHJldk9wZXJhdGlvbnMgPT4gWy4uLnByZXZPcGVyYXRpb25zLCBkYXRhXSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXMgPT09ICdvcGVuJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbXBvbmVudFN0YXRlKCFjb21wb25lbnRTdGF0ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiIG9uQ2xpY2s9e2hhbmRsZUZpbmlzaFRhc2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAob3BlcmF0aW9ucyAmJiBvcGVyYXRpb25zLmxlbmd0aCA8IDEpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVUYXNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoIGZhbHNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPE9wZXJhdGlvbnMgdGFzaz17dGFza30gb3BlcmF0aW9ucz17b3BlcmF0aW9uc30gZm9ybT17Y29tcG9uZW50U3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVPcGVyYXRpb25zPXt1cGRhdGVPcGVyYXRpb25zfS8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDk1NWM4NzJjYzNiNGNkNTcwMDZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk9wZXJhdGlvbnMiLCJnZXRPcGVyYXRpb25zIiwiYWRkTmV3T3BlcmF0aW9uIiwidXBkYXRlVGFzayIsIlRhc2siLCJfcmVmIiwidGFzayIsIm9uUmVtb3ZlVGFzayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJjb21wb25lbnRTdGF0ZSIsInNldENvbXBvbmVudFN0YXRlIiwiX3VzZVN0YXRlNSIsInN0YXR1cyIsIl91c2VTdGF0ZTYiLCJ0YXNrU3RhdHVzIiwic2V0VGFza1N0YXR1cyIsImlkIiwiZGF0YSIsImhhbmRsZUZpbmlzaFRhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkVGFzayIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVSZW1vdmVUYXNrIiwidXBkYXRlT3BlcmF0aW9ucyIsIm9wZXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwcmV2T3BlcmF0aW9ucyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwibGVuZ3RoIiwiZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=