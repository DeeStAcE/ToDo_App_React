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
/******/ 	__webpack_require__.h = () => ("8c484e12360634f0bba5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NjU0MGY2OTI0MjZmZTU4OGQzMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1U7QUFDYztBQUVuQyxTQUFTRyxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekM7O0lBRUFKLEtBQUssQ0FBQ0MsZ0JBQWdCLENBQUM7TUFDbkJLLFdBQVcsRUFBRUYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO01BQzlCQyxTQUFTLEVBQUUsQ0FBQztNQUNaQyxJQUFJLEVBQUVULEtBQUssQ0FBQ1M7SUFDaEIsQ0FBQyxDQUFDO0lBRUZMLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFHLEVBQUU7RUFDMUIsQ0FBQztFQUVELElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUlDLEVBQUUsRUFBSztJQUNsQztJQUNBYixnRUFBZSxDQUFDYSxFQUFFLEVBQUUsVUFBQUMsSUFBSSxFQUFJO01BQ3hCO0lBQUEsQ0FFSCxDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUNJaEIsMERBQUEsQ0FBQUEsdURBQUEsUUFFUUksS0FBSyxDQUFDZSxJQUFJLEtBQUssSUFBSSxpQkFDZm5CLDBEQUFBO0lBQUtvQixTQUFTLEVBQUM7RUFBVyxnQkFDdEJwQiwwREFBQTtJQUFNcUIsUUFBUSxFQUFFaEI7RUFBaUIsZ0JBQzdCTCwwREFBQTtJQUFLb0IsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCcEIsMERBQUE7SUFBT3NCLElBQUksRUFBQyxNQUFNO0lBQ1hGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxXQUFXLEVBQUM7RUFBdUIsQ0FBQyxDQUFDLGVBRTVDdkIsMERBQUE7SUFBS29CLFNBQVMsRUFBQztFQUFvQixnQkFDL0JwQiwwREFBQTtJQUFRb0IsU0FBUyxFQUFDO0VBQWMsR0FBQyxLQUU3QixlQUFBcEIsMERBQUE7SUFBR29CLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUixlQUdMcEIsMERBQUE7SUFBSW9CLFNBQVMsRUFBQztFQUE2QixHQUVuQ2hCLEtBQUssQ0FBQ29CLFVBQVUsSUFBSXBCLEtBQUssQ0FBQ29CLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLFNBQVM7SUFBQSxvQkFBSTFCLDBEQUFBLENBQUNDLGtEQUFTO01BQUMwQixHQUFHLEVBQUVELFNBQVMsQ0FBQ1gsRUFBRztNQUNsQlcsU0FBUyxFQUFFQSxTQUFVO01BQ3JCRSxpQkFBaUIsRUFBRWQ7SUFBc0IsQ0FBQyxDQUFDO0VBQUEsRUFFaEgsQ0FDTixDQUFDO0FBRVg7Ozs7Ozs7O1VDN0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPcGVyYXRpb24gZnJvbSAnLi9PcGVyYXRpb24nO1xuaW1wb3J0IHtkZWxldGVPcGVyYXRpb259IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRpb25zKHByb3BzKSB7XG5cbiAgICBjb25zdCB1cGRhdGVPcGVyYXRpb25zID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBlLmN1cnJlbnRUYXJnZXQuZWxlbWVudHNcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudHMpXG5cbiAgICAgICAgcHJvcHMudXBkYXRlT3BlcmF0aW9ucyh7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgICAgICB0aW1lU3BlbnQ6IDAsXG4gICAgICAgICAgICB0YXNrOiBwcm9wcy50YXNrXG4gICAgICAgIH0pXG5cbiAgICAgICAgZWxlbWVudHNbMF0udmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlT3BlcmF0aW9uID0gKGlkKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICBkZWxldGVPcGVyYXRpb24oaWQsIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZm9ybSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXBkYXRlT3BlcmF0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9wZXJhdGlvbnMgJiYgcHJvcHMub3BlcmF0aW9ucy5tYXAob3BlcmF0aW9uID0+IDxPcGVyYXRpb24ga2V5PXtvcGVyYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvcGVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGM0ODRlMTIzNjA2MzRmMGJiYTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJPcGVyYXRpb24iLCJkZWxldGVPcGVyYXRpb24iLCJPcGVyYXRpb25zIiwicHJvcHMiLCJ1cGRhdGVPcGVyYXRpb25zIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudHMiLCJjdXJyZW50VGFyZ2V0IiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInRpbWVTcGVudCIsInRhc2siLCJoYW5kbGVSZW1vdmVPcGVyYXRpb24iLCJpZCIsImRhdGEiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvcGVyYXRpb25zIiwibWFwIiwib3BlcmF0aW9uIiwia2V5Iiwib25SZW1vdmVPcGVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9