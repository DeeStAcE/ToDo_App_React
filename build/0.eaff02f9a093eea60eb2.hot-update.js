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
  var operation = _ref.operation,
    onRemoveOperation = _ref.onRemoveOperation;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    addTimeBoolean = _useState2[0],
    setAddTimeBoolean = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    newTimeSpent = _useState4[0],
    setNewTimeSpent = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(operation.timeSpent),
    _useState6 = _slicedToArray(_useState5, 2),
    timeSpentState = _useState6[0],
    setTimeSpentState = _useState6[1];
  var handleAddTime = function handleAddTime(e) {
    e.preventDefault();
    var updatedOperation = _objectSpread(_objectSpread({}, operation), {}, {
      timeSpent: timeSpentState + newTimeSpent
    });
    console.log(updatedOperation);
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_1__.updateOperation)(operation.id, updatedOperation, function (data) {
      // console.log(data)
      setAddTimeBoolean(false);
      setTimeSpentState(data.timeSpent);
      setNewTimeSpent(0);
    });
  };
  var handleXButton = function handleXButton(e) {
    e.preventDefault();
    setAddTimeBoolean(false);
    setNewTimeSpent(0);
  };
  var handleRemoveOperation = function handleRemoveOperation(e) {
    e.preventDefault();
    onRemoveOperation(operation.id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, operation.description, timeSpentState > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, timeSpentState >= 60 && "".concat(Math.floor(timeSpentState / 60), "h"), " ", timeSpentState - Math.floor(timeSpentState / 60) * 60, "min")), addTimeBoolean && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    className: "btn btn-outline-dark",
    onClick: handleXButton
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
    className: "btn btn-outline-danger btn-sm",
    onClick: handleRemoveOperation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }))));
}

