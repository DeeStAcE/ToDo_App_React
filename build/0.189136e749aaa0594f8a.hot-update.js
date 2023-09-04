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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Operations(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    operations = _useState2[0],
    setOperations = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setOperations(props.operations);
    console.log(props.operations);
  }, []);
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
      setOperations(operations.filter(function (operation) {
        return operation.id !== id;
      }));
      console.log(operations);
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
/******/ 	__webpack_require__.h = () => ("7bcfa114efbf8671514b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xODkxMzZlNzQ5YWFhMDU5NGY4YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2I7QUFDYztBQUVuQyxTQUFTSyxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBQUMsU0FBQSxHQUFvQ04sK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NHLFVBQVUsR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFFaENOLGdEQUFTLENBQUMsWUFBTTtJQUNaUyxhQUFhLENBQUNMLEtBQUssQ0FBQ0ksVUFBVSxDQUFDO0lBQy9CRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDSSxVQUFVLENBQUM7RUFDakMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUdOLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLENBQUMsRUFBSztJQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVsQixJQUFNQyxRQUFRLEdBQUdGLENBQUMsQ0FBQ0csYUFBYSxDQUFDRCxRQUFRO0lBQ3pDOztJQUVBWCxLQUFLLENBQUNRLGdCQUFnQixDQUFDO01BQ25CSyxXQUFXLEVBQUVGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSztNQUM5QkMsU0FBUyxFQUFFLENBQUM7TUFDWkMsSUFBSSxFQUFFaEIsS0FBSyxDQUFDZ0I7SUFDaEIsQ0FBQyxDQUFDO0lBRUZMLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFHLEVBQUU7RUFDMUIsQ0FBQztFQUVELElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUlDLEVBQUUsRUFBSztJQUNsQztJQUNBcEIsZ0VBQWUsQ0FBQ29CLEVBQUUsRUFBRSxVQUFBQyxJQUFJLEVBQUk7TUFDeEI7TUFDQWQsYUFBYSxDQUFDRCxVQUFVLENBQUNnQixNQUFNLENBQUMsVUFBQUMsU0FBUztRQUFBLE9BQUlBLFNBQVMsQ0FBQ0gsRUFBRSxLQUFLQSxFQUFFO01BQUEsRUFBQyxDQUFDO01BQ2xFWixPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDO0lBQzNCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSVYsMERBQUEsQ0FBQUEsdURBQUEsUUFFUU0sS0FBSyxDQUFDd0IsSUFBSSxLQUFLLElBQUksaUJBQ2Y5QiwwREFBQTtJQUFLK0IsU0FBUyxFQUFDO0VBQVcsZ0JBQ3RCL0IsMERBQUE7SUFBTWdDLFFBQVEsRUFBRWxCO0VBQWlCLGdCQUM3QmQsMERBQUE7SUFBSytCLFNBQVMsRUFBQztFQUFhLGdCQUN4Qi9CLDBEQUFBO0lBQU9pQyxJQUFJLEVBQUMsTUFBTTtJQUNYRixTQUFTLEVBQUMsY0FBYztJQUN4QkcsV0FBVyxFQUFDO0VBQXVCLENBQUMsQ0FBQyxlQUU1Q2xDLDBEQUFBO0lBQUsrQixTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CL0IsMERBQUE7SUFBUStCLFNBQVMsRUFBQztFQUFjLEdBQUMsS0FFN0IsZUFBQS9CLDBEQUFBO0lBQUcrQixTQUFTLEVBQUM7RUFBeUIsQ0FBSSxDQUN0QyxDQUNQLENBQ0osQ0FDSCxDQUNMLENBQ1IsZUFHTC9CLDBEQUFBO0lBQUkrQixTQUFTLEVBQUM7RUFBNkIsR0FFbkN6QixLQUFLLENBQUNJLFVBQVUsSUFBSUosS0FBSyxDQUFDSSxVQUFVLENBQUN5QixHQUFHLENBQUMsVUFBQVIsU0FBUztJQUFBLG9CQUFJM0IsMERBQUEsQ0FBQ0csa0RBQVM7TUFBQ2lDLEdBQUcsRUFBRVQsU0FBUyxDQUFDSCxFQUFHO01BQ2xCRyxTQUFTLEVBQUVBLFNBQVU7TUFDckJVLGlCQUFpQixFQUFFZDtJQUFzQixDQUFDLENBQUM7RUFBQSxFQUVoSCxDQUNOLENBQUM7QUFFWDs7Ozs7Ozs7VUN0RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gJy4vT3BlcmF0aW9uJztcbmltcG9ydCB7ZGVsZXRlT3BlcmF0aW9ufSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3BlcmF0aW9ucyhwcm9wcykge1xuXG4gICAgY29uc3QgW29wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnNdID0gdXNlU3RhdGUobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldE9wZXJhdGlvbnMocHJvcHMub3BlcmF0aW9ucylcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMub3BlcmF0aW9ucylcbiAgICB9LCBbXSk7XG5cblxuICAgIGNvbnN0IHVwZGF0ZU9wZXJhdGlvbnMgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGUuY3VycmVudFRhcmdldC5lbGVtZW50c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuICAgICAgICBwcm9wcy51cGRhdGVPcGVyYXRpb25zKHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgICAgIHRpbWVTcGVudDogMCxcbiAgICAgICAgICAgIHRhc2s6IHByb3BzLnRhc2tcbiAgICAgICAgfSlcblxuICAgICAgICBlbGVtZW50c1swXS52YWx1ZSA9IFwiXCJcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVPcGVyYXRpb24gPSAoaWQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWQpXG4gICAgICAgIGRlbGV0ZU9wZXJhdGlvbihpZCwgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgc2V0T3BlcmF0aW9ucyhvcGVyYXRpb25zLmZpbHRlcihvcGVyYXRpb24gPT4gb3BlcmF0aW9uLmlkICE9PSBpZCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcGVyYXRpb25zKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZm9ybSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXBkYXRlT3BlcmF0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9wZXJhdGlvbnMgJiYgcHJvcHMub3BlcmF0aW9ucy5tYXAob3BlcmF0aW9uID0+IDxPcGVyYXRpb24ga2V5PXtvcGVyYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvcGVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2JjZmExMTRlZmJmODY3MTUxNGJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbiIsImRlbGV0ZU9wZXJhdGlvbiIsIk9wZXJhdGlvbnMiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZU9wZXJhdGlvbnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50cyIsImN1cnJlbnRUYXJnZXQiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwidGltZVNwZW50IiwidGFzayIsImhhbmRsZVJlbW92ZU9wZXJhdGlvbiIsImlkIiwiZGF0YSIsImZpbHRlciIsIm9wZXJhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hcCIsImtleSIsIm9uUmVtb3ZlT3BlcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==