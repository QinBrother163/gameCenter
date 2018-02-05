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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/resize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__ = __webpack_require__("./resources/assets/js/toodo/_stbnull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toodo_retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");



function resize640(dstUrl) {
    if (__WEBPACK_IMPORTED_MODULE_1__toodo_retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_1__toodo_retail__["b" /* retail */].gxgd) {
        var hd_page_support = __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].getValue("RESOLUTION_640_526");
        if (hd_page_support == "1") {
            //视达科
            //设置进入标清页面
            __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].setValue("RESOLUTION_640_526_URL", dstUrl);
            //location.href = dstUrl;
        } else {
            if (/4\.0\.4 Mobile\/7B500 Safari\/531\.21\.10/.test(navigator.userAgent)) {
                if (screen.resizeTo) {
                    screen.resizeTo(640, 526);
                }
                location.href = dstUrl; //webkit
            } else {
                location.href = dstUrl; //waterwolf
            }
        }
    } else {
        location.href = dstUrl;
    }
}

function resize1280(dstUrl) {
    if (__WEBPACK_IMPORTED_MODULE_1__toodo_retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_1__toodo_retail__["b" /* retail */].gxgd) {
        var hd_page_support = __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].getValue("RESOLUTION_1280_720");
        if (hd_page_support == "1") {
            //视达科
            //设置进入标清页面
            __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].setValue("RESOLUTION_1280_720_URL", dstUrl);
            //location.href = dstUrl;
        } else {
            if (/4\.0\.4 Mobile\/7B500 Safari\/531\.21\.10/.test(navigator.userAgent)) {
                if (screen.resizeTo) {
                    screen.resizeTo(1280, 720);
                }
                location.href = dstUrl; //webkit
            } else {
                location.href = dstUrl; //waterwolf
            }
        }
    } else {
        location.href = dstUrl;
    }
}

function parseQuery(query) {
    var start = query.indexOf('?');
    if (start >= 0) {
        query = query.slice(start + 1);
    }
    var result = {};
    var arr = query.split('&');
    for (var m = 0; m < arr.length; m++) {
        var v = arr[m];
        var tmp = v.split('=');
        result[tmp[0]] = decodeURIComponent(tmp[1]);
    }
    return result;
}

//! java游戏退出返回上一页，而不是重定向返回地址
var keyName = 'isCallGame';
var keyValue = __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].getValue(keyName);

var params = parseQuery(window.location.search);
if (keyValue == "") {
    __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].setValue(keyName, __WEBPACK_IMPORTED_MODULE_1__toodo_retail__["a" /* retailId */]);
    resize640(params.redirectUrl);
} else {
    __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].setValue(keyName, '');
    resize1280(params.returnUrl);
}

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

/***/ "./resources/assets/js/toodo/_stbnull.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StbNull */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stbNull; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");