/***/ }),

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
  var handleRemoveOperation = function handleRemoveOperation(id) {
    // console.log(id)
    deleteOperation(id, function (data) {
      console.log(data);
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
/******/ 	__webpack_require__.h = () => ("1cbdc07b7fe2e448b78b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ0wsQ0FDUixlQUdMakMsMERBQUE7SUFBSWlDLFNBQVMsRUFBQztFQUE2QixHQUVuQ2UsS0FBSyxDQUFDUyxVQUFVLElBQUlULEtBQUssQ0FBQ1MsVUFBVSxDQUFDQyxHQUFHLENBQUMsVUFBQXJELFNBQVM7SUFBQSxvQkFBSUwsMERBQUEsQ0FBQ0csa0RBQVM7TUFBQ3dELEdBQUcsRUFBRXRELFNBQVMsQ0FBQ3VCLEVBQUc7TUFDbEJ2QixTQUFTLEVBQUVBLFNBQVU7TUFDckJDLGlCQUFpQixFQUFFeUI7SUFBc0IsQ0FBQyxDQUFDO0VBQUEsRUFFaEgsQ0FDTixDQUFDO0FBRVg7Ozs7Ozs7O1VDM0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXBkYXRlT3BlcmF0aW9ufSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcblxuLy8gVE9ETy4uLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRpb24oe29wZXJhdGlvbiwgb25SZW1vdmVPcGVyYXRpb259KSB7XG5cbiAgICBjb25zdCBbYWRkVGltZUJvb2xlYW4sIHNldEFkZFRpbWVCb29sZWFuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuZXdUaW1lU3BlbnQsIHNldE5ld1RpbWVTcGVudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFt0aW1lU3BlbnRTdGF0ZSwgc2V0VGltZVNwZW50U3RhdGVdID0gdXNlU3RhdGUob3BlcmF0aW9uLnRpbWVTcGVudClcblxuICAgIGNvbnN0IGhhbmRsZUFkZFRpbWUgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB1cGRhdGVkT3BlcmF0aW9uID0ge1xuICAgICAgICAgICAgLi4ub3BlcmF0aW9uLCB0aW1lU3BlbnQ6IHRpbWVTcGVudFN0YXRlICsgbmV3VGltZVNwZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVkT3BlcmF0aW9uKVxuICAgICAgICB1cGRhdGVPcGVyYXRpb24ob3BlcmF0aW9uLmlkLCB1cGRhdGVkT3BlcmF0aW9uLCBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBzZXRBZGRUaW1lQm9vbGVhbihmYWxzZSlcbiAgICAgICAgICAgIHNldFRpbWVTcGVudFN0YXRlKGRhdGEudGltZVNwZW50KVxuICAgICAgICAgICAgc2V0TmV3VGltZVNwZW50KDApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlWEJ1dHRvbiA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRBZGRUaW1lQm9vbGVhbihmYWxzZSlcbiAgICAgICAgc2V0TmV3VGltZVNwZW50KDApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlT3BlcmF0aW9uID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgb25SZW1vdmVPcGVyYXRpb24ob3BlcmF0aW9uLmlkKVxuICAgIH1cblxuICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7b3BlcmF0aW9uLmRlc2NyaXB0aW9ufVxuXG4gICAgICAgICAgICB7dGltZVNwZW50U3RhdGUgPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGltZVNwZW50U3RhdGUgPj0gNjAgJiYgYCR7TWF0aC5mbG9vcih0aW1lU3BlbnRTdGF0ZSAvIDYwKX1oYH0ge3RpbWVTcGVudFN0YXRlIC0gKE1hdGguZmxvb3IodGltZVNwZW50U3RhdGUgLyA2MCkpICogNjB9bWluXG5cbiAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthZGRUaW1lQm9vbGVhbiAmJiAoPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNwZW50IHRpbWUgaW4gbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMnJlbSd9fVxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGltZVNwZW50fVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RpbWVTcGVudChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiIG9uQ2xpY2s9e2hhbmRsZUFkZFRpbWV9PjxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9e2hhbmRsZVhCdXR0b259PjxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPil9XG5cbiAgICAgICAgeyFhZGRUaW1lQm9vbGVhbiAmJiAoPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBZGRUaW1lQm9vbGVhbighYWRkVGltZUJvb2xlYW4pfT5cbiAgICAgICAgICAgICAgICBBZGQgdGltZVxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG9jayBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVPcGVyYXRpb259PjxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4pfVxuICAgIDwvbGk+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gJy4vT3BlcmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3BlcmF0aW9ucyhwcm9wcykge1xuXG4gICAgY29uc3QgdXBkYXRlT3BlcmF0aW9ucyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZS5jdXJyZW50VGFyZ2V0LmVsZW1lbnRzXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRzKVxuXG4gICAgICAgIHByb3BzLnVwZGF0ZU9wZXJhdGlvbnMoe1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICAgICAgdGltZVNwZW50OiAwLFxuICAgICAgICAgICAgdGFzazogcHJvcHMudGFza1xuICAgICAgICB9KVxuXG4gICAgICAgIGVsZW1lbnRzWzBdLnZhbHVlID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZU9wZXJhdGlvbiA9IChpZCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZClcbiAgICAgICAgZGVsZXRlT3BlcmF0aW9uKGlkLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5mb3JtID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVPcGVyYXRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3BlcmF0aW9ucyAmJiBwcm9wcy5vcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZU9wZXJhdGlvbj17aGFuZGxlUmVtb3ZlT3BlcmF0aW9ufS8+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxY2JkYzA3YjdmZTJlNDQ4Yjc4YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXBkYXRlT3BlcmF0aW9uIiwiT3BlcmF0aW9uIiwiX3JlZiIsIm9wZXJhdGlvbiIsIm9uUmVtb3ZlT3BlcmF0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWRkVGltZUJvb2xlYW4iLCJzZXRBZGRUaW1lQm9vbGVhbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibmV3VGltZVNwZW50Iiwic2V0TmV3VGltZVNwZW50IiwiX3VzZVN0YXRlNSIsInRpbWVTcGVudCIsIl91c2VTdGF0ZTYiLCJ0aW1lU3BlbnRTdGF0ZSIsInNldFRpbWVTcGVudFN0YXRlIiwiaGFuZGxlQWRkVGltZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWRPcGVyYXRpb24iLCJfb2JqZWN0U3ByZWFkIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0YSIsImhhbmRsZVhCdXR0b24iLCJoYW5kbGVSZW1vdmVPcGVyYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJjb25jYXQiLCJNYXRoIiwiZmxvb3IiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhcnNlSW50IiwidGFyZ2V0Iiwib25DbGljayIsIk9wZXJhdGlvbnMiLCJwcm9wcyIsInVwZGF0ZU9wZXJhdGlvbnMiLCJlbGVtZW50cyIsImN1cnJlbnRUYXJnZXQiLCJ0YXNrIiwiZGVsZXRlT3BlcmF0aW9uIiwiRnJhZ21lbnQiLCJmb3JtIiwib25TdWJtaXQiLCJvcGVyYXRpb25zIiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==