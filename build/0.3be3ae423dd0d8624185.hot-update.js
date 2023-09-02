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

function NewTask(props) {
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var elements = e.currentTarget.elements;
    // console.log(elements)

    props.onNewTask({
      title: elements[0].value,
      description: elements[1].value,
      status: "open"
    });
    elements[0].value = "";
    elements[1].value = "";
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
/******/ 	__webpack_require__.h = () => ("4046ff8eecb6bb54c875")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYmUzYWU0MjNkZDBkODYyNDE4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLE9BQU9BLENBQUNDLEtBQUssRUFBRTtFQUVuQyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekM7O0lBRUFKLEtBQUssQ0FBQ00sU0FBUyxDQUFDO01BQ1pDLEtBQUssRUFBRUgsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxLQUFLO01BQ3hCQyxXQUFXLEVBQUVMLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksS0FBSztNQUM5QkUsTUFBTSxFQUFFO0lBQ1osQ0FBQyxDQUFDO0lBRUZOLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksS0FBSyxHQUFHLEVBQUU7SUFDdEJKLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksS0FBSyxHQUFHLEVBQUU7RUFDMUIsQ0FBQztFQUVELG9CQUNJViwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBYSxnQkFDeEJkLDBEQUFBO0lBQUtjLFNBQVMsRUFBQztFQUFXLGdCQUN0QmQsMERBQUE7SUFBSWMsU0FBUyxFQUFDO0VBQVksR0FBQyxVQUFZLENBQUMsZUFDeENkLDBEQUFBO0lBQU1lLFFBQVEsRUFBRVo7RUFBYSxnQkFDekJILDBEQUFBO0lBQUtjLFNBQVMsRUFBQztFQUFZLGdCQUN2QmQsMERBQUE7SUFBT2dCLElBQUksRUFBQyxNQUFNO0lBQ1hGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxJQUFJLEVBQUMsT0FBTztJQUNaQyxXQUFXLEVBQUM7RUFBTyxDQUFDLENBQzFCLENBQUMsZUFDTmxCLDBEQUFBO0lBQUtjLFNBQVMsRUFBQztFQUFZLGdCQUN2QmQsMERBQUE7SUFBT2dCLElBQUksRUFBQyxNQUFNO0lBQ1hGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxJQUFJLEVBQUMsYUFBYTtJQUNsQkMsV0FBVyxFQUFDO0VBQWEsQ0FBQyxDQUNoQyxDQUFDLGVBQ05sQiwwREFBQTtJQUFRYyxTQUFTLEVBQUM7RUFBYyxHQUFDLFVBRTdCLGVBQUFkLDBEQUFBO0lBQUdjLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ04sQ0FDTCxDQUNKLENBQUM7QUFFZDs7Ozs7Ozs7VUM3Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL05ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdUYXNrKHByb3BzKSB7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGUuY3VycmVudFRhcmdldC5lbGVtZW50c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuICAgICAgICBwcm9wcy5vbk5ld1Rhc2soe1xuICAgICAgICAgICAgdGl0bGU6IGVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsZW1lbnRzWzFdLnZhbHVlLFxuICAgICAgICAgICAgc3RhdHVzOiBcIm9wZW5cIlxuICAgICAgICB9KVxuXG4gICAgICAgIGVsZW1lbnRzWzBdLnZhbHVlID0gXCJcIlxuICAgICAgICBlbGVtZW50c1sxXS52YWx1ZSA9IFwiXCJcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IHRhc2s8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQwNDZmZjhlZWNiNmJiNTRjODc1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmV3VGFzayIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudHMiLCJjdXJyZW50VGFyZ2V0Iiwib25OZXdUYXNrIiwidGl0bGUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=