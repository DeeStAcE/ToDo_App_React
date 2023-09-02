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
    // console.log(id)
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
    onClick: function onClick() {
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
/******/ 	__webpack_require__.h = () => ("f9ce86cd2823a7e712a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7SUFBUStDLFNBQVMsRUFBQyxvQ0FBb0M7SUFBQ0ksT0FBTyxFQUFFTDtFQUFpQixnQkFDN0U5QywwREFBQTtJQUFHK0MsU0FBUyxFQUFDO0VBQW9CLENBQUksQ0FDakMsQ0FHZixDQUNKLENBQUMsZUFJTi9DLDBEQUFBLENBQUNrQyxtREFBVTtJQUFDRyxVQUFVLEVBQUVBO0VBQVcsQ0FBQyxDQUMvQixDQUFDO0FBRWxCOzs7Ozs7OztVQzNFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuaW1wb3J0IE5ld1Rhc2sgZnJvbSBcIi4vY29tcG9uZW50cy9OZXdUYXNrXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9jb21wb25lbnRzL1Rhc2tcIjtcblxuaW1wb3J0IHtnZXRUYXNrcywgYWRkVGFza30gZnJvbSAnLi9hcGkvdGFza3MnO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG5cbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0VGFza3MoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0VGFza3MoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uTmV3VGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spXG4gICAgICAgIGFkZFRhc2sobmV3VGFzaywgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgc2V0VGFza3MocHJldlRhc2tzID0+IFsuLi5wcmV2VGFza3MsIGRhdGFdKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uUmVtb3ZlVGFzayA9IChpZCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE5ld1Rhc2sgb25OZXdUYXNrPXtvbk5ld1Rhc2t9Lz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXNrcyAmJiB0YXNrcy5tYXAodGFzayA9PiA8VGFzayBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uUmVtb3ZlVGFzaz17b25SZW1vdmVUYXNrfS8+KVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3BlcmF0aW9ucyBmcm9tICcuL09wZXJhdGlvbnMnO1xuXG5pbXBvcnQge2dldE9wZXJhdGlvbnN9IGZyb20gJy4uL2FwaS9vcGVyYXRpb25zJztcblxuLy8gVE9ET1xuLy8gcHJvcHNcbi8vIG1ldGhvZCBoYW5kbGVyc1xuLy8gc3RhdGUgKG9wZXJhdGlvbnMpXG4vLyB1c2VFZmZlY3QgKGZldGNoID0+IG9wZXJhdGlvbnMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soe3Rhc2ssIG9uUmVtb3ZlVGFza30pIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjb21wb25lbnRTdGF0ZSwgc2V0Q29tcG9uZW50U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRPcGVyYXRpb25zKHRhc2suaWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldE9wZXJhdGlvbnMoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlRmluaXNoVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlVGFzayA9IChlLCBpZCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zb2xlLmxvZyhpZClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDU+e3Rhc2sudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt0YXNrLmRlc2NyaXB0aW9ufTwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suc3RhdHVzID09PSAnb3BlbicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbSBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb21wb25lbnRTdGF0ZSghY29tcG9uZW50U3RhdGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaW5pc2hUYXNrKHRhc2suaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG9wZXJhdGlvbnMgJiYgb3BlcmF0aW9ucy5sZW5ndGggPCAxKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSBtbC0yXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlVGFza30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaCBmYWxzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgey8qIDwhLS0gS29tcG9uZW50IE9wZXJhdGlvbnMgLS0+ICovfVxuICAgICAgICAgICAgPE9wZXJhdGlvbnMgb3BlcmF0aW9ucz17b3BlcmF0aW9uc30vPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5Y2U4NmNkMjgyM2E3ZTcxMmE5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiTmV3VGFzayIsIlRhc2siLCJnZXRUYXNrcyIsImFkZFRhc2siLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0YXNrcyIsInNldFRhc2tzIiwiZGF0YSIsIm9uTmV3VGFzayIsIm5ld1Rhc2siLCJjb25zb2xlIiwibG9nIiwicHJldlRhc2tzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib25SZW1vdmVUYXNrIiwiaWQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJ0YXNrIiwia2V5IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJPcGVyYXRpb25zIiwiZ2V0T3BlcmF0aW9ucyIsIl9yZWYiLCJvcGVyYXRpb25zIiwic2V0T3BlcmF0aW9ucyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY29tcG9uZW50U3RhdGUiLCJzZXRDb21wb25lbnRTdGF0ZSIsImhhbmRsZUZpbmlzaFRhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVSZW1vdmVUYXNrIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm9uQ2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9