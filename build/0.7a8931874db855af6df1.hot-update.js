"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_NewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _api_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_4__.getTasks)(function (data) {
      console.log(data);
      setTasks(data);
    });
  }, []);
  var onNewTask = function onNewTask(newTask) {
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_4__.addTask)(newTask, function (data) {
      console.log(data);
      setTasks(function (prevTasks) {
        return [].concat(_toConsumableArray(prevTasks), [data]);
      });
    });
  };

  // () removeTask

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewTask__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onNewTask: onNewTask
  }), tasks && tasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Task__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: task.id,
      task: task
    });
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("49e4e5a4e2fb8752075b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YTg5MzE4NzRkYjg1NWFmNmRmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0w7QUFFRDtBQUNOO0FBRVM7QUFFOUMsU0FBU1EsR0FBR0EsQ0FBQSxFQUFHO0VBRVgsSUFBQUMsU0FBQSxHQUEwQlIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFFdEJSLGdEQUFTLENBQUMsWUFBTTtJQUNaSSxvREFBUSxDQUFDLFVBQUNRLElBQUksRUFBSztNQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO01BQ2pCRCxRQUFRLENBQUNDLElBQUksQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLE9BQU8sRUFBSztJQUMzQlgsbURBQU8sQ0FBQ1csT0FBTyxFQUFFLFVBQUFKLElBQUksRUFBSTtNQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztNQUNqQkQsUUFBUSxDQUFDLFVBQUFNLFNBQVM7UUFBQSxVQUFBQyxNQUFBLENBQUFDLGtCQUFBLENBQVFGLFNBQVMsSUFBRUwsSUFBSTtNQUFBLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7RUFDTixDQUFDOztFQUVEOztFQUVBLG9CQUNJZCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ksMkRBQU87SUFBQ2EsU0FBUyxFQUFFQTtFQUFVLENBQUMsQ0FBQyxFQUU1QkwsS0FBSyxJQUFJQSxLQUFLLENBQUNZLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO0lBQUEsb0JBQUl6QiwwREFBQSxDQUFDSyx3REFBSTtNQUFDcUIsR0FBRyxFQUFFRCxJQUFJLENBQUNFLEVBQUc7TUFBQ0YsSUFBSSxFQUFFQTtJQUFLLENBQUMsQ0FBQztFQUFBLEVBRWxFLENBQUM7QUFHWDtBQUVBLElBQU1HLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzVCLDREQUFVLENBQUN5QixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDaEMsMERBQUEsQ0FBQ1EsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUN6Q25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvTmV3VGFza1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vY29tcG9uZW50cy9UYXNrXCI7XG5cbmltcG9ydCB7Z2V0VGFza3MsIGFkZFRhc2t9IGZyb20gJy4vYXBpL3Rhc2tzJztcblxuZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFRhc2tzKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFRhc2tzKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvbk5ld1Rhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBhZGRUYXNrKG5ld1Rhc2ssIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHNldFRhc2tzKHByZXZUYXNrcyA9PiBbLi4ucHJldlRhc2tzLCBkYXRhXSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAoKSByZW1vdmVUYXNrXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE5ld1Rhc2sgb25OZXdUYXNrPXtvbk5ld1Rhc2t9Lz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXNrcyAmJiB0YXNrcy5tYXAodGFzayA9PiA8VGFzayBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9Lz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcblxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ5ZTRlNWE0ZTJmYjg3NTIwNzViXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiTmV3VGFzayIsIlRhc2siLCJnZXRUYXNrcyIsImFkZFRhc2siLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0YXNrcyIsInNldFRhc2tzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbk5ld1Rhc2siLCJuZXdUYXNrIiwicHJldlRhc2tzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwidGFzayIsImtleSIsImlkIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9