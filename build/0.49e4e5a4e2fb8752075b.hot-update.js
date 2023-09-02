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
      // console.log(data)
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
/******/ 	__webpack_require__.h = () => ("f62c8c49c7f2c0118998")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OWU0ZTVhNGUyZmI4NzUyMDc1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0w7QUFFRDtBQUNOO0FBRVM7QUFFOUMsU0FBU1EsR0FBR0EsQ0FBQSxFQUFHO0VBRVgsSUFBQUMsU0FBQSxHQUEwQlIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFFdEJSLGdEQUFTLENBQUMsWUFBTTtJQUNaSSxvREFBUSxDQUFDLFVBQUNRLElBQUksRUFBSztNQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO01BQ2pCRCxRQUFRLENBQUNDLElBQUksQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLE9BQU8sRUFBSztJQUMzQlgsbURBQU8sQ0FBQ1csT0FBTyxFQUFFLFVBQUFKLElBQUksRUFBSTtNQUNyQjtNQUNBRCxRQUFRLENBQUMsVUFBQU0sU0FBUztRQUFBLFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBUUYsU0FBUyxJQUFFTCxJQUFJO01BQUEsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQztFQUNOLENBQUM7O0VBRUQ7O0VBRUEsb0JBQ0lkLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDSSwyREFBTztJQUFDYSxTQUFTLEVBQUVBO0VBQVUsQ0FBQyxDQUFDLEVBRTVCTCxLQUFLLElBQUlBLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLFVBQUFDLElBQUk7SUFBQSxvQkFBSXpCLDBEQUFBLENBQUNLLHdEQUFJO01BQUNxQixHQUFHLEVBQUVELElBQUksQ0FBQ0UsRUFBRztNQUFDRixJQUFJLEVBQUVBO0lBQUssQ0FBQyxDQUFDO0VBQUEsRUFFbEUsQ0FBQztBQUdYO0FBRUEsSUFBTUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHNUIsNERBQVUsQ0FBQ3lCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNoQywwREFBQSxDQUFDUSxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3pDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuaW1wb3J0IE5ld1Rhc2sgZnJvbSBcIi4vY29tcG9uZW50cy9OZXdUYXNrXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9jb21wb25lbnRzL1Rhc2tcIjtcblxuaW1wb3J0IHtnZXRUYXNrcywgYWRkVGFza30gZnJvbSAnLi9hcGkvdGFza3MnO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG5cbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0VGFza3MoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0VGFza3MoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uTmV3VGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgICAgIGFkZFRhc2sobmV3VGFzaywgZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgc2V0VGFza3MocHJldlRhc2tzID0+IFsuLi5wcmV2VGFza3MsIGRhdGFdKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vICgpIHJlbW92ZVRhc2tcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmV3VGFzayBvbk5ld1Rhc2s9e29uTmV3VGFza30vPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhc2tzICYmIHRhc2tzLm1hcCh0YXNrID0+IDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30vPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjYyYzhjNDljN2YyYzAxMTg5OThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJOZXdUYXNrIiwiVGFzayIsImdldFRhc2tzIiwiYWRkVGFzayIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2tzIiwic2V0VGFza3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm9uTmV3VGFzayIsIm5ld1Rhc2siLCJwcmV2VGFza3MiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJ0YXNrIiwia2V5IiwiaWQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=