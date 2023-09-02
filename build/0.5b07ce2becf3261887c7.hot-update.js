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


function Operations(props) {
  var updateOperations = function updateOperations(e) {
    e.preventDefault();
    var elements = e.currentTarget.elements;
    // console.log(elements)

    props.setOperations({
      description: elements[0].value,
      timeSpent: 0,
      task: props.taskID
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
      operation: operation
    });
  })));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("286b7e8d03f1592eb2ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41YjA3Y2UyYmVjZjMyNjE4ODdjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUVyQixTQUFTRSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekM7O0lBRUFKLEtBQUssQ0FBQ00sYUFBYSxDQUFDO01BQ2hCQyxXQUFXLEVBQUVILFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksS0FBSztNQUM5QkMsU0FBUyxFQUFFLENBQUM7TUFDWkMsSUFBSSxFQUFFVixLQUFLLENBQUNXO0lBQ2hCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFDRCxvQkFDSWQsMERBQUEsQ0FBQUEsdURBQUEsUUFFUUcsS0FBSyxDQUFDYyxJQUFJLEtBQUssSUFBSSxpQkFDZmpCLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBVyxnQkFDdEJsQiwwREFBQTtJQUFNbUIsUUFBUSxFQUFFZjtFQUFpQixnQkFDN0JKLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBYSxnQkFDeEJsQiwwREFBQTtJQUFPb0IsSUFBSSxFQUFDLE1BQU07SUFDWEYsU0FBUyxFQUFDLGNBQWM7SUFDeEJHLFdBQVcsRUFBQztFQUF1QixDQUFDLENBQUMsZUFFNUNyQiwwREFBQTtJQUFLa0IsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQmxCLDBEQUFBO0lBQVFrQixTQUFTLEVBQUM7RUFBYyxHQUFDLEtBRTdCLGVBQUFsQiwwREFBQTtJQUFHa0IsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FDUCxDQUNKLENBQ0gsQ0FDTCxDQUNSLGVBR0xsQiwwREFBQTtJQUFJa0IsU0FBUyxFQUFDO0VBQTZCLEdBRW5DZixLQUFLLENBQUNtQixVQUFVLElBQUluQixLQUFLLENBQUNtQixVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFBQyxTQUFTO0lBQUEsb0JBQUl4QiwwREFBQSxDQUFDQyxrREFBUztNQUFDd0IsR0FBRyxFQUFFRCxTQUFTLENBQUNFLEVBQUc7TUFDbEJGLFNBQVMsRUFBRUE7SUFBVSxDQUFDLENBQUM7RUFBQSxFQUU1RixDQUNOLENBQUM7QUFFWDs7Ozs7Ozs7VUNoREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tICcuL09wZXJhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbnMocHJvcHMpIHtcblxuICAgIGNvbnN0IHVwZGF0ZU9wZXJhdGlvbnMgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGUuY3VycmVudFRhcmdldC5lbGVtZW50c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuICAgICAgICBwcm9wcy5zZXRPcGVyYXRpb25zKHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgICAgIHRpbWVTcGVudDogMCxcbiAgICAgICAgICAgIHRhc2s6IHByb3BzLnRhc2tJRFxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmZvcm0gPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3VwZGF0ZU9wZXJhdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vcGVyYXRpb25zICYmIHByb3BzLm9wZXJhdGlvbnMubWFwKG9wZXJhdGlvbiA9PiA8T3BlcmF0aW9uIGtleT17b3BlcmF0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj17b3BlcmF0aW9ufS8+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyODZiN2U4ZDAzZjE1OTJlYjJlZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIk9wZXJhdGlvbiIsIk9wZXJhdGlvbnMiLCJwcm9wcyIsInVwZGF0ZU9wZXJhdGlvbnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50cyIsImN1cnJlbnRUYXJnZXQiLCJzZXRPcGVyYXRpb25zIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInRpbWVTcGVudCIsInRhc2siLCJ0YXNrSUQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvcGVyYXRpb25zIiwibWFwIiwib3BlcmF0aW9uIiwia2V5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9