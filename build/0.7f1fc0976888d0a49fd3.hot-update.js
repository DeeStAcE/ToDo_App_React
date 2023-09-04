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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.operations),
    _useState2 = _slicedToArray(_useState, 2),
    operations = _useState2[0],
    setOperations = _useState2[1];
  console.log(operations);
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
/******/ 	__webpack_require__.h = () => ("d82e2125ca1bbf091b0d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZjFmYzA5NzY4ODhkMGE0OWZkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0Y7QUFDYztBQUVuQyxTQUFTSSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBQUMsU0FBQSxHQUFvQ0wsK0NBQVEsQ0FBQ0ksS0FBSyxDQUFDRSxVQUFVLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBdkRDLFVBQVUsR0FBQUMsVUFBQTtJQUFFRSxhQUFhLEdBQUFGLFVBQUE7RUFDaENHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxVQUFVLENBQUM7RUFFdkIsSUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekM7O0lBRUFYLEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUM7TUFDbkJLLFdBQVcsRUFBRUYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO01BQzlCQyxTQUFTLEVBQUUsQ0FBQztNQUNaQyxJQUFJLEVBQUVoQixLQUFLLENBQUNnQjtJQUNoQixDQUFDLENBQUM7SUFFRkwsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLLEdBQUcsRUFBRTtFQUMxQixDQUFDO0VBRUQsSUFBTUcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBSUMsRUFBRSxFQUFLO0lBQ2xDO0lBQ0FwQixnRUFBZSxDQUFDb0IsRUFBRSxFQUFFLFVBQUFDLElBQUksRUFBSTtNQUN4QjtNQUNBO0lBQUEsQ0FDSCxDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUNJeEIsMERBQUEsQ0FBQUEsdURBQUEsUUFFUUssS0FBSyxDQUFDc0IsSUFBSSxLQUFLLElBQUksaUJBQ2YzQiwwREFBQTtJQUFLNEIsU0FBUyxFQUFDO0VBQVcsZ0JBQ3RCNUIsMERBQUE7SUFBTTZCLFFBQVEsRUFBRWhCO0VBQWlCLGdCQUM3QmIsMERBQUE7SUFBSzRCLFNBQVMsRUFBQztFQUFhLGdCQUN4QjVCLDBEQUFBO0lBQU84QixJQUFJLEVBQUMsTUFBTTtJQUNYRixTQUFTLEVBQUMsY0FBYztJQUN4QkcsV0FBVyxFQUFDO0VBQXVCLENBQUMsQ0FBQyxlQUU1Qy9CLDBEQUFBO0lBQUs0QixTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CNUIsMERBQUE7SUFBUTRCLFNBQVMsRUFBQztFQUFjLEdBQUMsS0FFN0IsZUFBQTVCLDBEQUFBO0lBQUc0QixTQUFTLEVBQUM7RUFBeUIsQ0FBSSxDQUN0QyxDQUNQLENBQ0osQ0FDSCxDQUNMLENBQ1IsZUFHTDVCLDBEQUFBO0lBQUk0QixTQUFTLEVBQUM7RUFBNkIsR0FFbkN2QixLQUFLLENBQUNFLFVBQVUsSUFBSUYsS0FBSyxDQUFDRSxVQUFVLENBQUN5QixHQUFHLENBQUMsVUFBQUMsU0FBUztJQUFBLG9CQUFJakMsMERBQUEsQ0FBQ0Usa0RBQVM7TUFBQ2dDLEdBQUcsRUFBRUQsU0FBUyxDQUFDVixFQUFHO01BQzlCVSxTQUFTLEVBQUVBLFNBQVU7TUFDckJFLGlCQUFpQixFQUFFYjtJQUFzQixDQUFDLENBQUM7RUFBQSxFQUVwRyxDQUNOLENBQUM7QUFFWDs7Ozs7Ozs7VUNoRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tICcuL09wZXJhdGlvbic7XG5pbXBvcnQge2RlbGV0ZU9wZXJhdGlvbn0gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbnMocHJvcHMpIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKHByb3BzLm9wZXJhdGlvbnMpXG4gICAgY29uc29sZS5sb2cob3BlcmF0aW9ucylcblxuICAgIGNvbnN0IHVwZGF0ZU9wZXJhdGlvbnMgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGUuY3VycmVudFRhcmdldC5lbGVtZW50c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuICAgICAgICBwcm9wcy51cGRhdGVPcGVyYXRpb25zKHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbGVtZW50c1swXS52YWx1ZSxcbiAgICAgICAgICAgIHRpbWVTcGVudDogMCxcbiAgICAgICAgICAgIHRhc2s6IHByb3BzLnRhc2tcbiAgICAgICAgfSlcblxuICAgICAgICBlbGVtZW50c1swXS52YWx1ZSA9IFwiXCJcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVPcGVyYXRpb24gPSAoaWQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWQpXG4gICAgICAgIGRlbGV0ZU9wZXJhdGlvbihpZCwgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgLy8gc2V0T3BlcmF0aW9ucyhvcGVyYXRpb25zLmZpbHRlcihvcGVyYXRpb24gPT4gb3BlcmF0aW9uLmlkICE9PSBpZCkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5mb3JtID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVPcGVyYXRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3BlcmF0aW9ucyAmJiBwcm9wcy5vcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZU9wZXJhdGlvbj17aGFuZGxlUmVtb3ZlT3BlcmF0aW9ufS8+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkODJlMjEyNWNhMWJiZjA5MWIwZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9uIiwiZGVsZXRlT3BlcmF0aW9uIiwiT3BlcmF0aW9ucyIsInByb3BzIiwiX3VzZVN0YXRlIiwib3BlcmF0aW9ucyIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldE9wZXJhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlT3BlcmF0aW9ucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnRzIiwiY3VycmVudFRhcmdldCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJ0aW1lU3BlbnQiLCJ0YXNrIiwiaGFuZGxlUmVtb3ZlT3BlcmF0aW9uIiwiaWQiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFwIiwib3BlcmF0aW9uIiwia2V5Iiwib25SZW1vdmVPcGVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9