import {stbNull} from './toodo/_stbnull';
import {retail, retailId} from './toodo/_retail';


function resize640(dstUrl) {
    if (retailId == retail.gxgd) {
        var hd_page_support = stbNull.getValue("RESOLUTION_640_526");
        if (hd_page_support == "1") {//视达科
            //设置进入标清页面
            stbNull.setValue("RESOLUTION_640_526_URL", dstUrl);
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
    if (retailId == retail.gxgd) {
        var hd_page_support = stbNull.getValue("RESOLUTION_1280_720");
        if (hd_page_support == "1") {//视达科
            //设置进入标清页面
            stbNull.setValue("RESOLUTION_1280_720_URL", dstUrl);
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
var keyValue = stbNull.getValue(keyName);

var params = parseQuery(window.location.search);
if (keyValue == "") {
    stbNull.setValue(keyName, retailId);
    resize640(params.redirectUrl);
} else {
    stbNull.setValue(keyName, '');
    resize1280(params.returnUrl);
}