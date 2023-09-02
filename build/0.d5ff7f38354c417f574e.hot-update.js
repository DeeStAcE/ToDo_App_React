"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_NewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _api_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_4__.getTasks)(function (data) {
      // console.log(data);
      setTasks(data);
    });
  }, []);
  var onNewTask = function onNewTask(newTask) {
    console.log(newTask);
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_4__.addTask)(newTask, function (data) {
      // console.log(data)
      setTasks(function (prevTasks) {
        return [].concat(_toConsumableArray(prevTasks), [data]);
      });
    });
  };
  var onRemoveTask = function onRemoveTask(id) {
    console.log(id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewTask__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onNewTask: onNewTask
  }), tasks && tasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Task__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: task.id,
      task: task,
      onRemoveTask: onRemoveTask
    });
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

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





// TODO
// props
// method handlers
// state (operations)
// useEffect (fetch => operations)

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
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_3__.deleteTask)(task.id, function (data) {});
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
    operations: operations
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37f7f782cbdee2d35782")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx1REFBQSxxQkFDSUEsMERBQUE7SUFBUXdELFNBQVMsRUFBQywwQkFBMEI7SUFDcENHLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTWYsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBYyxDQUFDO0lBQUE7RUFBQyxHQUFDLGVBRXZELGVBQUEzQywwREFBQTtJQUFHd0QsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FBQyxlQUVUeEQsMERBQUE7SUFBUXdELFNBQVMsRUFBQyxxQkFBcUI7SUFBQ0csT0FBTyxFQUFFVDtFQUFpQixHQUFDLFFBRS9ELGVBQUFsRCwwREFBQTtJQUFHd0QsU0FBUyxFQUFDO0VBQXFCLENBQUksQ0FDbEMsQ0FDVixDQUNMLEVBR0FqQixVQUFVLElBQUlBLFVBQVUsQ0FBQ3FCLE1BQU0sR0FBRyxDQUFDLGlCQUNoQzVELDBEQUFBO0lBQVF3RCxTQUFTLEVBQUMsb0NBQW9DO0lBQUNHLE9BQU8sRUFBRUo7RUFBaUIsZ0JBQzdFdkQsMERBQUE7SUFBR3dELFNBQVMsRUFBQztFQUFvQixDQUFJLENBQ2pDLENBR2YsQ0FDSixDQUFDLGVBSU54RCwwREFBQSxDQUFDa0MsbURBQVU7SUFBQ0ssVUFBVSxFQUFFQTtFQUFXLENBQUMsQ0FDL0IsQ0FBQztBQUVsQjs7Ozs7Ozs7VUN4RkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvTmV3VGFza1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vY29tcG9uZW50cy9UYXNrXCI7XG5cbmltcG9ydCB7Z2V0VGFza3MsIGFkZFRhc2t9IGZyb20gJy4vYXBpL3Rhc2tzJztcblxuZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFRhc2tzKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFRhc2tzKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvbk5ld1Rhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgICAgICBhZGRUYXNrKG5ld1Rhc2ssIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHNldFRhc2tzKHByZXZUYXNrcyA9PiBbLi4ucHJldlRhc2tzLCBkYXRhXSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbW92ZVRhc2sgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOZXdUYXNrIG9uTmV3VGFzaz17b25OZXdUYXNrfS8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFza3MgJiYgdGFza3MubWFwKHRhc2sgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvblJlbW92ZVRhc2s9e29uUmVtb3ZlVGFza30vPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSAnLi9PcGVyYXRpb25zJztcblxuaW1wb3J0IHtnZXRPcGVyYXRpb25zfSBmcm9tICcuLi9hcGkvb3BlcmF0aW9ucyc7XG5pbXBvcnQge3VwZGF0ZVRhc2ssIGRlbGV0ZVRhc2t9IGZyb20gXCIuLi9hcGkvdGFza3NcIjtcblxuLy8gVE9ET1xuLy8gcHJvcHNcbi8vIG1ldGhvZCBoYW5kbGVyc1xuLy8gc3RhdGUgKG9wZXJhdGlvbnMpXG4vLyB1c2VFZmZlY3QgKGZldGNoID0+IG9wZXJhdGlvbnMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soe3Rhc2ssIG9uUmVtb3ZlVGFza30pIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjb21wb25lbnRTdGF0ZSwgc2V0Q29tcG9uZW50U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Rhc2tTdGF0dXMsIHNldFRhc2tTdGF0dXNdID0gdXNlU3RhdGUodGFzay5zdGF0dXMpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRPcGVyYXRpb25zKHRhc2suaWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldE9wZXJhdGlvbnMoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlRmluaXNoVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIHNldFRhc2tTdGF0dXMoXCJjbG9zZWRcIilcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XG4gICAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgICAgc3RhdHVzOiBcImNsb3NlZFwiXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVUYXNrKHRhc2suaWQsIHVwZGF0ZWRUYXNrLCBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIG9uUmVtb3ZlVGFzayh0YXNrLmlkKVxuICAgICAgICBkZWxldGVUYXNrKHRhc2suaWQsIGRhdGEgPT4ge1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1cyA9PT0gJ29wZW4nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29tcG9uZW50U3RhdGUoIWNvbXBvbmVudFN0YXRlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCIgb25DbGljaz17aGFuZGxlRmluaXNoVGFza30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChvcGVyYXRpb25zICYmIG9wZXJhdGlvbnMubGVuZ3RoIDwgMSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbWwtMlwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZVRhc2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIHsvKiA8IS0tIEtvbXBvbmVudCBPcGVyYXRpb25zIC0tPiAqL31cbiAgICAgICAgICAgIDxPcGVyYXRpb25zIG9wZXJhdGlvbnM9e29wZXJhdGlvbnN9Lz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzN2Y3Zjc4MmNiZGVlMmQzNTc4MlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsIk5ld1Rhc2siLCJUYXNrIiwiZ2V0VGFza3MiLCJhZGRUYXNrIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGFza3MiLCJzZXRUYXNrcyIsImRhdGEiLCJvbk5ld1Rhc2siLCJuZXdUYXNrIiwiY29uc29sZSIsImxvZyIsInByZXZUYXNrcyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIm9uUmVtb3ZlVGFzayIsImlkIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwidGFzayIsImtleSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiT3BlcmF0aW9ucyIsImdldE9wZXJhdGlvbnMiLCJ1cGRhdGVUYXNrIiwiZGVsZXRlVGFzayIsIl9yZWYiLCJvcGVyYXRpb25zIiwic2V0T3BlcmF0aW9ucyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY29tcG9uZW50U3RhdGUiLCJzZXRDb21wb25lbnRTdGF0ZSIsIl91c2VTdGF0ZTUiLCJzdGF0dXMiLCJfdXNlU3RhdGU2IiwidGFza1N0YXR1cyIsInNldFRhc2tTdGF0dXMiLCJoYW5kbGVGaW5pc2hUYXNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlZFRhc2siLCJfb2JqZWN0U3ByZWFkIiwiaGFuZGxlUmVtb3ZlVGFzayIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvbkNsaWNrIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==