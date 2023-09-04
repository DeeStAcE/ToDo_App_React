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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dfec2bca540fd0928b7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZjA4OGFlZjAzY2I1OTc2NmUxNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2I7QUFDYztBQUVuQyxTQUFTSyxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekM7O0lBRUFKLEtBQUssQ0FBQ0MsZ0JBQWdCLENBQUM7TUFDbkJLLFdBQVcsRUFBRUYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO01BQzlCQyxTQUFTLEVBQUUsQ0FBQztNQUNaQyxJQUFJLEVBQUVULEtBQUssQ0FBQ1M7SUFDaEIsQ0FBQyxDQUFDO0lBRUZMLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFHLEVBQUU7RUFDMUIsQ0FBQztFQUVELElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUlDLEVBQUUsRUFBSztJQUNsQztJQUNBYixnRUFBZSxDQUFDYSxFQUFFLEVBQUUsVUFBQUMsSUFBSSxFQUFJO01BQ3hCO0lBQUEsQ0FDSCxDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUNJbEIsMERBQUEsQ0FBQUEsdURBQUEsUUFFUU0sS0FBSyxDQUFDZSxJQUFJLEtBQUssSUFBSSxpQkFDZnJCLDBEQUFBO0lBQUtzQixTQUFTLEVBQUM7RUFBVyxnQkFDdEJ0QiwwREFBQTtJQUFNdUIsUUFBUSxFQUFFaEI7RUFBaUIsZ0JBQzdCUCwwREFBQTtJQUFLc0IsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCdEIsMERBQUE7SUFBT3dCLElBQUksRUFBQyxNQUFNO0lBQ1hGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxXQUFXLEVBQUM7RUFBdUIsQ0FBQyxDQUFDLGVBRTVDekIsMERBQUE7SUFBS3NCLFNBQVMsRUFBQztFQUFvQixnQkFDL0J0QiwwREFBQTtJQUFRc0IsU0FBUyxFQUFDO0VBQWMsR0FBQyxLQUU3QixlQUFBdEIsMERBQUE7SUFBR3NCLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUixlQUdMdEIsMERBQUE7SUFBSXNCLFNBQVMsRUFBQztFQUE2QixHQUVuQ2hCLEtBQUssQ0FBQ29CLFVBQVUsSUFBSXBCLEtBQUssQ0FBQ29CLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLFNBQVM7SUFBQSxvQkFBSTVCLDBEQUFBLENBQUNHLGtEQUFTO01BQUMwQixHQUFHLEVBQUVELFNBQVMsQ0FBQ1gsRUFBRztNQUNsQlcsU0FBUyxFQUFFQSxTQUFVO01BQ3JCRSxpQkFBaUIsRUFBRWQ7SUFBc0IsQ0FBQyxDQUFDO0VBQUEsRUFFaEgsQ0FDTixDQUFDO0FBRVg7Ozs7Ozs7O1VDNURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tICcuL09wZXJhdGlvbic7XG5pbXBvcnQge2RlbGV0ZU9wZXJhdGlvbn0gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbnMocHJvcHMpIHtcblxuICAgIGNvbnN0IHVwZGF0ZU9wZXJhdGlvbnMgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGUuY3VycmVudFRhcmdldC5lbGVtZW50c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuICAgICAgICBwcm9wcy51cGRhdGVPcGVyYXRpb25zKHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgICAgIHRpbWVTcGVudDogMCxcbiAgICAgICAgICAgIHRhc2s6IHByb3BzLnRhc2tcbiAgICAgICAgfSlcblxuICAgICAgICBlbGVtZW50c1swXS52YWx1ZSA9IFwiXCJcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVPcGVyYXRpb24gPSAoaWQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWQpXG4gICAgICAgIGRlbGV0ZU9wZXJhdGlvbihpZCwgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZm9ybSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXBkYXRlT3BlcmF0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9wZXJhdGlvbnMgJiYgcHJvcHMub3BlcmF0aW9ucy5tYXAob3BlcmF0aW9uID0+IDxPcGVyYXRpb24ga2V5PXtvcGVyYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvcGVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGZlYzJiY2E1NDBmZDA5MjhiN2JcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbiIsImRlbGV0ZU9wZXJhdGlvbiIsIk9wZXJhdGlvbnMiLCJwcm9wcyIsInVwZGF0ZU9wZXJhdGlvbnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50cyIsImN1cnJlbnRUYXJnZXQiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwidGltZVNwZW50IiwidGFzayIsImhhbmRsZVJlbW92ZU9wZXJhdGlvbiIsImlkIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9wZXJhdGlvbnMiLCJtYXAiLCJvcGVyYXRpb24iLCJrZXkiLCJvblJlbW92ZU9wZXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=