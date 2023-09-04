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
/******/ 	__webpack_require__.h = () => ("48dcf1ac187689e5daec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kODJlMjEyNWNhMWJiZjA5MWIwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0Y7QUFDYztBQUVuQyxTQUFTSSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBQUMsU0FBQSxHQUFvQ0wsK0NBQVEsQ0FBQ0ksS0FBSyxDQUFDRSxVQUFVLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBdkRDLFVBQVUsR0FBQUMsVUFBQTtJQUFFRSxhQUFhLEdBQUFGLFVBQUE7RUFDaENHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxVQUFVLENBQUM7RUFFdkIsSUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNELFFBQVE7SUFDekM7O0lBRUFYLEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUM7TUFDbkJLLFdBQVcsRUFBRUYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO01BQzlCQyxTQUFTLEVBQUUsQ0FBQztNQUNaQyxJQUFJLEVBQUVoQixLQUFLLENBQUNnQjtJQUNoQixDQUFDLENBQUM7SUFFRkwsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLLEdBQUcsRUFBRTtFQUMxQixDQUFDO0VBRUQsSUFBTUcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBSUMsRUFBRSxFQUFLO0lBQ2xDO0lBQ0FwQixnRUFBZSxDQUFDb0IsRUFBRSxFQUFFLFVBQUFDLElBQUksRUFBSTtNQUN4QjtNQUNBZCxhQUFhLENBQUNILFVBQVUsQ0FBQ2tCLE1BQU0sQ0FBQyxVQUFBQyxTQUFTO1FBQUEsT0FBSUEsU0FBUyxDQUFDSCxFQUFFLEtBQUtBLEVBQUU7TUFBQSxFQUFDLENBQUM7TUFDbEVaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxVQUFVLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUNJUCwwREFBQSxDQUFBQSx1REFBQSxRQUVRSyxLQUFLLENBQUN3QixJQUFJLEtBQUssSUFBSSxpQkFDZjdCLDBEQUFBO0lBQUs4QixTQUFTLEVBQUM7RUFBVyxnQkFDdEI5QiwwREFBQTtJQUFNK0IsUUFBUSxFQUFFbEI7RUFBaUIsZ0JBQzdCYiwwREFBQTtJQUFLOEIsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCOUIsMERBQUE7SUFBT2dDLElBQUksRUFBQyxNQUFNO0lBQ1hGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxXQUFXLEVBQUM7RUFBdUIsQ0FBQyxDQUFDLGVBRTVDakMsMERBQUE7SUFBSzhCLFNBQVMsRUFBQztFQUFvQixnQkFDL0I5QiwwREFBQTtJQUFROEIsU0FBUyxFQUFDO0VBQWMsR0FBQyxLQUU3QixlQUFBOUIsMERBQUE7SUFBRzhCLFNBQVMsRUFBQztFQUF5QixDQUFJLENBQ3RDLENBQ1AsQ0FDSixDQUNILENBQ0wsQ0FDUixlQUdMOUIsMERBQUE7SUFBSThCLFNBQVMsRUFBQztFQUE2QixHQUVuQ3pCLEtBQUssQ0FBQ0UsVUFBVSxJQUFJRixLQUFLLENBQUNFLFVBQVUsQ0FBQzJCLEdBQUcsQ0FBQyxVQUFBUixTQUFTO0lBQUEsb0JBQUkxQiwwREFBQSxDQUFDRSxrREFBUztNQUFDaUMsR0FBRyxFQUFFVCxTQUFTLENBQUNILEVBQUc7TUFDOUJHLFNBQVMsRUFBRUEsU0FBVTtNQUNyQlUsaUJBQWlCLEVBQUVkO0lBQXNCLENBQUMsQ0FBQztFQUFBLEVBRXBHLENBQ04sQ0FBQztBQUVYOzs7Ozs7OztVQ2pFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2NvbXBvbmVudHMvT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gJy4vT3BlcmF0aW9uJztcbmltcG9ydCB7ZGVsZXRlT3BlcmF0aW9ufSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3BlcmF0aW9ucyhwcm9wcykge1xuXG4gICAgY29uc3QgW29wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnNdID0gdXNlU3RhdGUocHJvcHMub3BlcmF0aW9ucylcbiAgICBjb25zb2xlLmxvZyhvcGVyYXRpb25zKVxuXG4gICAgY29uc3QgdXBkYXRlT3BlcmF0aW9ucyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZS5jdXJyZW50VGFyZ2V0LmVsZW1lbnRzXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRzKVxuXG4gICAgICAgIHByb3BzLnVwZGF0ZU9wZXJhdGlvbnMoe1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICAgICAgdGltZVNwZW50OiAwLFxuICAgICAgICAgICAgdGFzazogcHJvcHMudGFza1xuICAgICAgICB9KVxuXG4gICAgICAgIGVsZW1lbnRzWzBdLnZhbHVlID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZU9wZXJhdGlvbiA9IChpZCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZClcbiAgICAgICAgZGVsZXRlT3BlcmF0aW9uKGlkLCBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBzZXRPcGVyYXRpb25zKG9wZXJhdGlvbnMuZmlsdGVyKG9wZXJhdGlvbiA9PiBvcGVyYXRpb24uaWQgIT09IGlkKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wZXJhdGlvbnMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5mb3JtID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVPcGVyYXRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3BlcmF0aW9ucyAmJiBwcm9wcy5vcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZU9wZXJhdGlvbj17aGFuZGxlUmVtb3ZlT3BlcmF0aW9ufS8+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0OGRjZjFhYzE4NzY4OWU1ZGFlY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9uIiwiZGVsZXRlT3BlcmF0aW9uIiwiT3BlcmF0aW9ucyIsInByb3BzIiwiX3VzZVN0YXRlIiwib3BlcmF0aW9ucyIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldE9wZXJhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlT3BlcmF0aW9ucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnRzIiwiY3VycmVudFRhcmdldCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJ0aW1lU3BlbnQiLCJ0YXNrIiwiaGFuZGxlUmVtb3ZlT3BlcmF0aW9uIiwiaWQiLCJkYXRhIiwiZmlsdGVyIiwib3BlcmF0aW9uIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFwIiwia2V5Iiwib25SZW1vdmVPcGVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9