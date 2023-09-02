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
    onClick: handleFinishTask
  }, "Finish", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-archive ml-1"
  }))), operations && operations.length < 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm ml-2",
    onClick: function onClick() {
      return handleRemoveTask(e, task.id);
    }
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
/******/ 	__webpack_require__.h = () => ("7f6c559eee34635e50e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYzQxOWE5YjAzMDg1MjUxNTg4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ1g7QUFFVTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSyxJQUFJQSxDQUFBQyxJQUFBLEVBQXVCO0VBQUEsSUFBckJDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0lBQUVDLFlBQVksR0FBQUYsSUFBQSxDQUFaRSxZQUFZO0VBRTVDLElBQUFDLFNBQUEsR0FBb0NQLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFRLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBQ2hDLElBQUFJLFVBQUEsR0FBNENaLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFhLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXBERSxjQUFjLEdBQUFELFVBQUE7SUFBRUUsaUJBQWlCLEdBQUFGLFVBQUE7RUFFeENkLGdEQUFTLENBQUMsWUFBTTtJQUNaRyw4REFBYSxDQUFDRyxJQUFJLENBQUNXLEVBQUUsRUFBRSxVQUFDQyxJQUFJLEVBQUs7TUFDN0I7TUFDQU4sYUFBYSxDQUFDTSxJQUFJLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLENBQUMsRUFBSztJQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUV0QixDQUFDO0VBRUQsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUYsQ0FBQyxFQUFFSCxFQUFFLEVBQUs7SUFDaENHLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFbEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixDQUFDLENBQUM7SUFDZEcsT0FBTyxDQUFDQyxHQUFHLENBQUNQLEVBQUUsQ0FBQztFQUNuQixDQUFDO0VBRUQsb0JBQ0lsQiwwREFBQTtJQUFTMkIsU0FBUyxFQUFDO0VBQXFCLGdCQUNwQzNCLDBEQUFBO0lBQUsyQixTQUFTLEVBQUM7RUFBK0QsZ0JBQzFFM0IsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtPLElBQUksQ0FBQ3FCLEtBQVUsQ0FBQyxlQUNyQjVCLDBEQUFBO0lBQUkyQixTQUFTLEVBQUM7RUFBMEIsR0FBRXBCLElBQUksQ0FBQ3NCLFdBQWdCLENBQzlELENBQUMsZUFHTjdCLDBEQUFBLGNBRVFPLElBQUksQ0FBQ3VCLE1BQU0sS0FBSyxNQUFNLGlCQUNsQjlCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFRMkIsU0FBUyxFQUFDLDBCQUEwQjtJQUNwQ0ssT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNZixpQkFBaUIsQ0FBQyxDQUFDRCxjQUFjLENBQUM7SUFBQTtFQUFDLEdBQUMsZUFFdkQsZUFBQWhCLDBEQUFBO0lBQUcyQixTQUFTLEVBQUM7RUFBeUIsQ0FBSSxDQUN0QyxDQUFDLGVBRVQzQiwwREFBQTtJQUFRMkIsU0FBUyxFQUFDLHFCQUFxQjtJQUFDSyxPQUFPLEVBQUVaO0VBQWlCLEdBQUMsUUFFL0QsZUFBQXBCLDBEQUFBO0lBQUcyQixTQUFTLEVBQUM7RUFBcUIsQ0FBSSxDQUNsQyxDQUNWLENBQ0wsRUFHQWYsVUFBVSxJQUFJQSxVQUFVLENBQUNxQixNQUFNLEdBQUcsQ0FBQyxpQkFDaENqQywwREFBQTtJQUFRMkIsU0FBUyxFQUFDLG9DQUFvQztJQUFDSyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1ULGdCQUFnQixDQUFDRixDQUFDLEVBQUVkLElBQUksQ0FBQ1csRUFBRSxDQUFDO0lBQUE7RUFBQyxnQkFDL0ZsQiwwREFBQTtJQUFHMkIsU0FBUyxFQUFDO0VBQW9CLENBQUksQ0FDakMsQ0FHZixDQUNKLENBQUMsZUFJTjNCLDBEQUFBLENBQUNHLG1EQUFVO0lBQUNTLFVBQVUsRUFBRUE7RUFBVyxDQUFDLENBQy9CLENBQUM7QUFFbEI7Ozs7Ozs7O1VDNUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSAnLi9PcGVyYXRpb25zJztcblxuaW1wb3J0IHtnZXRPcGVyYXRpb25zfSBmcm9tICcuLi9hcGkvb3BlcmF0aW9ucyc7XG5cbi8vIFRPRE9cbi8vIHByb3BzXG4vLyBtZXRob2QgaGFuZGxlcnNcbi8vIHN0YXRlIChvcGVyYXRpb25zKVxuLy8gdXNlRWZmZWN0IChmZXRjaCA9PiBvcGVyYXRpb25zKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHt0YXNrLCBvblJlbW92ZVRhc2t9KSB7XG5cbiAgICBjb25zdCBbb3BlcmF0aW9ucywgc2V0T3BlcmF0aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY29tcG9uZW50U3RhdGUsIHNldENvbXBvbmVudFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0T3BlcmF0aW9ucyh0YXNrLmlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRPcGVyYXRpb25zKGRhdGEpO1xuICAgICAgICB9KVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUZpbmlzaFRhc2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZVRhc2sgPSAoZSwgaWQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt0YXNrLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57dGFzay5kZXNjcmlwdGlvbn08L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gJ29wZW4nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29tcG9uZW50U3RhdGUoIWNvbXBvbmVudFN0YXRlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCIgb25DbGljaz17aGFuZGxlRmluaXNoVGFza30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChvcGVyYXRpb25zICYmIG9wZXJhdGlvbnMubGVuZ3RoIDwgMSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbWwtMlwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRhc2soZSwgdGFzay5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIHsvKiA8IS0tIEtvbXBvbmVudCBPcGVyYXRpb25zIC0tPiAqL31cbiAgICAgICAgICAgIDxPcGVyYXRpb25zIG9wZXJhdGlvbnM9e29wZXJhdGlvbnN9Lz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZjZjNTU5ZWVlMzQ2MzVlNTBlNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9ucyIsImdldE9wZXJhdGlvbnMiLCJUYXNrIiwiX3JlZiIsInRhc2siLCJvblJlbW92ZVRhc2siLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJvcGVyYXRpb25zIiwic2V0T3BlcmF0aW9ucyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY29tcG9uZW50U3RhdGUiLCJzZXRDb21wb25lbnRTdGF0ZSIsImlkIiwiZGF0YSIsImhhbmRsZUZpbmlzaFRhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVSZW1vdmVUYXNrIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==