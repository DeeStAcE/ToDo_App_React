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

    props.updateOperations({
      description: elements[0].value,
      timeSpent: 0,
      task: props.task
    });
    elements[0].value = "";
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
/******/ 	__webpack_require__.h = () => ("ebc19b09022c56dae5ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMTk4NTA0ZmEzYTA0YWEzNjgxMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUVyQixTQUFTRSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekM7O0lBRUFKLEtBQUssQ0FBQ0MsZ0JBQWdCLENBQUM7TUFDbkJLLFdBQVcsRUFBRUYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO01BQzlCQyxTQUFTLEVBQUUsQ0FBQztNQUNaQyxJQUFJLEVBQUVULEtBQUssQ0FBQ1M7SUFDaEIsQ0FBQyxDQUFDO0lBRUZMLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFHLEVBQUU7RUFDMUIsQ0FBQztFQUVELG9CQUNJViwwREFBQSxDQUFBQSx1REFBQSxRQUVRRyxLQUFLLENBQUNZLElBQUksS0FBSyxJQUFJLGlCQUNmZiwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQVcsZ0JBQ3RCaEIsMERBQUE7SUFBTWlCLFFBQVEsRUFBRWI7RUFBaUIsZ0JBQzdCSiwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCaEIsMERBQUE7SUFBT2tCLElBQUksRUFBQyxNQUFNO0lBQ1hGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxXQUFXLEVBQUM7RUFBdUIsQ0FBQyxDQUFDLGVBRTVDbkIsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFvQixnQkFDL0JoQiwwREFBQTtJQUFRZ0IsU0FBUyxFQUFDO0VBQWMsR0FBQyxLQUU3QixlQUFBaEIsMERBQUE7SUFBR2dCLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUixlQUdMaEIsMERBQUE7SUFBSWdCLFNBQVMsRUFBQztFQUE2QixHQUVuQ2IsS0FBSyxDQUFDaUIsVUFBVSxJQUFJakIsS0FBSyxDQUFDaUIsVUFBVSxDQUFDQyxHQUFHLENBQUMsVUFBQUMsU0FBUztJQUFBLG9CQUFJdEIsMERBQUEsQ0FBQ0Msa0RBQVM7TUFBQ3NCLEdBQUcsRUFBRUQsU0FBUyxDQUFDRSxFQUFHO01BQ2xCRixTQUFTLEVBQUVBO0lBQVUsQ0FBQyxDQUFDO0VBQUEsRUFFNUYsQ0FDTixDQUFDO0FBRVg7Ozs7Ozs7O1VDbkRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPcGVyYXRpb24gZnJvbSAnLi9PcGVyYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRpb25zKHByb3BzKSB7XG5cbiAgICBjb25zdCB1cGRhdGVPcGVyYXRpb25zID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBlLmN1cnJlbnRUYXJnZXQuZWxlbWVudHNcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudHMpXG5cbiAgICAgICAgcHJvcHMudXBkYXRlT3BlcmF0aW9ucyh7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgICAgICB0aW1lU3BlbnQ6IDAsXG4gICAgICAgICAgICB0YXNrOiBwcm9wcy50YXNrXG4gICAgICAgIH0pXG5cbiAgICAgICAgZWxlbWVudHNbMF0udmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5mb3JtID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVPcGVyYXRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3BlcmF0aW9ucyAmJiBwcm9wcy5vcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbn0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWJjMTliMDkwMjJjNTZkYWU1YmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJPcGVyYXRpb24iLCJPcGVyYXRpb25zIiwicHJvcHMiLCJ1cGRhdGVPcGVyYXRpb25zIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudHMiLCJjdXJyZW50VGFyZ2V0IiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInRpbWVTcGVudCIsInRhc2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvcGVyYXRpb25zIiwibWFwIiwib3BlcmF0aW9uIiwia2V5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9