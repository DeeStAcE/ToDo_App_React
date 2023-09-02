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
      // console.log(data);
      setTasks(data);
    });
  }, []);
  var onNewTask = function onNewTask(newTask) {
    console.log(newTask);
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_4__.addTask)(newTask, function (data) {
      // console.log(data)
      setTasks(function (prevTasks) {
        return [].concat(_toConsumableArray(prevTasks), [data]);
      });
    });
  };
  var onRemoveTask = function onRemoveTask(taskId) {
    // console.log(taskId)

    setTasks(tasks.filter(function (task) {
      return task.id !== taskId;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewTask__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onNewTask: onNewTask
  }), tasks && tasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Task__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: task.id,
      task: task,
      onRemoveTask: onRemoveTask
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
/******/ 	__webpack_require__.h = () => ("355fd1b140e0648d5aee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zN2Y3Zjc4MmNiZGVlMmQzNTc4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0w7QUFFRDtBQUNOO0FBRVM7QUFFOUMsU0FBU1EsR0FBR0EsQ0FBQSxFQUFHO0VBRVgsSUFBQUMsU0FBQSxHQUEwQlIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFFdEJSLGdEQUFTLENBQUMsWUFBTTtJQUNaSSxvREFBUSxDQUFDLFVBQUNRLElBQUksRUFBSztNQUNmO01BQ0FELFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO0lBQ2xCLENBQUMsQ0FBQztFQUNOLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsT0FBTyxFQUFLO0lBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO0lBQ3BCVCxtREFBTyxDQUFDUyxPQUFPLEVBQUUsVUFBQUYsSUFBSSxFQUFJO01BQ3JCO01BQ0FELFFBQVEsQ0FBQyxVQUFBTSxTQUFTO1FBQUEsVUFBQUMsTUFBQSxDQUFBQyxrQkFBQSxDQUFRRixTQUFTLElBQUVMLElBQUk7TUFBQSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxNQUFNLEVBQUs7SUFDN0I7O0lBRUFWLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDWSxNQUFNLENBQUMsVUFBQUMsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ0MsRUFBRSxLQUFLSCxNQUFNO0lBQUEsRUFBQyxDQUFDO0VBQ3RELENBQUM7RUFHRCxvQkFDSXZCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDSSwyREFBTztJQUFDVyxTQUFTLEVBQUVBO0VBQVUsQ0FBQyxDQUFDLEVBRTVCSCxLQUFLLElBQUlBLEtBQUssQ0FBQ2lCLEdBQUcsQ0FBQyxVQUFBSixJQUFJO0lBQUEsb0JBQUl6QiwwREFBQSxDQUFDSyx3REFBSTtNQUFDeUIsR0FBRyxFQUFFTCxJQUFJLENBQUNDLEVBQUc7TUFBQ0QsSUFBSSxFQUFFQSxJQUFLO01BQUNILFlBQVksRUFBRUE7SUFBYSxDQUFDLENBQUM7RUFBQSxFQUU5RixDQUFDO0FBR1g7QUFFQSxJQUFNUyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUcvQiw0REFBVSxDQUFDNEIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ25DLDBEQUFBLENBQUNRLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDL0NuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5pbXBvcnQgTmV3VGFzayBmcm9tIFwiLi9jb21wb25lbnRzL05ld1Rhc2tcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvVGFza1wiO1xuXG5pbXBvcnQge2dldFRhc2tzLCBhZGRUYXNrfSBmcm9tICcuL2FwaS90YXNrcyc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcblxuICAgIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRUYXNrcygoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRUYXNrcyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25OZXdUYXNrID0gKG5ld1Rhc2spID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFzaylcbiAgICAgICAgYWRkVGFzayhuZXdUYXNrLCBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBzZXRUYXNrcyhwcmV2VGFza3MgPT4gWy4uLnByZXZUYXNrcywgZGF0YV0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgb25SZW1vdmVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrSWQpXG5cbiAgICAgICAgc2V0VGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmV3VGFzayBvbk5ld1Rhc2s9e29uTmV3VGFza30vPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhc2tzICYmIHRhc2tzLm1hcCh0YXNrID0+IDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25SZW1vdmVUYXNrPXtvblJlbW92ZVRhc2t9Lz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcblxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM1NWZkMWIxNDBlMDY0OGQ1YWVlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiTmV3VGFzayIsIlRhc2siLCJnZXRUYXNrcyIsImFkZFRhc2siLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0YXNrcyIsInNldFRhc2tzIiwiZGF0YSIsIm9uTmV3VGFzayIsIm5ld1Rhc2siLCJjb25zb2xlIiwibG9nIiwicHJldlRhc2tzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib25SZW1vdmVUYXNrIiwidGFza0lkIiwiZmlsdGVyIiwidGFzayIsImlkIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwia2V5IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9