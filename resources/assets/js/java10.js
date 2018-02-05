import {StbClient} from "./toodo/_stbcli";
import {getKeyCodes} from './toodo/_keycodes';
import {showDialog} from "./app/dialog";
import {hideLoading, showLoading} from "./app/loading";
import {getJSON} from "./app/abc";

import {HomeMenu} from './HomeMenu';
import {Java10Page} from './Java10Page';
import {javaCoin} from './Java10Coin';
import {pageUrl} from './app/PageUrl';
import {rechargeArgs,appArgs} from './app/PageArgs';


const keyCode = getKeyCodes();
const stbcli = new StbClient();

function onStart(code, biz) {
    hideLoading(function () {
        if (code != 0) {
            showDialog(function (btn) {
                if (btn == 0) {
                    showLoading('自动登陆', '小双在使劲加载，请稍候...');
                    stbcli.start(onStart);
                } else {
                    java10Page.show(currentIndex, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            javaCoin.show(biz.coins);
            java10Page.show(currentIndex, onPageKey);
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.down:
            homeMenu.hide();
            java10Page.show(java10Page.current, onPageKey);
            break;
        case keyCode.ok:
            if (homeMenu.current == 2) {
                appArgs.onHomePage();
            }
            break;
        case keyCode.num0:
        case keyCode.back:
            appArgs.onHomePage();
            break;
    }
}

function onPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (currentIndex) {
                case 0:
                case 2:
                case 3:
                case 6:
                case 8:
                    java10Page.hide();
                    homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
                    //homeMenu.show(homeMenu.current, onMenuKey);
                    break;
            }
            break;
        case keyCode.ok:
            //未登录
            if (!tdeUser) {
                showLoading('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var itemInfo = java10Page.itemInfos[currentIndex];
            if (tdeUser.coins <= 0) {
                var callUrl = pageUrl.callUrl(itemInfo, window.location.href);
                rechargeArgs.setReturnUrl(callUrl);
                window.location.href = 'recharge.html';
                break;
            }
            if (itemInfo.trial == 1) {
                pageUrl.callGame(itemInfo, window.location.href);
                break;
            }
            showDialog(function (btn) {
                if (btn == 0) {
                }
                java10Page.show(currentIndex, onPageKey);
            }, 1, '敬请期待', '服务暂未开通哦！', '确定', '取消');
            break;
        case keyCode.num0:
        case keyCode.back:
            appArgs.onHomePage();
            break;
        case keyCode.esc:
            appArgs.onFirstPage();
            break;
    }
    currentIndex = java10Page.current;
}


var homeMenu;
var java10Page;
var currentIndex;
var tdeUser = null;

window.onload = function () {
    homeMenu = new HomeMenu();

    java10Page = new Java10Page();
    currentIndex = java10Page.current;

    getJSON('data/tde_java10_infos.json', function (itemInfos) {
        //如果给的数据不是整形，则转换一次
        for (var i = 0; i < itemInfos.length; ++i) {
            var info = itemInfos[i];
            info.id = parseInt(info.id);
            info.gameId = parseInt(info.gameId);
            info.productId = parseInt(info.productId);
            info.prodId = parseInt(info.prodId);
            info.trial = parseInt(info.trial);
        }
        java10Page.start(itemInfos, function () {
            //showLoading('自动登陆', '小双在使劲加载，请稍候...');
            //stbcli.start(onStart);
        });
        java10Page.show(java10Page.current, onPageKey);

        setTimeout(function () {
            showLoading();
            stbcli.start(onStart);
        }, 100);
    });

};