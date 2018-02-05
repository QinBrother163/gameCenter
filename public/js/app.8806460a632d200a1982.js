/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");


if (__WEBPACK_IMPORTED_MODULE_0__toodo_retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__toodo_retail__["b" /* retail */].gxgd) {
    //document.body.style.background = 'url(img/bg_gxgd.jpg) no-repeat';
    document.body.style.background = 'url(img/bg.png) no-repeat';
    try {
        //iPanel.setGlobalVar("SEND_ALL_KEY_TO_PAGE", "1");
        iPanel.setGlobalVar("SEND_RETURN_KEY_TO_PAGE", "1");
        iPanel.setGlobalVar("SEND_EXIT_KEY_TO_PAGE", "1");
    } catch (e) {}
} else if (__WEBPACK_IMPORTED_MODULE_0__toodo_retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__toodo_retail__["b" /* retail */].hnyx) {
    //document.body.style.background = 'url(img/bg_hnyx.jpg) no-repeat';
    document.body.style.background = 'url(img/bg.png) no-repeat';
} else if (__WEBPACK_IMPORTED_MODULE_0__toodo_retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__toodo_retail__["b" /* retail */].gdgd) {
    //document.body.style.background = 'url(img/bg_gdgd.jpg) no-repeat';
    document.body.style.background = 'url(img/bg.png) no-repeat';
} else {
    document.body.style.background = 'url(img/bg.png) no-repeat';
    // 屏蔽退格返回键
    document.onkeypress = function (e) {
        return false;
    };
}

window.onunload = function () {
    if (__WEBPACK_IMPORTED_MODULE_0__toodo_retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__toodo_retail__["b" /* retail */].gxgd) {
        try {
            //iPanel.setGlobalVar("SEND_ALL_KEY_TO_PAGE", "0");
            iPanel.setGlobalVar("SEND_RETURN_KEY_TO_PAGE", "0");
            iPanel.setGlobalVar("SEND_EXIT_KEY_TO_PAGE", "0");
        } catch (e) {}
    }
};

/***/ }),

/***/ "./resources/assets/js/toodo/_retail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return retail; });
/* unused harmony export getRetailId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retailId; });
var retail = {
    gxgd: '96335',
    hnyx: '96266',
    gdgd: '96956',
    none: '1000'
};

function getRetailId() {
    try {
        //广西广电
        if (guangxi && iPanel) {
            return retail.gxgd;
        }
    } catch (e) {}
    try {
        //河南有线
        var System = window.System;
        if (System && System.stbID) {
            return retail.hnyx;
        }
    } catch (e) {}
    try {
        //广东广电
        if (CA && StorageService && FileSystem) {
            return retail.gdgd;
        }
        //var storageList = StorageService.getStorageInfos();
        //if (storageList && storageList != 'undefined') {
        //    var partitionPathList = storageList[0].getPartitionsInfo()[0];
        //    var partitionPath = partitionPathList.path;
        //    var dir = FileSystem.getDirectory(partitionPath);
        //    var flist = dir.fileList;
        //
        //    for (var i in flist) {
        //        if (flist[i].name.substring(0, 6) == "cacard") {
        //            var cardNo = "96956" + flist[i].name.substring(6, 12);
        //        }
        //    }
        //}
    } catch (e) {}
    return retail.none;
}

var retailId = getRetailId();


/***/ }),

