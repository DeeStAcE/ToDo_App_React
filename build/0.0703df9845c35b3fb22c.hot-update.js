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
  }, operations && operations.map(function (operation) {
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
/******/ 	__webpack_require__.h = () => ("7f1fc0976888d0a49fd3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNzAzZGY5ODQ1YzM1YjNmYjIyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0Y7QUFDYztBQUVuQyxTQUFTSSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBQUMsU0FBQSxHQUFvQ0wsK0NBQVEsQ0FBQ0ksS0FBSyxDQUFDRSxVQUFVLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBdkRDLFVBQVUsR0FBQUMsVUFBQTtJQUFFRSxhQUFhLEdBQUFGLFVBQUE7RUFFaEMsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekM7O0lBRUFULEtBQUssQ0FBQ00sZ0JBQWdCLENBQUM7TUFDbkJLLFdBQVcsRUFBRUYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO01BQzlCQyxTQUFTLEVBQUUsQ0FBQztNQUNaQyxJQUFJLEVBQUVkLEtBQUssQ0FBQ2M7SUFDaEIsQ0FBQyxDQUFDO0lBRUZMLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFHLEVBQUU7RUFDMUIsQ0FBQztFQUVELElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUlDLEVBQUUsRUFBSztJQUNsQztJQUNBbEIsZ0VBQWUsQ0FBQ2tCLEVBQUUsRUFBRSxVQUFBQyxJQUFJLEVBQUk7TUFDeEI7TUFDQTtJQUFBLENBQ0gsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSXRCLDBEQUFBLENBQUFBLHVEQUFBLFFBRVFLLEtBQUssQ0FBQ29CLElBQUksS0FBSyxJQUFJLGlCQUNmekIsMERBQUE7SUFBSzBCLFNBQVMsRUFBQztFQUFXLGdCQUN0QjFCLDBEQUFBO0lBQU0yQixRQUFRLEVBQUVoQjtFQUFpQixnQkFDN0JYLDBEQUFBO0lBQUswQixTQUFTLEVBQUM7RUFBYSxnQkFDeEIxQiwwREFBQTtJQUFPNEIsSUFBSSxFQUFDLE1BQU07SUFDWEYsU0FBUyxFQUFDLGNBQWM7SUFDeEJHLFdBQVcsRUFBQztFQUF1QixDQUFDLENBQUMsZUFFNUM3QiwwREFBQTtJQUFLMEIsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjFCLDBEQUFBO0lBQVEwQixTQUFTLEVBQUM7RUFBYyxHQUFDLEtBRTdCLGVBQUExQiwwREFBQTtJQUFHMEIsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FDUCxDQUNKLENBQ0gsQ0FDTCxDQUNSLGVBR0wxQiwwREFBQTtJQUFJMEIsU0FBUyxFQUFDO0VBQTZCLEdBRW5DbkIsVUFBVSxJQUFJQSxVQUFVLENBQUN1QixHQUFHLENBQUMsVUFBQUMsU0FBUztJQUFBLG9CQUFJL0IsMERBQUEsQ0FBQ0Usa0RBQVM7TUFBQzhCLEdBQUcsRUFBRUQsU0FBUyxDQUFDVixFQUFHO01BQ2xCVSxTQUFTLEVBQUVBLFNBQVU7TUFDckJFLGlCQUFpQixFQUFFYjtJQUFzQixDQUFDLENBQUM7RUFBQSxFQUVwRyxDQUNOLENBQUM7QUFFWDs7Ozs7Ozs7VUMvREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tICcuL09wZXJhdGlvbic7XG5pbXBvcnQge2RlbGV0ZU9wZXJhdGlvbn0gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbnMocHJvcHMpIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKHByb3BzLm9wZXJhdGlvbnMpXG5cbiAgICBjb25zdCB1cGRhdGVPcGVyYXRpb25zID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBlLmN1cnJlbnRUYXJnZXQuZWxlbWVudHNcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudHMpXG5cbiAgICAgICAgcHJvcHMudXBkYXRlT3BlcmF0aW9ucyh7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgICAgICB0aW1lU3BlbnQ6IDAsXG4gICAgICAgICAgICB0YXNrOiBwcm9wcy50YXNrXG4gICAgICAgIH0pXG5cbiAgICAgICAgZWxlbWVudHNbMF0udmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlT3BlcmF0aW9uID0gKGlkKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICBkZWxldGVPcGVyYXRpb24oaWQsIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIC8vIHNldE9wZXJhdGlvbnMob3BlcmF0aW9ucy5maWx0ZXIob3BlcmF0aW9uID0+IG9wZXJhdGlvbi5pZCAhPT0gaWQpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZm9ybSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXBkYXRlT3BlcmF0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbnMgJiYgb3BlcmF0aW9ucy5tYXAob3BlcmF0aW9uID0+IDxPcGVyYXRpb24ga2V5PXtvcGVyYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvcGVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2YxZmMwOTc2ODg4ZDBhNDlmZDNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk9wZXJhdGlvbiIsImRlbGV0ZU9wZXJhdGlvbiIsIk9wZXJhdGlvbnMiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIm9wZXJhdGlvbnMiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRPcGVyYXRpb25zIiwidXBkYXRlT3BlcmF0aW9ucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnRzIiwiY3VycmVudFRhcmdldCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJ0aW1lU3BlbnQiLCJ0YXNrIiwiaGFuZGxlUmVtb3ZlT3BlcmF0aW9uIiwiaWQiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFwIiwib3BlcmF0aW9uIiwia2V5Iiwib25SZW1vdmVPcGVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9