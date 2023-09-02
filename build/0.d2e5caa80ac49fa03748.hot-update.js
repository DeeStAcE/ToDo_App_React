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
  };
  var handleRemoveTask = function handleRemoveTask(e, id) {
    e.preventDefault();
    console.log(e);
    console.log(id);
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
    onClick: function onClick(e) {
      return handleFinishTask(task.id);
    }
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
/******/ 	__webpack_require__.h = () => ("c7e62214c14167e2215f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvQixDQUFDO0FBRWxCOzs7Ozs7OztVQzVFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvVGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPcGVyYXRpb25zIGZyb20gJy4vT3BlcmF0aW9ucyc7XG5cbmltcG9ydCB7Z2V0T3BlcmF0aW9uc30gZnJvbSAnLi4vYXBpL29wZXJhdGlvbnMnO1xuXG4vLyBUT0RPXG4vLyBwcm9wc1xuLy8gbWV0aG9kIGhhbmRsZXJzXG4vLyBzdGF0ZSAob3BlcmF0aW9ucylcbi8vIHVzZUVmZmVjdCAoZmV0Y2ggPT4gb3BlcmF0aW9ucylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh7dGFzaywgb25SZW1vdmVUYXNrfSkge1xuXG4gICAgY29uc3QgW29wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2NvbXBvbmVudFN0YXRlLCBzZXRDb21wb25lbnRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldE9wZXJhdGlvbnModGFzay5pZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0T3BlcmF0aW9ucyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVGaW5pc2hUYXNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVUYXNrID0gKGUsIGlkKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNT57dGFzay50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e3Rhc2suZGVzY3JpcHRpb259PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zdGF0dXMgPT09ICdvcGVuJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbXBvbmVudFN0YXRlKCFjb21wb25lbnRTdGF0ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVGaW5pc2hUYXNrKHRhc2suaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG9wZXJhdGlvbnMgJiYgb3BlcmF0aW9ucy5sZW5ndGggPCAxKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSBtbC0yXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlVGFza30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaCBmYWxzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgey8qIDwhLS0gS29tcG9uZW50IE9wZXJhdGlvbnMgLS0+ICovfVxuICAgICAgICAgICAgPE9wZXJhdGlvbnMgb3BlcmF0aW9ucz17b3BlcmF0aW9uc30vPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM3ZTYyMjE0YzE0MTY3ZTIyMTVmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJPcGVyYXRpb25zIiwiZ2V0T3BlcmF0aW9ucyIsIlRhc2siLCJfcmVmIiwidGFzayIsIm9uUmVtb3ZlVGFzayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJjb21wb25lbnRTdGF0ZSIsInNldENvbXBvbmVudFN0YXRlIiwiaWQiLCJkYXRhIiwiaGFuZGxlRmluaXNoVGFzayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVJlbW92ZVRhc2siLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9