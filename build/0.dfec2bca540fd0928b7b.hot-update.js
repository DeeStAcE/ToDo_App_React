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
/* harmony import */ var _api_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);



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
  var handleRemoveOperation = function handleRemoveOperation(id) {
    // console.log(id)
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_2__.deleteOperation)(id, function (data) {
      // console.log(data)
      props.onRemoveOperation(id);
    });
  };
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
      onRemoveOperation: handleRemoveOperation
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
      // console.log(data)
      setOperations(function (prevOperations) {
        return [].concat(_toConsumableArray(prevOperations), [data]);
      });
    });
  };
  var handleRemoveOperation = function handleRemoveOperation(id) {
    setOperations(operations.filter(function (operation) {
      return operation.id !== id;
    }));
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
    updateOperations: updateOperations,
    onRemoveOperation: handleRemoveOperation
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("523a7cdb059572aa5e1c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQUNvQyxPQUFPLEVBQUVOO0VBQWlCLGdCQUM3RXJELDBEQUFBO0lBQUd1QixTQUFTLEVBQUM7RUFBb0IsQ0FBSSxDQUNqQyxDQUdmLENBQ0osQ0FBQyxlQUVOdkIsMERBQUEsQ0FBQ0ssbURBQVU7SUFBQ1UsSUFBSSxFQUFFQSxJQUFLO0lBQUNZLFVBQVUsRUFBRUEsVUFBVztJQUFDTCxJQUFJLEVBQUVxQixjQUFlO0lBQ3pEcEMsZ0JBQWdCLEVBQUVBLGdCQUFpQjtJQUFDWSxpQkFBaUIsRUFBRUg7RUFBc0IsQ0FBQyxDQUNyRixDQUFDO0FBRWxCOzs7Ozs7OztVQzVGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gJy4vT3BlcmF0aW9uJztcbmltcG9ydCB7ZGVsZXRlT3BlcmF0aW9ufSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3BlcmF0aW9ucyhwcm9wcykge1xuXG4gICAgY29uc3QgdXBkYXRlT3BlcmF0aW9ucyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZS5jdXJyZW50VGFyZ2V0LmVsZW1lbnRzXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRzKVxuXG4gICAgICAgIHByb3BzLnVwZGF0ZU9wZXJhdGlvbnMoe1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICAgICAgdGltZVNwZW50OiAwLFxuICAgICAgICAgICAgdGFzazogcHJvcHMudGFza1xuICAgICAgICB9KVxuXG4gICAgICAgIGVsZW1lbnRzWzBdLnZhbHVlID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZU9wZXJhdGlvbiA9IChpZCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZClcbiAgICAgICAgZGVsZXRlT3BlcmF0aW9uKGlkLCBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBwcm9wcy5vblJlbW92ZU9wZXJhdGlvbihpZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmZvcm0gPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3VwZGF0ZU9wZXJhdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vcGVyYXRpb25zICYmIHByb3BzLm9wZXJhdGlvbnMubWFwKG9wZXJhdGlvbiA9PiA8T3BlcmF0aW9uIGtleT17b3BlcmF0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj17b3BlcmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlT3BlcmF0aW9uPXtoYW5kbGVSZW1vdmVPcGVyYXRpb259Lz4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPcGVyYXRpb25zIGZyb20gJy4vT3BlcmF0aW9ucyc7XG5cbmltcG9ydCB7Z2V0T3BlcmF0aW9ucywgYWRkTmV3T3BlcmF0aW9ufSBmcm9tICcuLi9hcGkvb3BlcmF0aW9ucyc7XG5pbXBvcnQge3VwZGF0ZVRhc2t9IGZyb20gXCIuLi9hcGkvdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh7dGFzaywgb25SZW1vdmVUYXNrfSkge1xuXG4gICAgY29uc3QgW29wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2NvbXBvbmVudFN0YXRlLCBzZXRDb21wb25lbnRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbdGFza1N0YXR1cywgc2V0VGFza1N0YXR1c10gPSB1c2VTdGF0ZSh0YXNrLnN0YXR1cylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldE9wZXJhdGlvbnModGFzay5pZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0T3BlcmF0aW9ucyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVGaW5pc2hUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgc2V0VGFza1N0YXR1cyhcImNsb3NlZFwiKVxuICAgICAgICBjb25zdCB1cGRhdGVkVGFzayA9IHtcbiAgICAgICAgICAgIC4uLnRhc2ssXG4gICAgICAgICAgICBzdGF0dXM6IFwiY2xvc2VkXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVRhc2sodGFzay5pZCwgdXBkYXRlZFRhc2ssIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgb25SZW1vdmVUYXNrKHRhc2suaWQpXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlT3BlcmF0aW9ucyA9IChvcGVyYXRpb24pID0+IHtcbiAgICAgICAgc2V0Q29tcG9uZW50U3RhdGUoZmFsc2UpXG5cbiAgICAgICAgYWRkTmV3T3BlcmF0aW9uKHRhc2suaWQsIG9wZXJhdGlvbiwgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgc2V0T3BlcmF0aW9ucyhwcmV2T3BlcmF0aW9ucyA9PiBbLi4ucHJldk9wZXJhdGlvbnMsIGRhdGFdKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZU9wZXJhdGlvbiA9IChpZCkgPT4ge1xuICAgICAgICBzZXRPcGVyYXRpb25zKG9wZXJhdGlvbnMuZmlsdGVyKG9wZXJhdGlvbiA9PiBvcGVyYXRpb24uaWQgIT09IGlkKSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXMgPT09ICdvcGVuJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbXBvbmVudFN0YXRlKCFjb21wb25lbnRTdGF0ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiIG9uQ2xpY2s9e2hhbmRsZUZpbmlzaFRhc2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAob3BlcmF0aW9ucyAmJiBvcGVyYXRpb25zLmxlbmd0aCA8IDEpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVUYXNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoIGZhbHNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPE9wZXJhdGlvbnMgdGFzaz17dGFza30gb3BlcmF0aW9ucz17b3BlcmF0aW9uc30gZm9ybT17Y29tcG9uZW50U3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVPcGVyYXRpb25zPXt1cGRhdGVPcGVyYXRpb25zfSBvblJlbW92ZU9wZXJhdGlvbj17aGFuZGxlUmVtb3ZlT3BlcmF0aW9ufS8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTIzYTdjZGIwNTk1NzJhYTVlMWNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbiIsImRlbGV0ZU9wZXJhdGlvbiIsIk9wZXJhdGlvbnMiLCJwcm9wcyIsInVwZGF0ZU9wZXJhdGlvbnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50cyIsImN1cnJlbnRUYXJnZXQiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwidGltZVNwZW50IiwidGFzayIsImhhbmRsZVJlbW92ZU9wZXJhdGlvbiIsImlkIiwiZGF0YSIsIm9uUmVtb3ZlT3BlcmF0aW9uIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib3BlcmF0aW9ucyIsIm1hcCIsIm9wZXJhdGlvbiIsImtleSIsImdldE9wZXJhdGlvbnMiLCJhZGROZXdPcGVyYXRpb24iLCJ1cGRhdGVUYXNrIiwiVGFzayIsIl9yZWYiLCJvblJlbW92ZVRhc2siLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRPcGVyYXRpb25zIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJjb21wb25lbnRTdGF0ZSIsInNldENvbXBvbmVudFN0YXRlIiwiX3VzZVN0YXRlNSIsInN0YXR1cyIsIl91c2VTdGF0ZTYiLCJ0YXNrU3RhdHVzIiwic2V0VGFza1N0YXR1cyIsImhhbmRsZUZpbmlzaFRhc2siLCJ1cGRhdGVkVGFzayIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVSZW1vdmVUYXNrIiwicHJldk9wZXJhdGlvbnMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJmaWx0ZXIiLCJ0aXRsZSIsIm9uQ2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9