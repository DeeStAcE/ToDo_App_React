"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Operation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// TODO...

function Operation(_ref) {
  var operation = _ref.operation;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    addTimeBoolean = _useState2[0],
    setAddTimeBoolean = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    newTimeSpent = _useState4[0],
    setNewTimeSpent = _useState4[1];
  var handleAddTime = function handleAddTime(e) {
    e.preventDefault();
    var updatedOperation = _objectSpread(_objectSpread({}, operation), {}, {
      timeSpent: newTimeSpent
    });
    console.log(updatedOperation);
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_1__.updateOperation)(operation.id, updatedOperation, function (data) {
      console.log(data);
    });
    setAddTimeBoolean(false);
    setNewTimeSpent(0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, operation.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, operation.timeSpent)), addTimeBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    style: {
      width: '12rem'
    },
    value: newTimeSpent,
    onChange: function onChange(e) {
      return setNewTimeSpent(parseInt(e.target.value));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success",
    onClick: handleAddTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false"
  }))))), !addTimeBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success btn-sm mr-2",
    onClick: function onClick() {
      return setAddTimeBoolean(!addTimeBoolean);
    }
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-clock ml-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fc10549df619d95c39b0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MzQ4MDU4ZDE2NTkxOGIxNDg1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDWTs7QUFFbEQ7O0FBRWUsU0FBU0csU0FBU0EsQ0FBQUMsSUFBQSxFQUFjO0VBQUEsSUFBWkMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7RUFFeEMsSUFBQUMsU0FBQSxHQUE0Q0wsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBcERHLGNBQWMsR0FBQUYsVUFBQTtJQUFFRyxpQkFBaUIsR0FBQUgsVUFBQTtFQUN4QyxJQUFBSSxVQUFBLEdBQXdDViwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBVyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE1Q0UsWUFBWSxHQUFBRCxVQUFBO0lBQUVFLGVBQWUsR0FBQUYsVUFBQTtFQUVwQyxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLENBQUMsRUFBSztJQUN6QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVsQixJQUFNQyxnQkFBZ0IsR0FBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ2ZkLFNBQVM7TUFDWmUsU0FBUyxFQUFFUDtJQUFZLEVBQzFCO0lBRURRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixnQkFBZ0IsQ0FBQztJQUM3QmhCLGdFQUFlLENBQUNHLFNBQVMsQ0FBQ2tCLEVBQUUsRUFBRUwsZ0JBQWdCLEVBQUUsVUFBQU0sSUFBSSxFQUFJO01BQ3BESCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO0lBQ3JCLENBQUMsQ0FBQztJQUVGZCxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDeEJJLGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUVELG9CQUNJZCwwREFBQTtJQUFJMEIsU0FBUyxFQUFDO0VBQW1FLGdCQUM3RTFCLDBEQUFBLGNBQ0tLLFNBQVMsQ0FBQ3NCLFdBQVcsZUFHdEIzQiwwREFBQTtJQUFNMEIsU0FBUyxFQUFDO0VBQXFDLEdBRWhEckIsU0FBUyxDQUFDZSxTQUNqQixDQUNHLENBQUMsRUFFRlgsY0FBYyxpQkFDVlQsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQUswQixTQUFTLEVBQUM7RUFBNEIsZ0JBQ3ZDMUIsMERBQUE7SUFBTzRCLElBQUksRUFBQyxRQUFRO0lBQ2JGLFNBQVMsRUFBQyxjQUFjO0lBQ3hCRyxXQUFXLEVBQUMsdUJBQXVCO0lBQ25DQyxLQUFLLEVBQUU7TUFBQ0MsS0FBSyxFQUFFO0lBQU8sQ0FBRTtJQUN4QkMsS0FBSyxFQUFFbkIsWUFBYTtJQUNwQm9CLFFBQVEsRUFBRSxTQUFBQSxTQUFDakIsQ0FBQztNQUFBLE9BQUtGLGVBQWUsQ0FBQ29CLFFBQVEsQ0FBQ2xCLENBQUMsQ0FBQ21CLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUMsQ0FBQyxlQUNwRWhDLDBEQUFBO0lBQUswQixTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CMUIsMERBQUE7SUFBUTBCLFNBQVMsRUFBQyx5QkFBeUI7SUFBQ1UsT0FBTyxFQUFFckI7RUFBYyxnQkFBQ2YsMERBQUE7SUFDaEUwQixTQUFTLEVBQUM7RUFBYSxDQUFJLENBQVMsQ0FBQyxlQUN6QzFCLDBEQUFBO0lBQVEwQixTQUFTLEVBQUM7RUFBc0IsZ0JBQUMxQiwwREFBQTtJQUFHMEIsU0FBUyxFQUFDO0VBQW9CLENBQUksQ0FBUyxDQUN0RixDQUNKLENBQ0gsQ0FDVCxFQUlELENBQUNqQixjQUFjLGlCQUNYVCwwREFBQSwyQkFFSUEsMERBQUE7SUFBUTBCLFNBQVMsRUFBQyxxQ0FBcUM7SUFDL0NVLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTTFCLGlCQUFpQixDQUFDLENBQUNELGNBQWMsQ0FBQztJQUFBO0VBQUMsR0FBQyxVQUV2RCxlQUFBVCwwREFBQTtJQUFHMEIsU0FBUyxFQUFDO0VBQW1CLENBQUksQ0FDaEMsQ0FBQyxlQUVUMUIsMERBQUE7SUFBUTBCLFNBQVMsRUFBQztFQUErQixnQkFBQzFCLDBEQUFBO0lBQUcwQixTQUFTLEVBQUM7RUFBYyxDQUFJLENBQVMsQ0FDekYsQ0FHYixDQUFDO0FBRWI7Ozs7Ozs7O1VDMUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1cGRhdGVPcGVyYXRpb259IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xuXG4vLyBUT0RPLi4uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbih7b3BlcmF0aW9ufSkge1xuXG4gICAgY29uc3QgW2FkZFRpbWVCb29sZWFuLCBzZXRBZGRUaW1lQm9vbGVhbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbmV3VGltZVNwZW50LCBzZXROZXdUaW1lU3BlbnRdID0gdXNlU3RhdGUoMClcblxuICAgIGNvbnN0IGhhbmRsZUFkZFRpbWUgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB1cGRhdGVkT3BlcmF0aW9uID0ge1xuICAgICAgICAgICAgLi4ub3BlcmF0aW9uLFxuICAgICAgICAgICAgdGltZVNwZW50OiBuZXdUaW1lU3BlbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRPcGVyYXRpb24pXG4gICAgICAgIHVwZGF0ZU9wZXJhdGlvbihvcGVyYXRpb24uaWQsIHVwZGF0ZWRPcGVyYXRpb24sIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRBZGRUaW1lQm9vbGVhbihmYWxzZSlcbiAgICAgICAgc2V0TmV3VGltZVNwZW50KDApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtvcGVyYXRpb24uZGVzY3JpcHRpb259XG5cbiAgICAgICAgICAgICAgICB7LyogPCEtLSBDemFzIHd5xZt3aWV0bGFueSB0eWxrbyBqZcW8ZWxpIHdpxJlrc3p5IG9kIDAgICAgLS0+ICovfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XG4gICAgICAgICAgey8qIFRPRE86IGZvcm1hdCB0aW1lICovfVxuICAgICAgICAgICAgICAgICAgICB7b3BlcmF0aW9uLnRpbWVTcGVudH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWRkVGltZUJvb2xlYW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEycmVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUaW1lU3BlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VGltZVNwZW50KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCIgb25DbGljaz17aGFuZGxlQWRkVGltZX0+PGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhYWRkVGltZUJvb2xlYW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gUHJ6eWNpc2sgd2lkb2N6bnkgdHlsa28gamXFvGVsaSBzdGF0dXMgemFkYW5pYSBqZXN0IFwib3BlblwiIC0tPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBZGRUaW1lQm9vbGVhbighYWRkVGltZUJvb2xlYW4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG9jayBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9saT5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmMxMDU0OWRmNjE5ZDk1YzM5YjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVwZGF0ZU9wZXJhdGlvbiIsIk9wZXJhdGlvbiIsIl9yZWYiLCJvcGVyYXRpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhZGRUaW1lQm9vbGVhbiIsInNldEFkZFRpbWVCb29sZWFuIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJuZXdUaW1lU3BlbnQiLCJzZXROZXdUaW1lU3BlbnQiLCJoYW5kbGVBZGRUaW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlZE9wZXJhdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJ0aW1lU3BlbnQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJ3aWR0aCIsInZhbHVlIiwib25DaGFuZ2UiLCJwYXJzZUludCIsInRhcmdldCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9