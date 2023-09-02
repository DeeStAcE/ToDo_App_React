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
    console.log(elements[0].value);
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
/******/ 	__webpack_require__.h = () => ("3a48ff30b79f7bd1bc62")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNzgxNDVjMWVkYjU3YjRjZTVjOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTtBQUNBOztBQUVlLFNBQVNDLE9BQU9BLENBQUNDLEtBQUssRUFBRTtFQUVuQyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNJLEtBQUssQ0FBQztJQUU5QlIsS0FBSyxDQUFDUyxTQUFTLENBQUM7TUFDWkMsS0FBSyxFQUFFTixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNJLEtBQUs7TUFDeEJHLFdBQVcsRUFBRVAsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxLQUFLO01BQzlCSSxNQUFNLEVBQUU7SUFDWixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0lkLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBYSxnQkFDeEJoQiwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQVcsZ0JBQ3RCaEIsMERBQUE7SUFBSWdCLFNBQVMsRUFBQztFQUFZLEdBQUMsVUFBWSxDQUFDLGVBQ3hDaEIsMERBQUE7SUFBTWlCLFFBQVEsRUFBRWQ7RUFBYSxnQkFDekJILDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBWSxnQkFDdkJoQiwwREFBQTtJQUFPa0IsSUFBSSxFQUFDLE1BQU07SUFDWEYsU0FBUyxFQUFDLGNBQWM7SUFDeEJHLElBQUksRUFBQyxPQUFPO0lBQ1pDLFdBQVcsRUFBQztFQUFPLENBQUMsQ0FDMUIsQ0FBQyxlQUNOcEIsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFZLGdCQUN2QmhCLDBEQUFBO0lBQU9rQixJQUFJLEVBQUMsTUFBTTtJQUNYRixTQUFTLEVBQUMsY0FBYztJQUN4QkcsSUFBSSxFQUFDLGFBQWE7SUFDbEJDLFdBQVcsRUFBQztFQUFhLENBQUMsQ0FDaEMsQ0FBQyxlQUNOcEIsMERBQUE7SUFBUWdCLFNBQVMsRUFBQztFQUFjLEdBQUMsVUFFN0IsZUFBQWhCLDBEQUFBO0lBQUdnQixTQUFTLEVBQUM7RUFBeUIsQ0FBSSxDQUN0QyxDQUNOLENBQ0wsQ0FDSixDQUFDO0FBR2Q7Ozs7Ozs7O1VDL0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9OZXdUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gVE9ET1xuLy8gcHJvcHNcbi8vIGZvcm0gPT4gc3VibWl0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Rhc2socHJvcHMpIHtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZS5jdXJyZW50VGFyZ2V0LmVsZW1lbnRzXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRzWzBdLnZhbHVlKVxuXG4gICAgICAgIHByb3BzLm9uTmV3VGFzayh7XG4gICAgICAgICAgICB0aXRsZTogZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZWxlbWVudHNbMV0udmFsdWUsXG4gICAgICAgICAgICBzdGF0dXM6IFwib3BlblwiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5ldyB0YXNrPC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNhNDhmZjMwYjc5ZjdiZDFiYzYyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmV3VGFzayIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudHMiLCJjdXJyZW50VGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwib25OZXdUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9