function StbNull() {}
if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].gxgd) {
    // 广西广电 =====================================
    StbNull.prototype = {
        //获取机顶盒号字符串
        getCardTV: function getCardTV() {
            return guangxi.getStbNum();
        },
        //获取区域码常数
        getRegionCode: function getRegionCode() {
            return iPanel.getGlobalVar("GET_MEDIA_REGION_ID");
        },
        getValue: function getValue(keyName) {
            var result = null;
            try {
                result = iPanel.getGlobalVar(keyName);
            } catch (e) {
                var aCookie = document.cookie.split("; ");
                for (var i = 0; i < aCookie.length; i++) {
                    var aCrumb = aCookie[i].split("=");
                    if (escape(keyName) == aCrumb[0]) {
                        result = unescape(aCrumb[1]);
                        break;
                    }
                }
            }
            if (!result || result == "#" || result == "clearValue") {
                result = "";
            }
            return result;
        },
        setValue: function setValue(keyName, keyValue) {
            if (keyValue == "") {
                keyValue = "clearValue";
            }
            try {
                iPanel.setGlobalVar(keyName, keyValue);
            } catch (e) {
                document.cookie = escape(keyName) + "=" + escape(keyValue);
            }
        }
    };
} else if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].hnyx) {
    // 河南有线 =====================================
    var System = window.System;
    StbNull.prototype = {
        getCardTV: function getCardTV() {
            return System.stbID;
        },
        getRegionCode: function getRegionCode() {
            var region = 'hnyx';
            try {
                region = System.GetCARegionID();
            } catch (e) {}
            return region;
        },
        getValue: function getValue(keyName) {
            var g = null;
            if (!g) {
                try {
                    g = new Global(keyName);
                } catch (e) {}
            }
            if (!g) {
                try {
                    g = new Global2(keyName);
                } catch (e) {}
            }
            if (!g) {
                g = { value: null };
            }
            return g.value;
        },
        setValue: function setValue(keyName, keyValue) {
            var g = null;
            if (!g) {
                try {
                    g = new Global(keyName);
                } catch (e) {}
            }
            if (!g) {
                try {
                    g = new Global2(keyName);
                } catch (e) {}
            }
            if (!g) {
                return;
            }
            g.value = keyValue;
        }
    };
} else if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].gdgd) {
    // 广东广电 =====================================
    StbNull.prototype = {
        getCardTV: function getCardTV() {
            if (!CA.icNo) {
                return '9695610086';
            }
            return CA.icNo;
        },
        getRegionCode: function getRegionCode() {
            return CA.regionCode;
        },
        getValue: function getValue(keyName) {
            return SysSetting.getEnv(keyName);
        },
        setValue: function setValue(keyName, keyValue) {
            SysSetting.setEnv(keyName, keyValue);
        }
    };
} else {
    StbNull.prototype = {
        getCardTV: function getCardTV() {
            return '10086';
        },
        getRegionCode: function getRegionCode() {
            return '0';
        },
        getValue: function getValue(keyName) {
            var result = '';
            var aCookie = document.cookie.split("; ");
            for (var i = 0; i < aCookie.length; i++) {
                var aCrumb = aCookie[i].split("=");
                if (escape(keyName) == aCrumb[0]) {
                    result = unescape(aCrumb[1]);
                    break;
                }
            }
            return result;
        },
        setValue: function setValue(keyName, keyValue) {
            document.cookie = escape(keyName) + "=" + escape(keyValue);
        }
    };
}

