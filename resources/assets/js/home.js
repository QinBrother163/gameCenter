import {retail,retailId} from './toodo/_retail';
import {getKeyCodes} from './toodo/_keycodes';
import {showDialog} from "./app/dialog";


import {childMenu} from "./app/childMenu";
import {HomeMenu} from './HomeMenu';
import {HomePage} from './HomePage';
import {pageUrl} from './app/PageUrl';
import {shopArgs,rechargeArgs,appArgs} from './app/PageArgs';

import {stbcli} from "./toodo/_stbcli";
import {stbNull} from './toodo/_stbnull';
import {hideLoading, showLoading} from "./app/loading";


var keyCode = getKeyCodes();


function onStart(code, biz) {
    hideLoading(function () {
        if (code != 0) {
            showDialog(function (btn) {
                if (btn == 0) {
                    showLoading('自动登陆', '小双在使劲加载，请稍候...');
                    stbcli.start(onStart);
                } else {
                    homePage.show(homePage.current, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            if (retailId == retail.gxgd) {
                waitBizUser();
            } else {
                waitBizUser();
                //homePage.show(homePage.current, onPageKey);
            }
        }
    });
}

function waitBizUser() {
    var queryIn = {};
    try {
        //?user_id=527284&device_id=40570049629&area_code=0101
        queryIn = pageUrl.parseQuery(window.location.href);
    } catch (e) {
    }
    stbcli.bizUser({
        userId: queryIn.user_id,
        stbId: queryIn.device_id,
        areaCode: queryIn.area_code,
        search: window.location.search
    }, onBizUser);
}

function onBizUser(code, biz) {
    if (code != 0) {
        showDialog(function (btn) {
            if (btn == 0) {
                waitBizUser();
            } else {
                homePage.show(homePage.current, onPageKey);
            }
        }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
    } else {
        tdeUser.bizUser = biz.bizUser;
        homePage.show(homePage.current, onPageKey);
    }
}

function onMenuKey(key) {//页面键值
    switch (key) {
        case keyCode.down:
            homeMenu.hide();
            homePage.show(homePage.current, onPageKey);
            break;
        case keyCode.ok:
            if (homeMenu.current == 2) {
                appArgs.onFirstPage();
            }
            break;
        case keyCode.num0:
        case keyCode.back:
            appArgs.onFirstPage();
            break;
    }
}

function onPageKey(key) {//页面键值
    switch (key) {
        case keyCode.up:
            if (currentIndex < 5) {
                homePage.hide();
                homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
            }
            break;
        case keyCode.ok:
            switch (homePage.current) {
                case 0:
                    window.location.href = "game.html";
                    break;
                case 1:
                    window.location.href = "java10.html";
                    break;
                case 2:
                    window.location.href = "java20.html";
                    break;
                case 3:
                    rechargeArgs.setReturnUrl(window.location.href);
                    window.location.href = "recharge.html";
                    break;
                case 4:
                    shopArgs.setReturnUrl(window.location.href);
                    window.location.href = "shop.html";
                    break;
            }
            break;
        case keyCode.esc:
        case keyCode.num0:
        case keyCode.back:
            appArgs.onFirstPage();
            break;
        case keyCode.num7:
            //var ts = new Date().getTime();
            //window.location.href = "/tdance/move3.html?ts=" + ts;
            break;
        case keyCode.num8:
            //window.location.href = "/tdance";
            break;
        case keyCode.num9:
            //var ts = new Date().getTime();
            //window.location.href = "/tdance/gxgdVideo.html?ts=" + ts;
            break;
    }
    currentIndex = homePage.current;
}

if (retailId == retail.gxgd) {
    appArgs.setRedirectUrl('http://10.1.15.43/nn_cms/nn_cms_view/gxcatv20/go_idc_v2.1.php?page=linux_home_hd');
} else {
    appArgs.setRedirectUrl(window.location.href);
}
appArgs.setReturnUrl(window.location.href);


var homeMenu;
var homePage;
var currentIndex;
var tdeUser;


window.onload = function () {
    homeMenu = new HomeMenu();
    homePage = new HomePage();
    currentIndex = homePage.current;
    homePage.show(homePage.current, onPageKey);

    setTimeout(function () {
        showLoading();
        stbcli.start(onStart);
    }, 100);
};
