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
  console.log(props.operations);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setOperations(props.operations);
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
      // setOperations(operations.filter(operation => operation.id !== id))
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
/******/ 	__webpack_require__.h = () => ("3f088aef03cb59766e17")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41Y2U1YjNkYTI0N2VjMmIwNjRkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2I7QUFDYztBQUVuQyxTQUFTSyxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBQUMsU0FBQSxHQUFvQ04sK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NHLFVBQVUsR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFDaENJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFLLENBQUNJLFVBQVUsQ0FBQztFQUU3QlIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pTLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDSSxVQUFVLENBQUM7RUFDbkMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUdOLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLENBQUMsRUFBSztJQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVsQixJQUFNQyxRQUFRLEdBQUdGLENBQUMsQ0FBQ0csYUFBYSxDQUFDRCxRQUFRO0lBQ3pDOztJQUVBWCxLQUFLLENBQUNRLGdCQUFnQixDQUFDO01BQ25CSyxXQUFXLEVBQUVGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSztNQUM5QkMsU0FBUyxFQUFFLENBQUM7TUFDWkMsSUFBSSxFQUFFaEIsS0FBSyxDQUFDZ0I7SUFDaEIsQ0FBQyxDQUFDO0lBRUZMLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFHLEVBQUU7RUFDMUIsQ0FBQztFQUVELElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUlDLEVBQUUsRUFBSztJQUNsQztJQUNBcEIsZ0VBQWUsQ0FBQ29CLEVBQUUsRUFBRSxVQUFBQyxJQUFJLEVBQUk7TUFDeEI7TUFDQTtJQUFBLENBQ0gsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSXpCLDBEQUFBLENBQUFBLHVEQUFBLFFBRVFNLEtBQUssQ0FBQ3NCLElBQUksS0FBSyxJQUFJLGlCQUNmNUIsMERBQUE7SUFBSzZCLFNBQVMsRUFBQztFQUFXLGdCQUN0QjdCLDBEQUFBO0lBQU04QixRQUFRLEVBQUVoQjtFQUFpQixnQkFDN0JkLDBEQUFBO0lBQUs2QixTQUFTLEVBQUM7RUFBYSxnQkFDeEI3QiwwREFBQTtJQUFPK0IsSUFBSSxFQUFDLE1BQU07SUFDWEYsU0FBUyxFQUFDLGNBQWM7SUFDeEJHLFdBQVcsRUFBQztFQUF1QixDQUFDLENBQUMsZUFFNUNoQywwREFBQTtJQUFLNkIsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjdCLDBEQUFBO0lBQVE2QixTQUFTLEVBQUM7RUFBYyxHQUFDLEtBRTdCLGVBQUE3QiwwREFBQTtJQUFHNkIsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FDUCxDQUNKLENBQ0gsQ0FDTCxDQUNSLGVBR0w3QiwwREFBQTtJQUFJNkIsU0FBUyxFQUFDO0VBQTZCLEdBRW5DdkIsS0FBSyxDQUFDSSxVQUFVLElBQUlKLEtBQUssQ0FBQ0ksVUFBVSxDQUFDdUIsR0FBRyxDQUFDLFVBQUFDLFNBQVM7SUFBQSxvQkFBSWxDLDBEQUFBLENBQUNHLGtEQUFTO01BQUNnQyxHQUFHLEVBQUVELFNBQVMsQ0FBQ1YsRUFBRztNQUNsQlUsU0FBUyxFQUFFQSxTQUFVO01BQ3JCRSxpQkFBaUIsRUFBRWI7SUFBc0IsQ0FBQyxDQUFDO0VBQUEsRUFFaEgsQ0FDTixDQUFDO0FBRVg7Ozs7Ozs7O1VDckVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tICcuL09wZXJhdGlvbic7XG5pbXBvcnQge2RlbGV0ZU9wZXJhdGlvbn0gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbnMocHJvcHMpIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc29sZS5sb2cocHJvcHMub3BlcmF0aW9ucylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldE9wZXJhdGlvbnMocHJvcHMub3BlcmF0aW9ucylcbiAgICB9LCBbXSk7XG5cblxuICAgIGNvbnN0IHVwZGF0ZU9wZXJhdGlvbnMgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGUuY3VycmVudFRhcmdldC5lbGVtZW50c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuICAgICAgICBwcm9wcy51cGRhdGVPcGVyYXRpb25zKHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgICAgIHRpbWVTcGVudDogMCxcbiAgICAgICAgICAgIHRhc2s6IHByb3BzLnRhc2tcbiAgICAgICAgfSlcblxuICAgICAgICBlbGVtZW50c1swXS52YWx1ZSA9IFwiXCJcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVPcGVyYXRpb24gPSAoaWQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWQpXG4gICAgICAgIGRlbGV0ZU9wZXJhdGlvbihpZCwgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgLy8gc2V0T3BlcmF0aW9ucyhvcGVyYXRpb25zLmZpbHRlcihvcGVyYXRpb24gPT4gb3BlcmF0aW9uLmlkICE9PSBpZCkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5mb3JtID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVPcGVyYXRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3BlcmF0aW9ucyAmJiBwcm9wcy5vcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZU9wZXJhdGlvbj17aGFuZGxlUmVtb3ZlT3BlcmF0aW9ufS8+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZjA4OGFlZjAzY2I1OTc2NmUxN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT3BlcmF0aW9uIiwiZGVsZXRlT3BlcmF0aW9uIiwiT3BlcmF0aW9ucyIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlcmF0aW9ucyIsInNldE9wZXJhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlT3BlcmF0aW9ucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnRzIiwiY3VycmVudFRhcmdldCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJ0aW1lU3BlbnQiLCJ0YXNrIiwiaGFuZGxlUmVtb3ZlT3BlcmF0aW9uIiwiaWQiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFwIiwib3BlcmF0aW9uIiwia2V5Iiwib25SZW1vdmVPcGVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9