var stbNull = new StbNull();


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/resize.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSoqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcmVzaXplLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3JldGFpbC5qcz8wZWIzKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RibnVsbC5qcz80N2U0KioqKioqKioiXSwibmFtZXMiOlsicmVzaXplNjQwIiwiZHN0VXJsIiwicmV0YWlsSWQiLCJyZXRhaWwiLCJneGdkIiwiaGRfcGFnZV9zdXBwb3J0Iiwic3RiTnVsbCIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic2NyZWVuIiwicmVzaXplVG8iLCJsb2NhdGlvbiIsImhyZWYiLCJyZXNpemUxMjgwIiwicGFyc2VRdWVyeSIsInF1ZXJ5Iiwic3RhcnQiLCJpbmRleE9mIiwic2xpY2UiLCJyZXN1bHQiLCJhcnIiLCJzcGxpdCIsIm0iLCJsZW5ndGgiLCJ2IiwidG1wIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwia2V5TmFtZSIsImtleVZhbHVlIiwicGFyYW1zIiwid2luZG93Iiwic2VhcmNoIiwicmVkaXJlY3RVcmwiLCJyZXR1cm5VcmwiLCJobnl4IiwiZ2RnZCIsIm5vbmUiLCJnZXRSZXRhaWxJZCIsImd1YW5neGkiLCJpUGFuZWwiLCJlIiwiU3lzdGVtIiwic3RiSUQiLCJDQSIsIlN0b3JhZ2VTZXJ2aWNlIiwiRmlsZVN5c3RlbSIsIlN0Yk51bGwiLCJwcm90b3R5cGUiLCJnZXRDYXJkVFYiLCJnZXRTdGJOdW0iLCJnZXRSZWdpb25Db2RlIiwiZ2V0R2xvYmFsVmFyIiwiYUNvb2tpZSIsImRvY3VtZW50IiwiY29va2llIiwiaSIsImFDcnVtYiIsImVzY2FwZSIsInVuZXNjYXBlIiwic2V0R2xvYmFsVmFyIiwicmVnaW9uIiwiR2V0Q0FSZWdpb25JRCIsImciLCJHbG9iYWwiLCJHbG9iYWwyIiwidmFsdWUiLCJpY05vIiwicmVnaW9uQ29kZSIsIlN5c1NldHRpbmciLCJnZXRFbnYiLCJzZXRFbnYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7O0FBR0EsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkIsUUFBSSwrREFBQUMsSUFBWSw2REFBQUMsQ0FBT0MsSUFBdkIsRUFBNkI7QUFDekIsWUFBSUMsa0JBQWtCLCtEQUFBQyxDQUFRQyxRQUFSLENBQWlCLG9CQUFqQixDQUF0QjtBQUNBLFlBQUlGLG1CQUFtQixHQUF2QixFQUE0QjtBQUFDO0FBQ3pCO0FBQ0FDLFlBQUEsK0RBQUFBLENBQVFFLFFBQVIsQ0FBaUIsd0JBQWpCLEVBQTJDUCxNQUEzQztBQUNBO0FBQ0gsU0FKRCxNQUlPO0FBQ0gsZ0JBQUksNENBQTRDUSxJQUE1QyxDQUFpREMsVUFBVUMsU0FBM0QsQ0FBSixFQUEyRTtBQUN2RSxvQkFBSUMsT0FBT0MsUUFBWCxFQUFxQjtBQUNqQkQsMkJBQU9DLFFBQVAsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDSDtBQUNEQyx5QkFBU0MsSUFBVCxHQUFnQmQs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Q3lCLHFCQUFTQyxNQUFULEdBQWtCRyxPQUFPOUIsT0FBUCxJQUFrQixHQUFsQixHQUF3QjhCLE9BQU83QixRQUFQLENBQTFDO0FBQ0g7QUFyQmUsS0FBcEI7QUF1Qkg7O0FBRUQsSUFBSXpCLFVBQVUsSUFBSTJDLE9BQUosRUFBZCIsImZpbGUiOiJqcy9yZXNpemUuZjkzMjIyOWMxNmEyZDdkY2QzZjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjOWRmMjUxNWE5MWFlMzZiMmYxIiwiaW1wb3J0IHtzdGJOdWxsfSBmcm9tICcuL3Rvb2RvL19zdGJudWxsJztcclxuaW1wb3J0IHtyZXRhaWwsIHJldGFpbElkfSBmcm9tICcuL3Rvb2RvL19yZXRhaWwnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZTY0MChkc3RVcmwpIHtcclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIHZhciBoZF9wYWdlX3N1cHBvcnQgPSBzdGJOdWxsLmdldFZhbHVlKFwiUkVTT0xVVElPTl82NDBfNTI2XCIpO1xyXG4gICAgICAgIGlmIChoZF9wYWdlX3N1cHBvcnQgPT0gXCIxXCIpIHsvL+inhui+vuenkVxyXG4gICAgICAgICAgICAvL+iuvue9rui/m+WFpeagh+a4hemhtemdolxyXG4gICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKFwiUkVTT0xVVElPTl82NDBfNTI2X1VSTFwiLCBkc3RVcmwpO1xyXG4gICAgICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBkc3RVcmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKC80XFwuMFxcLjQgTW9iaWxlXFwvN0I1MDAgU2FmYXJpXFwvNTMxXFwuMjFcXC4xMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlbi5yZXNpemVUbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbi5yZXNpemVUbyg2NDAsIDUyNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gZHN0VXJsOyAvL3dlYmtpdFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGRzdFVybDsgLy93YXRlcndvbGZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGRzdFVybDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzaXplMTI4MChkc3RVcmwpIHtcclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIHZhciBoZF9wYWdlX3N1cHBvcnQgPSBzdGJOdWxsLmdldFZhbHVlKFwiUkVTT0xVVElPTl8xMjgwXzcyMFwiKTtcclxuICAgICAgICBpZiAoaGRfcGFnZV9zdXBwb3J0ID09IFwiMVwiKSB7Ly/op4bovr7np5FcclxuICAgICAgICAgICAgLy/orr7nva7ov5vlhaXmoIfmuIXpobXpnaJcclxuICAgICAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZShcIlJFU09MVVRJT05fMTI4MF83MjBfVVJMXCIsIGRzdFVybCk7XHJcbiAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IGRzdFVybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoLzRcXC4wXFwuNCBNb2JpbGVcXC83QjUwMCBTYWZhcmlcXC81MzFcXC4yMVxcLjEwLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2NyZWVuLnJlc2l6ZVRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuLnJlc2l6ZVRvKDEyODAsIDcyMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gZHN0VXJsOyAvL3dlYmtpdFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGRzdFVybDsgLy93YXRlcndvbGZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGRzdFVybDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VRdWVyeShxdWVyeSkge1xyXG4gICAgdmFyIHN0YXJ0ID0gcXVlcnkuaW5kZXhPZignPycpO1xyXG4gICAgaWYgKHN0YXJ0ID49IDApIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKHN0YXJ0ICsgMSk7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICB2YXIgYXJyID0gcXVlcnkuc3BsaXQoJyYnKTtcclxuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgYXJyLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgdmFyIHYgPSBhcnJbbV07XHJcbiAgICAgICAgdmFyIHRtcCA9IHYuc3BsaXQoJz0nKTtcclxuICAgICAgICByZXN1bHRbdG1wWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudCh0bXBbMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8hIGphdmHmuLjmiI/pgIDlh7rov5Tlm57kuIrkuIDpobXvvIzogIzkuI3mmK/ph43lrprlkJHov5Tlm57lnLDlnYBcclxudmFyIGtleU5hbWUgPSAnaXNDYWxsR2FtZSc7XHJcbnZhciBrZXlWYWx1ZSA9IHN0Yk51bGwuZ2V0VmFsdWUoa2V5TmFtZSk7XHJcblxyXG52YXIgcGFyYW1zID0gcGFyc2VRdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuaWYgKGtleVZhbHVlID09IFwiXCIpIHtcclxuICAgIHN0Yk51bGwuc2V0VmFsdWUoa2V5TmFtZSwgcmV0YWlsSWQpO1xyXG4gICAgcmVzaXplNjQwKHBhcmFtcy5yZWRpcmVjdFVybCk7XHJcbn0gZWxzZSB7XHJcbiAgICBzdGJOdWxsLnNldFZhbHVlKGtleU5hbWUsICcnKTtcclxuICAgIHJlc2l6ZTEyODAocGFyYW1zLnJldHVyblVybCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Jlc2l6ZS5qcyIsImNvbnN0IHJldGFpbCA9IHtcclxuICAgIGd4Z2Q6ICc5NjMzNScsXHJcbiAgICBobnl4OiAnOTYyNjYnLFxyXG4gICAgZ2RnZDogJzk2OTU2JyxcclxuICAgIG5vbmU6ICcxMDAwJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UmV0YWlsSWQoKSB7XHJcbiAgICB0cnkgey8v5bm/6KW/5bm/55S1XHJcbiAgICAgICAgaWYgKGd1YW5neGkgJiYgaVBhbmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ3hnZDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICB0cnkgey8v5rKz5Y2X5pyJ57q/XHJcbiAgICAgICAgdmFyIFN5c3RlbSA9IHdpbmRvdy5TeXN0ZW07XHJcbiAgICAgICAgaWYgKFN5c3RlbSAmJiBTeXN0ZW0uc3RiSUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5obnl4O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/lub/kuJzlub/nlLVcclxuICAgICAgICBpZiAoQ0EgJiYgU3RvcmFnZVNlcnZpY2UgJiYgRmlsZVN5c3RlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmdkZ2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFyIHN0b3JhZ2VMaXN0ID0gU3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZUluZm9zKCk7XHJcbiAgICAgICAgLy9pZiAoc3RvcmFnZUxpc3QgJiYgc3RvcmFnZUxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyAgICB2YXIgcGFydGl0aW9uUGF0aExpc3QgPSBzdG9yYWdlTGlzdFswXS5nZXRQYXJ0aXRpb25zSW5mbygpWzBdO1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoID0gcGFydGl0aW9uUGF0aExpc3QucGF0aDtcclxuICAgICAgICAvLyAgICB2YXIgZGlyID0gRmlsZVN5c3RlbS5nZXREaXJlY3RvcnkocGFydGl0aW9uUGF0aCk7XHJcbiAgICAgICAgLy8gICAgdmFyIGZsaXN0ID0gZGlyLmZpbGVMaXN0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgZm9yICh2YXIgaSBpbiBmbGlzdCkge1xyXG4gICAgICAgIC8vICAgICAgICBpZiAoZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoMCwgNikgPT0gXCJjYWNhcmRcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgdmFyIGNhcmRObyA9IFwiOTY5NTZcIiArIGZsaXN0W2ldLm5hbWUuc3Vic3RyaW5nKDYsIDEyKTtcclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiByZXRhaWwubm9uZTtcclxufVxyXG5cclxudmFyIHJldGFpbElkID0gZ2V0UmV0YWlsSWQoKTtcclxuZXhwb3J0IHtyZXRhaWwsZ2V0UmV0YWlsSWQscmV0YWlsSWR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3JldGFpbC5qcyIsImltcG9ydCB7cmV0YWlsSWQscmV0YWlsfSBmcm9tIFwiLi9fcmV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBTdGJOdWxsKCkge1xyXG59XHJcbmlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkgey8vIOW5v+ilv+W5v+eUtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAvL+iOt+WPluacuumhtuebkuWPt+Wtl+espuS4slxyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ3Vhbmd4aS5nZXRTdGJOdW0oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6I635Y+W5Yy65Z+f56CB5bi45pWwXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaVBhbmVsLmdldEdsb2JhbFZhcihcIkdFVF9NRURJQV9SRUdJT05fSURcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpUGFuZWwuZ2V0R2xvYmFsVmFyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYUNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhQ29va2llLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFDcnVtYiA9IGFDb29raWVbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlc2NhcGUoa2V5TmFtZSkgPT0gYUNydW1iWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVuZXNjYXBlKGFDcnVtYlsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCByZXN1bHQgPT0gXCIjXCIgfHwgcmVzdWx0ID09IFwiY2xlYXJWYWx1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlWYWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZSA9IFwiY2xlYXJWYWx1ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpUGFuZWwuc2V0R2xvYmFsVmFyKGtleU5hbWUsIGtleVZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKGtleU5hbWUpICsgXCI9XCIgKyBlc2NhcGUoa2V5VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkgey8vIOays+WNl+aciee6vyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzdGVtLnN0YklEO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVnaW9uID0gJ2hueXgnO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVnaW9uID0gU3lzdGVtLkdldENBUmVnaW9uSUQoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZWdpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgZyA9IHt2YWx1ZTogbnVsbH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGcudmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbDIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZy52YWx1ZSA9IGtleVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmdkZ2QpIHsvLyDlub/kuJzlub/nlLUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghQ0EuaWNObykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc5Njk1NjEwMDg2JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQ0EuaWNObztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENBLnJlZ2lvbkNvZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN5c1NldHRpbmcuZ2V0RW52KGtleU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBTeXNTZXR0aW5nLnNldEVudihrZXlOYW1lLCBrZXlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIHtcclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzEwMDg2JztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGFDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhQ29va2llLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhQ3J1bWIgPSBhQ29va2llW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlc2NhcGUoa2V5TmFtZSkgPT0gYUNydW1iWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5lc2NhcGUoYUNydW1iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUoa2V5TmFtZSkgKyBcIj1cIiArIGVzY2FwZShrZXlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxudmFyIHN0Yk51bGwgPSBuZXcgU3RiTnVsbCgpO1xyXG5leHBvcnQge1N0Yk51bGwsc3RiTnVsbH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19zdGJudWxsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==