self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_NewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Task__WEBPACK_IMPORTED_MODULE_3__);
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
  var onRemoveTask = function onRemoveTask(id) {
    // console.log(id)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewTask__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onNewTask: onNewTask
  }), tasks && tasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_Task__WEBPACK_IMPORTED_MODULE_3___default()), {
      key: task.id,
      task: task,
      onRemoveTask: onRemoveTask
    });
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 35:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dawid/workspace/projects/ToDo_App_React/js/components/Task.js: Unexpected token (31:8)\n\n\u001b[0m \u001b[90m 29 |\u001b[39m             \u001b[33m...\u001b[39mtask\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 |\u001b[39m             status\u001b[33m:\u001b[39m \u001b[33m!\u001b[39mtask\u001b[33m.\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 31 |\u001b[39m         }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 |\u001b[39m         updateTask(task\u001b[33m.\u001b[39mid\u001b[33m,\u001b[39m task\u001b[33m,\u001b[39m data \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m             console\u001b[33m.\u001b[39mlog(data)\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m         })\u001b[0m\n    at constructor (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:345:19)\n    at JSXParserMixin.raise (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:3199:19)\n    at JSXParserMixin.unexpected (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:3229:16)\n    at JSXParserMixin.parseIdentifierName (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:12001:12)\n    at JSXParserMixin.parseIdentifier (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:11984:23)\n    at JSXParserMixin.parseMember (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:10905:28)\n    at JSXParserMixin.parseSubscript (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:10882:21)\n    at JSXParserMixin.parseSubscripts (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:10849:19)\n    at JSXParserMixin.parseExprSubscripts (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:10840:17)\n    at JSXParserMixin.parseUpdate (/home/dawid/workspace/projects/ToDo_App_React/node_modules/@babel/parser/lib/index.js:10819:21)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba445ee47b249688c1b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZTEwZTA3NjE5ZTM1MmZhMWM2YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNMO0FBRUQ7QUFDTjtBQUVTO0FBRTlDLFNBQVNRLEdBQUdBLENBQUEsRUFBRztFQUVYLElBQUFDLFNBQUEsR0FBMEJSLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWpDRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRXRCUixnREFBUyxDQUFDLFlBQU07SUFDWkksb0RBQVEsQ0FBQyxVQUFDUSxJQUFJLEVBQUs7TUFDZjtNQUNBRCxRQUFRLENBQUNDLElBQUksQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLE9BQU8sRUFBSztJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztJQUNwQlQsbURBQU8sQ0FBQ1MsT0FBTyxFQUFFLFVBQUFGLElBQUksRUFBSTtNQUNyQjtNQUNBRCxRQUFRLENBQUMsVUFBQU0sU0FBUztRQUFBLFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBUUYsU0FBUyxJQUFFTCxJQUFJO01BQUEsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsRUFBRSxFQUFLO0lBQ3pCO0VBQUEsQ0FDSDtFQUVELG9CQUNJdkIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNJLDJEQUFPO0lBQUNXLFNBQVMsRUFBRUE7RUFBVSxDQUFDLENBQUMsRUFFNUJILEtBQUssSUFBSUEsS0FBSyxDQUFDYyxHQUFHLENBQUMsVUFBQUMsSUFBSTtJQUFBLG9CQUFJM0IsMERBQUEsQ0FBQ0sseURBQUk7TUFBQ3VCLEdBQUcsRUFBRUQsSUFBSSxDQUFDSixFQUFHO01BQUNJLElBQUksRUFBRUEsSUFBSztNQUFDTCxZQUFZLEVBQUVBO0lBQWEsQ0FBQyxDQUFDO0VBQUEsRUFFOUYsQ0FBQztBQUdYO0FBRUEsSUFBTU8sU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHN0IsNERBQVUsQ0FBQzBCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNqQywwREFBQSxDQUFDUSxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7VUM1Q25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvTmV3VGFza1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vY29tcG9uZW50cy9UYXNrXCI7XG5cbmltcG9ydCB7Z2V0VGFza3MsIGFkZFRhc2t9IGZyb20gJy4vYXBpL3Rhc2tzJztcblxuZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFRhc2tzKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFRhc2tzKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvbk5ld1Rhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgICAgICBhZGRUYXNrKG5ld1Rhc2ssIGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHNldFRhc2tzKHByZXZUYXNrcyA9PiBbLi4ucHJldlRhc2tzLCBkYXRhXSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbW92ZVRhc2sgPSAoaWQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOZXdUYXNrIG9uTmV3VGFzaz17b25OZXdUYXNrfS8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFza3MgJiYgdGFza3MubWFwKHRhc2sgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvblJlbW92ZVRhc2s9e29uUmVtb3ZlVGFza30vPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxuXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmE0NDVlZTQ3YjI0OTY4OGMxYjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJOZXdUYXNrIiwiVGFzayIsImdldFRhc2tzIiwiYWRkVGFzayIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2tzIiwic2V0VGFza3MiLCJkYXRhIiwib25OZXdUYXNrIiwibmV3VGFzayIsImNvbnNvbGUiLCJsb2ciLCJwcmV2VGFza3MiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJvblJlbW92ZVRhc2siLCJpZCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsInRhc2siLCJrZXkiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=