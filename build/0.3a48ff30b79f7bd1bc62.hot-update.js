"use strict";
self["webpackHotUpdatees6_react"](0,{

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
    var elements = e.currentTarget.elements;
    console.log(elements);
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
/******/ 	__webpack_require__.h = () => ("45ae156ae8995445ef75")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYTQ4ZmYzMGI3OWY3YmQxYmM2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTtBQUNBOztBQUVlLFNBQVNDLE9BQU9BLENBQUNDLEtBQUssRUFBRTtFQUVuQyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7SUFFckJKLEtBQUssQ0FBQ1EsU0FBUyxDQUFDO01BQ1pDLEtBQUssRUFBRUwsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDTSxLQUFLO01BQ3hCQyxXQUFXLEVBQUVQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sS0FBSztNQUM5QkUsTUFBTSxFQUFFO0lBQ1osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUNJZCwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCaEIsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFXLGdCQUN0QmhCLDBEQUFBO0lBQUlnQixTQUFTLEVBQUM7RUFBWSxHQUFDLFVBQVksQ0FBQyxlQUN4Q2hCLDBEQUFBO0lBQU1pQixRQUFRLEVBQUVkO0VBQWEsZ0JBQ3pCSCwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQVksZ0JBQ3ZCaEIsMERBQUE7SUFBT2tCLElBQUksRUFBQyxNQUFNO0lBQ1hGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxJQUFJLEVBQUMsT0FBTztJQUNaQyxXQUFXLEVBQUM7RUFBTyxDQUFDLENBQzFCLENBQUMsZUFDTnBCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBWSxnQkFDdkJoQiwwREFBQTtJQUFPa0IsSUFBSSxFQUFDLE1BQU07SUFDWEYsU0FBUyxFQUFDLGNBQWM7SUFDeEJHLElBQUksRUFBQyxhQUFhO0lBQ2xCQyxXQUFXLEVBQUM7RUFBYSxDQUFDLENBQ2hDLENBQUMsZUFDTnBCLDBEQUFBO0lBQVFnQixTQUFTLEVBQUM7RUFBYyxHQUFDLFVBRTdCLGVBQUFoQiwwREFBQTtJQUFHZ0IsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FDTixDQUNMLENBQ0osQ0FBQztBQUdkOzs7Ozs7OztVQy9DQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvTmV3VGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIFRPRE9cbi8vIHByb3BzXG4vLyBmb3JtID0+IHN1Ym1pdFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdUYXNrKHByb3BzKSB7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGUuY3VycmVudFRhcmdldC5lbGVtZW50c1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuICAgICAgICBwcm9wcy5vbk5ld1Rhc2soe1xuICAgICAgICAgICAgdGl0bGU6IGVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsZW1lbnRzWzFdLnZhbHVlLFxuICAgICAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgdGFzazwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NWFlMTU2YWU4OTk1NDQ1ZWY3NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIk5ld1Rhc2siLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnRzIiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJvbk5ld1Rhc2siLCJ0aXRsZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==