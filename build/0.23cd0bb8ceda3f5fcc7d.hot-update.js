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
  var updateOperations = function updateOperations(e) {
    e.preventDefault();
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
    taskID: task.id,
    operations: operations,
    form: componentState,
    setOperations: updateOperations
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4e745f802d631f2fd1e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yM2NkMGJiOGNlZGEzZjVmY2M3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNYO0FBRVU7QUFDUjtBQUV6QixTQUFTTSxJQUFJQSxDQUFBQyxJQUFBLEVBQXVCO0VBQUEsSUFBckJDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0lBQUVDLFlBQVksR0FBQUYsSUFBQSxDQUFaRSxZQUFZO0VBRTVDLElBQUFDLFNBQUEsR0FBb0NSLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBQ2hDLElBQUFJLFVBQUEsR0FBNENiLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFjLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXBERSxjQUFjLEdBQUFELFVBQUE7SUFBRUUsaUJBQWlCLEdBQUFGLFVBQUE7RUFDeEMsSUFBQUcsVUFBQSxHQUFvQ2pCLCtDQUFRLENBQUNNLElBQUksQ0FBQ1ksTUFBTSxDQUFDO0lBQUFDLFVBQUEsR0FBQVQsY0FBQSxDQUFBTyxVQUFBO0lBQWxERyxVQUFVLEdBQUFELFVBQUE7SUFBRUUsYUFBYSxHQUFBRixVQUFBO0VBRWhDcEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pHLDhEQUFhLENBQUNJLElBQUksQ0FBQ2dCLEVBQUUsRUFBRSxVQUFDQyxJQUFJLEVBQUs7TUFDN0I7TUFDQVgsYUFBYSxDQUFDVyxJQUFJLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLENBQUMsRUFBSztJQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVsQkwsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN2QixJQUFNTSxXQUFXLEdBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNWdEIsSUFBSTtNQUNQWSxNQUFNLEVBQUU7SUFBUSxFQUNuQjtJQUVEZixzREFBVSxDQUFDRyxJQUFJLENBQUNnQixFQUFFLEVBQUVLLFdBQVcsRUFBRSxVQUFBSixJQUFJLEVBQUk7TUFDckM7SUFBQSxDQUNILENBQUM7RUFDTixDQUFDO0VBRUQsSUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUosQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCbkIsWUFBWSxDQUFDRCxJQUFJLENBQUNnQixFQUFFLENBQUM7RUFDekIsQ0FBQztFQUVELElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlMLENBQUMsRUFBSztJQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUV0QixDQUFDO0VBRUQsb0JBQ0k1QiwwREFBQTtJQUFTa0MsU0FBUyxFQUFDO0VBQXFCLGdCQUNwQ2xDLDBEQUFBO0lBQUtrQyxTQUFTLEVBQUM7RUFBK0QsZ0JBQzFFbEMsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtRLElBQUksQ0FBQzJCLEtBQVUsQ0FBQyxlQUNyQm5DLDBEQUFBO0lBQUlrQyxTQUFTLEVBQUM7RUFBMEIsR0FBRTFCLElBQUksQ0FBQzRCLFdBQWdCLENBQzlELENBQUMsZUFHTnBDLDBEQUFBLGNBRVFzQixVQUFVLEtBQUssTUFBTSxpQkFDakJ0QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBUWtDLFNBQVMsRUFBQywwQkFBMEI7SUFDcENJLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTXBCLGlCQUFpQixDQUFDLENBQUNELGNBQWMsQ0FBQztJQUFBO0VBQUMsR0FBQyxlQUV2RCxlQUFBakIsMERBQUE7SUFBR2tDLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQUMsZUFFVGxDLDBEQUFBO0lBQVFrQyxTQUFTLEVBQUMscUJBQXFCO0lBQUNJLE9BQU8sRUFBRVo7RUFBaUIsR0FBQyxRQUUvRCxlQUFBMUIsMERBQUE7SUFBR2tDLFNBQVMsRUFBQztFQUFxQixDQUFJLENBQ2xDLENBQ1YsQ0FDTCxFQUdBckIsVUFBVSxJQUFJQSxVQUFVLENBQUMwQixNQUFNLEdBQUcsQ0FBQyxpQkFDaEN2QywwREFBQTtJQUFRa0MsU0FBUyxFQUFDLG9DQUFvQztJQUFDSSxPQUFPLEVBQUVQO0VBQWlCLGdCQUM3RS9CLDBEQUFBO0lBQUdrQyxTQUFTLEVBQUM7RUFBb0IsQ0FBSSxDQUNqQyxDQUdmLENBQ0osQ0FBQyxlQUVObEMsMERBQUEsQ0FBQ0csbURBQVU7SUFBQ3FDLE1BQU0sRUFBRWhDLElBQUksQ0FBQ2dCLEVBQUc7SUFBQ1gsVUFBVSxFQUFFQSxVQUFXO0lBQUM0QixJQUFJLEVBQUV4QixjQUFlO0lBQzlESCxhQUFhLEVBQUVrQjtFQUFpQixDQUFDLENBQ3hDLENBQUM7QUFFbEI7Ozs7Ozs7O1VDcEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSAnLi9PcGVyYXRpb25zJztcblxuaW1wb3J0IHtnZXRPcGVyYXRpb25zfSBmcm9tICcuLi9hcGkvb3BlcmF0aW9ucyc7XG5pbXBvcnQge3VwZGF0ZVRhc2t9IGZyb20gXCIuLi9hcGkvdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh7dGFzaywgb25SZW1vdmVUYXNrfSkge1xuXG4gICAgY29uc3QgW29wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2NvbXBvbmVudFN0YXRlLCBzZXRDb21wb25lbnRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbdGFza1N0YXR1cywgc2V0VGFza1N0YXR1c10gPSB1c2VTdGF0ZSh0YXNrLnN0YXR1cylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldE9wZXJhdGlvbnModGFzay5pZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0T3BlcmF0aW9ucyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVGaW5pc2hUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgc2V0VGFza1N0YXR1cyhcImNsb3NlZFwiKVxuICAgICAgICBjb25zdCB1cGRhdGVkVGFzayA9IHtcbiAgICAgICAgICAgIC4uLnRhc2ssXG4gICAgICAgICAgICBzdGF0dXM6IFwiY2xvc2VkXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRhc2sodGFzay5pZCwgdXBkYXRlZFRhc2ssIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgb25SZW1vdmVUYXNrKHRhc2suaWQpXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlT3BlcmF0aW9ucyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt0YXNrLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57dGFzay5kZXNjcmlwdGlvbn08L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzID09PSAnb3BlbicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbSBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb21wb25lbnRTdGF0ZSghY29tcG9uZW50U3RhdGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tc21cIiBvbkNsaWNrPXtoYW5kbGVGaW5pc2hUYXNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG9wZXJhdGlvbnMgJiYgb3BlcmF0aW9ucy5sZW5ndGggPCAxKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSBtbC0yXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlVGFza30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaCBmYWxzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxPcGVyYXRpb25zIHRhc2tJRD17dGFzay5pZH0gb3BlcmF0aW9ucz17b3BlcmF0aW9uc30gZm9ybT17Y29tcG9uZW50U3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVyYXRpb25zPXt1cGRhdGVPcGVyYXRpb25zfS8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDRlNzQ1ZjgwMmQ2MzFmMmZkMWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk9wZXJhdGlvbnMiLCJnZXRPcGVyYXRpb25zIiwidXBkYXRlVGFzayIsIlRhc2siLCJfcmVmIiwidGFzayIsIm9uUmVtb3ZlVGFzayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJjb21wb25lbnRTdGF0ZSIsInNldENvbXBvbmVudFN0YXRlIiwiX3VzZVN0YXRlNSIsInN0YXR1cyIsIl91c2VTdGF0ZTYiLCJ0YXNrU3RhdHVzIiwic2V0VGFza1N0YXR1cyIsImlkIiwiZGF0YSIsImhhbmRsZUZpbmlzaFRhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkVGFzayIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVSZW1vdmVUYXNrIiwidXBkYXRlT3BlcmF0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwibGVuZ3RoIiwidGFza0lEIiwiZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=