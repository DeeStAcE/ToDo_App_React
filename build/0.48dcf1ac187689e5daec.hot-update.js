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
  }, []);
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
/******/ 	__webpack_require__.h = () => ("f72b401494a0b7a7ba89")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OGRjZjFhYzE4NzY4OWU1ZGFlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2I7QUFDYztBQUVuQyxTQUFTSyxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdEMsSUFBQUMsU0FBQSxHQUFvQ04sK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NHLFVBQVUsR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFFaENOLGdEQUFTLENBQUMsWUFBTTtJQUNaUyxhQUFhLENBQUNMLEtBQUssQ0FBQ0ksVUFBVSxDQUFDO0VBQ25DLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILFVBQVUsQ0FBQztFQUV2QixJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJQyxDQUFDLEVBQUs7SUFDNUJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFbEIsSUFBTUMsUUFBUSxHQUFHRixDQUFDLENBQUNHLGFBQWEsQ0FBQ0QsUUFBUTtJQUN6Qzs7SUFFQVgsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQztNQUNuQkssV0FBVyxFQUFFRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUs7TUFDOUJDLFNBQVMsRUFBRSxDQUFDO01BQ1pDLElBQUksRUFBRWhCLEtBQUssQ0FBQ2dCO0lBQ2hCLENBQUMsQ0FBQztJQUVGTCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUssR0FBRyxFQUFFO0VBQzFCLENBQUM7RUFFRCxJQUFNRyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFJQyxFQUFFLEVBQUs7SUFDbEM7SUFDQXBCLGdFQUFlLENBQUNvQixFQUFFLEVBQUUsVUFBQUMsSUFBSSxFQUFJO01BQ3hCO01BQ0FkLGFBQWEsQ0FBQ0QsVUFBVSxDQUFDZ0IsTUFBTSxDQUFDLFVBQUFDLFNBQVM7UUFBQSxPQUFJQSxTQUFTLENBQUNILEVBQUUsS0FBS0EsRUFBRTtNQUFBLEVBQUMsQ0FBQztNQUNsRVosT0FBTyxDQUFDQyxHQUFHLENBQUNILFVBQVUsQ0FBQztJQUMzQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0lWLDBEQUFBLENBQUFBLHVEQUFBLFFBRVFNLEtBQUssQ0FBQ3dCLElBQUksS0FBSyxJQUFJLGlCQUNmOUIsMERBQUE7SUFBSytCLFNBQVMsRUFBQztFQUFXLGdCQUN0Qi9CLDBEQUFBO0lBQU1nQyxRQUFRLEVBQUVsQjtFQUFpQixnQkFDN0JkLDBEQUFBO0lBQUsrQixTQUFTLEVBQUM7RUFBYSxnQkFDeEIvQiwwREFBQTtJQUFPaUMsSUFBSSxFQUFDLE1BQU07SUFDWEYsU0FBUyxFQUFDLGNBQWM7SUFDeEJHLFdBQVcsRUFBQztFQUF1QixDQUFDLENBQUMsZUFFNUNsQywwREFBQTtJQUFLK0IsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQi9CLDBEQUFBO0lBQVErQixTQUFTLEVBQUM7RUFBYyxHQUFDLEtBRTdCLGVBQUEvQiwwREFBQTtJQUFHK0IsU0FBUyxFQUFDO0VBQXlCLENBQUksQ0FDdEMsQ0FDUCxDQUNKLENBQ0gsQ0FDTCxDQUNSLGVBR0wvQiwwREFBQTtJQUFJK0IsU0FBUyxFQUFDO0VBQTZCLEdBRW5DekIsS0FBSyxDQUFDSSxVQUFVLElBQUlKLEtBQUssQ0FBQ0ksVUFBVSxDQUFDeUIsR0FBRyxDQUFDLFVBQUFSLFNBQVM7SUFBQSxvQkFBSTNCLDBEQUFBLENBQUNHLGtEQUFTO01BQUNpQyxHQUFHLEVBQUVULFNBQVMsQ0FBQ0gsRUFBRztNQUNsQkcsU0FBUyxFQUFFQSxTQUFVO01BQ3JCVSxpQkFBaUIsRUFBRWQ7SUFBc0IsQ0FBQyxDQUFDO0VBQUEsRUFFaEgsQ0FDTixDQUFDO0FBRVg7Ozs7Ozs7O1VDckVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tICcuL09wZXJhdGlvbic7XG5pbXBvcnQge2RlbGV0ZU9wZXJhdGlvbn0gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbnMocHJvcHMpIHtcblxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRPcGVyYXRpb25zKHByb3BzLm9wZXJhdGlvbnMpXG4gICAgfSwgW10pO1xuICAgIGNvbnNvbGUubG9nKG9wZXJhdGlvbnMpXG5cbiAgICBjb25zdCB1cGRhdGVPcGVyYXRpb25zID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBlLmN1cnJlbnRUYXJnZXQuZWxlbWVudHNcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudHMpXG5cbiAgICAgICAgcHJvcHMudXBkYXRlT3BlcmF0aW9ucyh7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgICAgICB0aW1lU3BlbnQ6IDAsXG4gICAgICAgICAgICB0YXNrOiBwcm9wcy50YXNrXG4gICAgICAgIH0pXG5cbiAgICAgICAgZWxlbWVudHNbMF0udmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlT3BlcmF0aW9uID0gKGlkKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICBkZWxldGVPcGVyYXRpb24oaWQsIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHNldE9wZXJhdGlvbnMob3BlcmF0aW9ucy5maWx0ZXIob3BlcmF0aW9uID0+IG9wZXJhdGlvbi5pZCAhPT0gaWQpKVxuICAgICAgICAgICAgY29uc29sZS5sb2cob3BlcmF0aW9ucylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmZvcm0gPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3VwZGF0ZU9wZXJhdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vcGVyYXRpb25zICYmIHByb3BzLm9wZXJhdGlvbnMubWFwKG9wZXJhdGlvbiA9PiA8T3BlcmF0aW9uIGtleT17b3BlcmF0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj17b3BlcmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlT3BlcmF0aW9uPXtoYW5kbGVSZW1vdmVPcGVyYXRpb259Lz4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY3MmI0MDE0OTRhMGI3YTdiYTg5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPcGVyYXRpb24iLCJkZWxldGVPcGVyYXRpb24iLCJPcGVyYXRpb25zIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJvcGVyYXRpb25zIiwic2V0T3BlcmF0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVPcGVyYXRpb25zIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudHMiLCJjdXJyZW50VGFyZ2V0IiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInRpbWVTcGVudCIsInRhc2siLCJoYW5kbGVSZW1vdmVPcGVyYXRpb24iLCJpZCIsImRhdGEiLCJmaWx0ZXIiLCJvcGVyYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJrZXkiLCJvblJlbW92ZU9wZXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=