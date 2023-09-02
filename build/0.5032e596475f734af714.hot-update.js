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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_2__.getOperations)(task.id, function (data) {
      // console.log(data);
      setOperations(data);
    });
  }, []);
  var handleFinishTask = function handleFinishTask(e) {
    e.preventDefault();
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_3__.updateTask)(task.id, task, function (data) {
      console.log(data);
    });
  };
  var handleRemoveTask = function handleRemoveTask(e) {
    e.preventDefault();
    console.log(task.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, task.status === 'open' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("09c4c9b1553684e2794e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNVLFVBQVUsRUFBRUE7RUFBVyxDQUFDLENBQy9CLENBQUM7QUFFbEI7Ozs7Ozs7O1VDL0VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSAnLi9PcGVyYXRpb25zJztcblxuaW1wb3J0IHtnZXRPcGVyYXRpb25zfSBmcm9tICcuLi9hcGkvb3BlcmF0aW9ucyc7XG5pbXBvcnQge3VwZGF0ZVRhc2t9IGZyb20gXCIuLi9hcGkvdGFza3NcIjtcblxuLy8gVE9ET1xuLy8gcHJvcHNcbi8vIG1ldGhvZCBoYW5kbGVyc1xuLy8gc3RhdGUgKG9wZXJhdGlvbnMpXG4vLyB1c2VFZmZlY3QgKGZldGNoID0+IG9wZXJhdGlvbnMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soe3Rhc2ssIG9uUmVtb3ZlVGFza30pIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjb21wb25lbnRTdGF0ZSwgc2V0Q29tcG9uZW50U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRPcGVyYXRpb25zKHRhc2suaWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldE9wZXJhdGlvbnMoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlRmluaXNoVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIHVwZGF0ZVRhc2sodGFzay5pZCwgdGFzaywgZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZVRhc2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmlkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdvcGVuJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbXBvbmVudFN0YXRlKCFjb21wb25lbnRTdGF0ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiIG9uQ2xpY2s9e2hhbmRsZUZpbmlzaFRhc2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAob3BlcmF0aW9ucyAmJiBvcGVyYXRpb25zLmxlbmd0aCA8IDEpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVUYXNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoIGZhbHNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICB7LyogPCEtLSBLb21wb25lbnQgT3BlcmF0aW9ucyAtLT4gKi99XG4gICAgICAgICAgICA8T3BlcmF0aW9ucyBvcGVyYXRpb25zPXtvcGVyYXRpb25zfS8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDljNGM5YjE1NTM2ODRlMjc5NGVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk9wZXJhdGlvbnMiLCJnZXRPcGVyYXRpb25zIiwidXBkYXRlVGFzayIsIlRhc2siLCJfcmVmIiwidGFzayIsIm9uUmVtb3ZlVGFzayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJjb21wb25lbnRTdGF0ZSIsInNldENvbXBvbmVudFN0YXRlIiwiaWQiLCJkYXRhIiwiaGFuZGxlRmluaXNoVGFzayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSZW1vdmVUYXNrIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9