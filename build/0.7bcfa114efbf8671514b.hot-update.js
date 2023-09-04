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
/******/ 	__webpack_require__.h = () => ("5ce5b3da247ec2b064d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YmNmYTExNGVmYmY4NjcxNTE0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2I7QUFDYztBQUVuQyxTQUFTSyxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBQUMsU0FBQSxHQUFvQ04sK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NHLFVBQVUsR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFFaENOLGdEQUFTLENBQUMsWUFBTTtJQUNaUyxhQUFhLENBQUNMLEtBQUssQ0FBQ0ksVUFBVSxDQUFDO0lBQy9CRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDSSxVQUFVLENBQUM7RUFDakMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUdOLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLENBQUMsRUFBSztJQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVsQixJQUFNQyxRQUFRLEdBQUdGLENBQUMsQ0FBQ0csYUFBYSxDQUFDRCxRQUFRO0lBQ3pDOztJQUVBWCxLQUFLLENBQUNRLGdCQUFnQixDQUFDO01BQ25CSyxXQUFXLEVBQUVGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSztNQUM5QkMsU0FBUyxFQUFFLENBQUM7TUFDWkMsSUFBSSxFQUFFaEIsS0FBSyxDQUFDZ0I7SUFDaEIsQ0FBQyxDQUFDO0lBRUZMLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFHLEVBQUU7RUFDMUIsQ0FBQztFQUVELElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUlDLEVBQUUsRUFBSztJQUNsQztJQUNBcEIsZ0VBQWUsQ0FBQ29CLEVBQUUsRUFBRSxVQUFBQyxJQUFJLEVBQUk7TUFDeEI7TUFDQTtJQUFBLENBQ0gsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSXpCLDBEQUFBLENBQUFBLHVEQUFBLFFBRVFNLEtBQUssQ0FBQ3NCLElBQUksS0FBSyxJQUFJLGlCQUNmNUIsMERBQUE7SUFBSzZCLFNBQVMsRUFBQztFQUFXLGdCQUN0QjdCLDBEQUFBO0lBQU04QixRQUFRLEVBQUVoQjtFQUFpQixnQkFDN0JkLDBEQUFBO0lBQUs2QixTQUFTLEVBQUM7RUFBYSxnQkFDeEI3QiwwREFBQTtJQUFPK0IsSUFBSSxFQUFDLE1BQU07SUFDWEYsU0FBUyxFQUFDLGNBQWM7SUFDeEJHLFdBQVcsRUFBQztFQUF1QixDQUFDLENBQUMsZUFFNUNoQywwREFBQTtJQUFLNkIsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjdCLDBEQUFBO0lBQVE2QixTQUFTLEVBQUM7RUFBYyxHQUFDLEtBRTdCLGVBQUE3QiwwREFBQTtJQUFHNkIsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FDUCxDQUNKLENBQ0gsQ0FDTCxDQUNSLGVBR0w3QiwwREFBQTtJQUFJNkIsU0FBUyxFQUFDO0VBQTZCLEdBRW5DdkIsS0FBSyxDQUFDSSxVQUFVLElBQUlKLEtBQUssQ0FBQ0ksVUFBVSxDQUFDdUIsR0FBRyxDQUFDLFVBQUFDLFNBQVM7SUFBQSxvQkFBSWxDLDBEQUFBLENBQUNHLGtEQUFTO01BQUNnQyxHQUFHLEVBQUVELFNBQVMsQ0FBQ1YsRUFBRztNQUNsQlUsU0FBUyxFQUFFQSxTQUFVO01BQ3JCRSxpQkFBaUIsRUFBRWI7SUFBc0IsQ0FBQyxDQUFDO0VBQUEsRUFFaEgsQ0FDTixDQUFDO0FBRVg7Ozs7Ozs7O1VDckVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tICcuL09wZXJhdGlvbic7XG5pbXBvcnQge2RlbGV0ZU9wZXJhdGlvbn0gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbnMocHJvcHMpIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRPcGVyYXRpb25zKHByb3BzLm9wZXJhdGlvbnMpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLm9wZXJhdGlvbnMpXG4gICAgfSwgW10pO1xuXG5cbiAgICBjb25zdCB1cGRhdGVPcGVyYXRpb25zID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBlLmN1cnJlbnRUYXJnZXQuZWxlbWVudHNcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudHMpXG5cbiAgICAgICAgcHJvcHMudXBkYXRlT3BlcmF0aW9ucyh7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgICAgICB0aW1lU3BlbnQ6IDAsXG4gICAgICAgICAgICB0YXNrOiBwcm9wcy50YXNrXG4gICAgICAgIH0pXG5cbiAgICAgICAgZWxlbWVudHNbMF0udmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlT3BlcmF0aW9uID0gKGlkKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICBkZWxldGVPcGVyYXRpb24oaWQsIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIC8vIHNldE9wZXJhdGlvbnMob3BlcmF0aW9ucy5maWx0ZXIob3BlcmF0aW9uID0+IG9wZXJhdGlvbi5pZCAhPT0gaWQpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZm9ybSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXBkYXRlT3BlcmF0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9wZXJhdGlvbnMgJiYgcHJvcHMub3BlcmF0aW9ucy5tYXAob3BlcmF0aW9uID0+IDxPcGVyYXRpb24ga2V5PXtvcGVyYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvcGVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWNlNWIzZGEyNDdlYzJiMDY0ZDRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbiIsImRlbGV0ZU9wZXJhdGlvbiIsIk9wZXJhdGlvbnMiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZU9wZXJhdGlvbnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50cyIsImN1cnJlbnRUYXJnZXQiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwidGltZVNwZW50IiwidGFzayIsImhhbmRsZVJlbW92ZU9wZXJhdGlvbiIsImlkIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hcCIsIm9wZXJhdGlvbiIsImtleSIsIm9uUmVtb3ZlT3BlcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==