/***/ "./resources/assets/sass/app.sass":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.sass");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19yZXRhaWwuanM/MGViMyoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNhc3M/NjdlNyJdLCJuYW1lcyI6WyJyZXRhaWxJZCIsInJldGFpbCIsImd4Z2QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmQiLCJpUGFuZWwiLCJzZXRHbG9iYWxWYXIiLCJlIiwiaG55eCIsImdkZ2QiLCJvbmtleXByZXNzIiwid2luZG93Iiwib251bmxvYWQiLCJub25lIiwiZ2V0UmV0YWlsSWQiLCJndWFuZ3hpIiwiU3lzdGVtIiwic3RiSUQiLCJDQSIsIlN0b3JhZ2VTZXJ2aWNlIiwiRmlsZVN5c3RlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ2hFQTs7QUFHQSxJQUFJLCtEQUFBQSxJQUFZLDZEQUFBQyxDQUFPQyxJQUF2QixFQUE2QjtBQUN6QjtBQUNBQyxhQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFVBQXBCLEdBQWlDLDJCQUFqQztBQUNBLFFBQUk7QUFDQTtBQUNBQyxlQUFPQyxZQUFQLENBQW9CLHlCQUFwQixFQUErQyxHQUEvQztBQUNBRCxlQUFPQyxZQUFQLENBQW9CLHVCQUFwQixFQUE2QyxHQUE3QztBQUNILEtBSkQsQ0FJRSxPQUFPQyxDQUFQLEVBQVUsQ0FDWDtBQUNKLENBVEQsTUFTTyxJQUFJLCtEQUFBVCxJQUFZLDZEQUFBQyxDQUFPUyxJQUF2QixFQUE2QjtBQUNoQztBQUNBUCxhQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFVBQXBCLEdBQWlDLDJCQUFqQztBQUNILENBSE0sTUFHQSxJQUFJLCtEQUFBTixJQUFZLDZEQUFBQyxDQUFPVSxJQUF2QixFQUE2QjtBQUNoQztBQUNBUixhQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFVBQXBCLEdBQWlDLDJCQUFqQztBQUNILENBSE0sTUFHQTtBQUNISCxhQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFVBQXBCLEdBQWlDLDJCQUFqQztBQUNBO0FBQ0FILGFBQVNTLFVBQVQsR0FBc0IsVUFBVUgsQ0FBVixFQUFhO0FBQy9CLGVBQU8sS0FBUDtBQUNILEtBRkQ7QUFHSDs7QUFFREksT0FBT0MsUUFBUCxHQUFrQixZQUFZO0FBQzFCLFFBQUksK0RBQUFkLElBQVksNkRBQUFDLENBQU9DLElBQXZCLEVBQTZCO0FBQ3pCLFlBQUk7QUFDQTtBQUNBSyxtQkFBT0MsWUFBUCxDQUFvQix5QkFBcEIsRUFBK0MsR0FBL0M7QUFDQUQsbUJBQU9DLFlBQVAsQ0FBb0IsdUJBQXBCLEVBQTZDLEdBQTdDO0FBQ0gsU0FKRCxDQUlFLE9BQU9DLENBQVAsRUFBVSxDQUNYO0FBQ0o7QUFDSixDQVRELEM7Ozs7Ozs7Ozs7QUMxQkE7QUFBQSxJQUFNUixTQUFTO0FBQ1hDLFVBQU0sT0FESztBQUVYUSxVQUFNLE9BRks7QUFHWEMsVUFBTSxPQUhLO0FBSVhJLFVBQU07QUFKSyxDQUFmOztBQU9BLFNBQVNDLFdBQVQsR0FBdUI7QUFDbkIsUUFBSTtBQUFDO0FBQ0QsWUFBSUMsV0FBV1YsTUFBZixFQUF1QjtBQUNuQixtQkFBT04sT0FBT0MsSUFBZDtBQUNIO0FBQ0osS0FKRCxDQUlFLE9BQU9PLENBQVAsRUFBVSxDQUNYO0FBQ0QsUUFBSTtBQUFDO0FBQ0QsWUFBSVMsU0FBU0wsT0FBT0ssTUFBcEI7QUFDQSxZQUFJQSxVQUFVQSxPQUFPQyxLQUFyQixFQUE0QjtBQUN4QixtQkFBT2xCLE9BQU9TLElBQWQ7QUFDSDtBQUNKLEtBTEQsQ0FLRSxPQUFPRCxDQUFQLEVBQVUsQ0FDWDtBQUNELFFBQUk7QUFBQztBQUNELFlBQUlXLE1BQU1DLGNBQU4sSUFBd0JDLFVBQTVCLEVBQXdDO0FBQ3BDLG1CQUFPckIsT0FBT1UsSUFBZDtBQUNIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQWpCRCxDQWlCRSxPQUFPRixDQUFQLEVBQVUsQ0FDWDtBQUNELFdBQU9SLE9BQU9jLElBQWQ7QUFDSDs7QUFFRCxJQUFJZixXQUFXZ0IsYUFBZjs7Ozs7Ozs7QUMzQ0EseUMiLCJmaWxlIjoianMvYXBwLjg4MDY0NjBhNjMyZDIwMGExOTgyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYzlkZjI1MTVhOTFhZTM2YjJmMSIsImltcG9ydCB7cmV0YWlsLCByZXRhaWxJZH0gZnJvbSBcIi4vdG9vZG8vX3JldGFpbFwiO1xyXG5cclxuXHJcbmlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgLy9kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKGltZy9iZ19neGdkLmpwZykgbm8tcmVwZWF0JztcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoaW1nL2JnLnBuZykgbm8tcmVwZWF0JztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9pUGFuZWwuc2V0R2xvYmFsVmFyKFwiU0VORF9BTExfS0VZX1RPX1BBR0VcIiwgXCIxXCIpO1xyXG4gICAgICAgIGlQYW5lbC5zZXRHbG9iYWxWYXIoXCJTRU5EX1JFVFVSTl9LRVlfVE9fUEFHRVwiLCBcIjFcIik7XHJcbiAgICAgICAgaVBhbmVsLnNldEdsb2JhbFZhcihcIlNFTkRfRVhJVF9LRVlfVE9fUEFHRVwiLCBcIjFcIik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbn0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmhueXgpIHtcclxuICAgIC8vZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChpbWcvYmdfaG55eC5qcGcpIG5vLXJlcGVhdCc7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKGltZy9iZy5wbmcpIG5vLXJlcGVhdCc7XHJcbn0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmdkZ2QpIHtcclxuICAgIC8vZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChpbWcvYmdfZ2RnZC5qcGcpIG5vLXJlcGVhdCc7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKGltZy9iZy5wbmcpIG5vLXJlcGVhdCc7XHJcbn0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKGltZy9iZy5wbmcpIG5vLXJlcGVhdCc7XHJcbiAgICAvLyDlsY/olL3pgIDmoLzov5Tlm57plK5cclxuICAgIGRvY3VtZW50Lm9ua2V5cHJlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbn1cclxuXHJcbndpbmRvdy5vbnVubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vaVBhbmVsLnNldEdsb2JhbFZhcihcIlNFTkRfQUxMX0tFWV9UT19QQUdFXCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgaVBhbmVsLnNldEdsb2JhbFZhcihcIlNFTkRfUkVUVVJOX0tFWV9UT19QQUdFXCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgaVBhbmVsLnNldEdsb2JhbFZhcihcIlNFTkRfRVhJVF9LRVlfVE9fUEFHRVwiLCBcIjBcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJjb25zdCByZXRhaWwgPSB7XHJcbiAgICBneGdkOiAnOTYzMzUnLFxyXG4gICAgaG55eDogJzk2MjY2JyxcclxuICAgIGdkZ2Q6ICc5Njk1NicsXHJcbiAgICBub25lOiAnMTAwMCdcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFJldGFpbElkKCkge1xyXG4gICAgdHJ5IHsvL+W5v+ilv+W5v+eUtVxyXG4gICAgICAgIGlmIChndWFuZ3hpICYmIGlQYW5lbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmd4Z2Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgdHJ5IHsvL+ays+WNl+aciee6v1xyXG4gICAgICAgIHZhciBTeXN0ZW0gPSB3aW5kb3cuU3lzdGVtO1xyXG4gICAgICAgIGlmIChTeXN0ZW0gJiYgU3lzdGVtLnN0YklEKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuaG55eDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICB0cnkgey8v5bm/5Lic5bm/55S1XHJcbiAgICAgICAgaWYgKENBICYmIFN0b3JhZ2VTZXJ2aWNlICYmIEZpbGVTeXN0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5nZGdkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhciBzdG9yYWdlTGlzdCA9IFN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2VJbmZvcygpO1xyXG4gICAgICAgIC8vaWYgKHN0b3JhZ2VMaXN0ICYmIHN0b3JhZ2VMaXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gICAgdmFyIHBhcnRpdGlvblBhdGhMaXN0ID0gc3RvcmFnZUxpc3RbMF0uZ2V0UGFydGl0aW9uc0luZm8oKVswXTtcclxuICAgICAgICAvLyAgICB2YXIgcGFydGl0aW9uUGF0aCA9IHBhcnRpdGlvblBhdGhMaXN0LnBhdGg7XHJcbiAgICAgICAgLy8gICAgdmFyIGRpciA9IEZpbGVTeXN0ZW0uZ2V0RGlyZWN0b3J5KHBhcnRpdGlvblBhdGgpO1xyXG4gICAgICAgIC8vICAgIHZhciBmbGlzdCA9IGRpci5maWxlTGlzdDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgIGZvciAodmFyIGkgaW4gZmxpc3QpIHtcclxuICAgICAgICAvLyAgICAgICAgaWYgKGZsaXN0W2ldLm5hbWUuc3Vic3RyaW5nKDAsIDYpID09IFwiY2FjYXJkXCIpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIHZhciBjYXJkTm8gPSBcIjk2OTU2XCIgKyBmbGlzdFtpXS5uYW1lLnN1YnN0cmluZyg2LCAxMik7XHJcbiAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgLy99XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0YWlsLm5vbmU7XHJcbn1cclxuXHJcbnZhciByZXRhaWxJZCA9IGdldFJldGFpbElkKCk7XHJcbmV4cG9ydCB7cmV0YWlsLGdldFJldGFpbElkLHJldGFpbElkfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19yZXRhaWwuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIl0sInNvdXJjZVJvb3QiOiIifQ==