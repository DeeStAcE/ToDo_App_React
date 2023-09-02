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
      // setTasks(prevTasks => [...prevTasks, data])
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
/******/ 	__webpack_require__.h = () => ("2e2b6d19c8ba3447087f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNjJjOGM0OWM3ZjJjMDExODk5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUVEO0FBQ047QUFFUztBQUU5QyxTQUFTUSxHQUFHQSxDQUFBLEVBQUc7RUFFWCxJQUFBQyxTQUFBLEdBQTBCUiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBUyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFqQ0csS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUV0QlIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pJLG9EQUFRLENBQUMsVUFBQ1EsSUFBSSxFQUFLO01BQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7TUFDakJELFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO0lBQ2xCLENBQUMsQ0FBQztFQUNOLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsT0FBTyxFQUFLO0lBQzNCWCxtREFBTyxDQUFDVyxPQUFPLEVBQUUsVUFBQUosSUFBSSxFQUFJO01BQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO01BQ2pCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQzs7RUFFRDs7RUFFQSxvQkFDSWQsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNJLDJEQUFPO0lBQUNhLFNBQVMsRUFBRUE7RUFBVSxDQUFDLENBQUMsRUFFNUJMLEtBQUssSUFBSUEsS0FBSyxDQUFDUyxHQUFHLENBQUMsVUFBQUMsSUFBSTtJQUFBLG9CQUFJdEIsMERBQUEsQ0FBQ0ssd0RBQUk7TUFBQ2tCLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUFHO01BQUNGLElBQUksRUFBRUE7SUFBSyxDQUFDLENBQUM7RUFBQSxFQUVsRSxDQUFDO0FBR1g7QUFFQSxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd6Qiw0REFBVSxDQUFDc0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzdCLDBEQUFBLENBQUNRLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDekNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5pbXBvcnQgTmV3VGFzayBmcm9tIFwiLi9jb21wb25lbnRzL05ld1Rhc2tcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvVGFza1wiO1xuXG5pbXBvcnQge2dldFRhc2tzLCBhZGRUYXNrfSBmcm9tICcuL2FwaS90YXNrcyc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcblxuICAgIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRUYXNrcygoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRUYXNrcyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25OZXdUYXNrID0gKG5ld1Rhc2spID0+IHtcbiAgICAgICAgYWRkVGFzayhuZXdUYXNrLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAvLyBzZXRUYXNrcyhwcmV2VGFza3MgPT4gWy4uLnByZXZUYXNrcywgZGF0YV0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gKCkgcmVtb3ZlVGFza1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOZXdUYXNrIG9uTmV3VGFzaz17b25OZXdUYXNrfS8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFza3MgJiYgdGFza3MubWFwKHRhc2sgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfS8+KVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZTJiNmQxOWM4YmEzNDQ3MDg3ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsIk5ld1Rhc2siLCJUYXNrIiwiZ2V0VGFza3MiLCJhZGRUYXNrIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGFza3MiLCJzZXRUYXNrcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib25OZXdUYXNrIiwibmV3VGFzayIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsInRhc2siLCJrZXkiLCJpZCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==