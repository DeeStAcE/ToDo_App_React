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
      console.log(data);
      setTasks(data);
    });
  }, []);
  var onNewTask = function onNewTask(newTask) {
    console.log(newTask);
  };

  // () removeTask

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewTask__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onNewTask: onNewTask
  }), tasks && tasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Task__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: task.id,
      task: task
    });
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewTask)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// TODO
// props
// form => submit

function NewTask(props) {
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var elements = e.target.elements;
    // console.log(elements)

    props.onNewTask({
      title: elements[0].value,
      description: elements[1].value,
      status: "open"
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "card-title"
  }, "New task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "title",
    placeholder: "Title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "description",
    placeholder: "Description"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info"
  }, "Add task", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0bd61e1ccd5ad217f362")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZWQ3YmIxODIzM2ExOGFiZjM5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUVEO0FBQ047QUFFQTtBQUVyQyxTQUFTTyxHQUFHQSxDQUFBLEVBQUc7RUFFWCxJQUFBQyxTQUFBLEdBQTBCUCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFqQ0csS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUV0QlAsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pJLG9EQUFRLENBQUMsVUFBQ08sSUFBSSxFQUFLO01BQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7TUFDakJELFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO0lBQ2xCLENBQUMsQ0FBQztFQUNOLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsT0FBTyxFQUFLO0lBQzNCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDO0VBQ3hCLENBQUM7O0VBRUQ7O0VBRUEsb0JBQ0lqQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ksMkRBQU87SUFBQ1ksU0FBUyxFQUFFQTtFQUFVLENBQUMsQ0FBQyxFQUU1QkwsS0FBSyxJQUFJQSxLQUFLLENBQUNTLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO0lBQUEsb0JBQUlyQiwwREFBQSxDQUFDSyx3REFBSTtNQUFDaUIsR0FBRyxFQUFFRCxJQUFJLENBQUNFLEVBQUc7TUFBQ0YsSUFBSSxFQUFFQTtJQUFLLENBQUMsQ0FBQztFQUFBLEVBRWxFLENBQUM7QUFHWDtBQUVBLElBQU1HLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3hCLDREQUFVLENBQUNxQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDNUIsMERBQUEsQ0FBQ08sR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RDTzs7QUFFMUI7QUFDQTtBQUNBOztBQUVlLFNBQVNILE9BQU9BLENBQUN5QixLQUFLLEVBQUU7RUFFbkMsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVsQixJQUFNQyxRQUFRLEdBQUdGLENBQUMsQ0FBQ0csTUFBTSxDQUFDRCxRQUFRO0lBQ2xDOztJQUVBSixLQUFLLENBQUNiLFNBQVMsQ0FBQztNQUNabUIsS0FBSyxFQUFFRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUs7TUFDeEJDLFdBQVcsRUFBRUosUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO01BQzlCRSxNQUFNLEVBQUU7SUFDWixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0l0QywwREFBQTtJQUFLdUMsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCdkMsMERBQUE7SUFBS3VDLFNBQVMsRUFBQztFQUFXLGdCQUN0QnZDLDBEQUFBO0lBQUl1QyxTQUFTLEVBQUM7RUFBWSxHQUFDLFVBQVksQ0FBQyxlQUN4Q3ZDLDBEQUFBO0lBQU13QyxRQUFRLEVBQUVWO0VBQWEsZ0JBQ3pCOUIsMERBQUE7SUFBS3VDLFNBQVMsRUFBQztFQUFZLGdCQUN2QnZDLDBEQUFBO0lBQU95QyxJQUFJLEVBQUMsTUFBTTtJQUNYRixTQUFTLEVBQUMsY0FBYztJQUN4QkcsSUFBSSxFQUFDLE9BQU87SUFDWkMsV0FBVyxFQUFDO0VBQU8sQ0FBQyxDQUMxQixDQUFDLGVBQ04zQywwREFBQTtJQUFLdUMsU0FBUyxFQUFDO0VBQVksZ0JBQ3ZCdkMsMERBQUE7SUFBT3lDLElBQUksRUFBQyxNQUFNO0lBQ1hGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxJQUFJLEVBQUMsYUFBYTtJQUNsQkMsV0FBVyxFQUFDO0VBQWEsQ0FBQyxDQUNoQyxDQUFDLGVBQ04zQywwREFBQTtJQUFRdUMsU0FBUyxFQUFDO0VBQWMsR0FBQyxVQUU3QixlQUFBdkMsMERBQUE7SUFBR3VDLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ04sQ0FDTCxDQUNKLENBQUM7QUFHZDs7Ozs7Ozs7VUMvQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9OZXdUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvTmV3VGFza1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vY29tcG9uZW50cy9UYXNrXCI7XG5cbmltcG9ydCB7Z2V0VGFza3N9IGZyb20gJy4vYXBpL3Rhc2tzJztcblxuZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFRhc2tzKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFRhc2tzKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvbk5ld1Rhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgIH1cblxuICAgIC8vICgpIHJlbW92ZVRhc2tcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmV3VGFzayBvbk5ld1Rhc2s9e29uTmV3VGFza30vPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhc2tzICYmIHRhc2tzLm1hcCh0YXNrID0+IDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30vPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gVE9ET1xuLy8gcHJvcHNcbi8vIGZvcm0gPT4gc3VibWl0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Rhc2socHJvcHMpIHtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZS50YXJnZXQuZWxlbWVudHNcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudHMpXG5cbiAgICAgICAgcHJvcHMub25OZXdUYXNrKHtcbiAgICAgICAgICAgIHRpdGxlOiBlbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbGVtZW50c1sxXS52YWx1ZSxcbiAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IHRhc2s8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGJkNjFlMWNjZDVhZDIxN2YzNjJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJOZXdUYXNrIiwiVGFzayIsImdldFRhc2tzIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGFza3MiLCJzZXRUYXNrcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib25OZXdUYXNrIiwibmV3VGFzayIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsInRhc2siLCJrZXkiLCJpZCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50cyIsInRhcmdldCIsInRpdGxlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=