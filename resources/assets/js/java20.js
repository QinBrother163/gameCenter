import {StbClient} from "./toodo/_stbcli";
import {getKeyCodes} from './toodo/_keycodes';
import {hideLoading, showLoading} from "./app/loading";
import {showDialog} from "./app/dialog";
import {getJSON} from "./app/abc";
import {showChildLock} from "./app/childLock";

import {HomeMenu} from './HomeMenu';
import {Java20Page} from './Java20Page';
import {pageUrl} from './app/PageUrl';
import {callbackArgs,appArgs} from './app/PageArgs';
import {showAd16} from './app/dialogBigAd';


var stbcli = new StbClient();
var keyCode = getKeyCodes();

// var callbackUrl = location.protocol + '//' + location.host + '/tdenter/callback.html';
var callbackUrl = "http://120.77.82.54/tdGameCenter/callback.html";

function onStart(code, biz) {
    hideLoading(function () {
        if (code != 0) {
            showDialog(function (btn) {
                if (btn == 0) {
                    showLoading('自动登陆', '小双在使劲加载，请稍候...');
                    stbcli.start(onStart);
                } else {
                    java20Page.show(currentIndex, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            java20Page.show(currentIndex, onPageKey);
        }
    });
}

function onQueryServe1(code, biz) {
    hideLoading(function () {
        var pageIndex = java20Page.pageIndex;
        var itemInfo = java20Page.itemInfos[pageIndex * 10 + currentIndex];
        if (code == 0 && biz && biz.productId == itemInfo.productId) {
            pageUrl.callGame(itemInfo, window.location.href);
        } else {
            showLoading('提示', '正在加载，请稍候...');
            stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
        }
    });
}

/**
 * @param code
 * @param biz
 * @param biz.category
 * @param biz.productId
 * @param biz.price
 * @param biz.goodsName
 */
function onQueryProduct1(code, biz) {
    hideLoading(function () {
        var pageIndex = java20Page.pageIndex;
        var itemInfo = java20Page.itemInfos[pageIndex * 10 + currentIndex];
        if (code == 0 && biz && biz.productId == itemInfo.prodId) {
            var cb = function (btn) {
                if (btn == 0) {
                    if (tdeUser.childLock) {
                        showChildLock(function (code, msg) {
                            onValidLock(code, msg, java20Page, itemInfo);
                        }, 1, 0);
                    } else {
                        sendOrder(itemInfo);
                    }
                } else {
                    java20Page.show(currentIndex, onPageKey);
                }
            };

            //let text = '';
            //if (biz.category == 0) {
            //    text = '您将花费' + biz.price / 100 + '元/月订购' + biz.goodsName;
            //} else {
            //    text = '您将花费' + biz.price / 100 + '元购买' + biz.goodsName;
            //}
            //showDialog(cb, 0, '订购信息', text, '确认', '取消');
            showAd16(cb, 0);

        } else {
            showDialog(function (btn) {
                if (btn == 0) {
                    showLoading('提示', '正在加载，请稍候...');
                    stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
                } else {
                    java20Page.show(currentIndex, onPageKey);
                }
            }, 0, '提示', '没有找到产品信息哦！', '重试', '取消');
        }
    });
}

function onOrder1(code, biz) {
    hideLoading(function () {
        var pageIndex = java20Page.pageIndex;
        var itemInfo = java20Page.itemInfos[pageIndex * 10 + currentIndex];
        if (code == 0 && biz) {
            showLoading('提示', '正在处理，请稍候...');
            var callUrl = pageUrl.callUrl(itemInfo, window.location.href);
            callbackArgs.setRedirectUrl(callUrl);
            callbackArgs.setReturnUrl(window.location.href);
            stbcli.pay(biz.tradeNo);
        } else {
            showDialog(function (btn) {
                if (btn == 0) {
                    sendOrder(itemInfo);
                } else {
                    java20Page.show(currentIndex, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.down:
            homeMenu.hide();
            java20Page.show(java20Page.current, onPageKey);
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
            //if (currentIndex % 2 == 0) {
            //    java20Page.hide();
            //    homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
            //    //homeMenu.show(homeMenu.current, onMenuKey);
            //}
            switch (currentIndex){
                case 0:
                case 2:
                case 3:
                case 6:
                case 8:
                case 9:
                case 11:
                case 12:
                case 15:
                case 17:
                    java20Page.hide();
                    homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
                //homeMenu.show(homeMenu.current, onMenuKey);
                    break;
                default:
                    break;
            }
            break;
        case keyCode.ok:
            //未登录
            if (!stbcli.isReady) {
                showLoading('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var pageIndex = java20Page.pageIndex;
            var itemInfo = java20Page.itemInfos[pageIndex * 10 + currentIndex];
            if (itemInfo.trial == 1) {
                pageUrl.callGame(itemInfo, window.location.href);
                break;
            }
            if (itemInfo.trial == 2) {
                showDialog(function (btn) {
                    if (btn == 0) {
                    }
                    java20Page.show(currentIndex, onPageKey);
                }, 1, '敬请期待', '服务暂未开通哦！', '确定', '取消');
                break;
            }
            //未开通
            showLoading('提示', '正在加载，请稍候...');
            stbcli.queryServe1(itemInfo.productId, onQueryServe1);
            break;
        case keyCode.num0:
        case keyCode.back:
            appArgs.onHomePage();
            break;
        case keyCode.esc:
            appArgs.onFirstPage();
            break;
    }
    currentIndex = java20Page.current;
}

/**
 * @param code {int}
 * @param msg {string}
 * @param owner {HomeMenu}
 * @param itemInfo {Object}
 */
function onValidLock(code, msg, owner, itemInfo) {
    if (code == 0) {
        var oldLock = tdeUser.childLock;
        if (msg == oldLock) {
            sendOrder(itemInfo);
        } else {
            showDialog(function (btn) {
                if (btn == 0) {
                    showChildLock(function (code, msg) {
                        onValidLock(code, msg, owner, itemInfo);
                    }, 1, 0);
                } else {
                    owner.show(owner.current, onPageKey);
                }
            }, 0, '提示', '童锁验证出错', '重试', '取消');
        }
    } else {
        owner.show(owner.current, onPageKey);
    }
}

function sendOrder(itemInfo) {
    var data = {
        "id": itemInfo.id,
        "gameId": itemInfo.gameId,
        "productId": itemInfo.productId,
        "prodId": itemInfo.prodId,
        "trial": itemInfo.trial
    };
    var args = JSON.stringify(data);
    showLoading('提示', '正在处理，请稍候...');
    stbcli.order1(itemInfo.prodId, callbackUrl, args, onOrder1);
}


var tdeUser = null;
var homeMenu;
var java20Page;
var currentIndex;
window.onload = function () {
    homeMenu = new HomeMenu();

    java20Page = new Java20Page();
    currentIndex = java20Page.current;

    getJSON('data/tde_java20_infos.json', function (itemInfos) {
        //如果给的数据不是整形，则转换一次
        for (var i = 0; i < itemInfos.length; ++i) {
            var itemInfo = itemInfos[i];
            itemInfo.id = parseInt(itemInfo.id);
            itemInfo.gameId = parseInt(itemInfo.gameId);
            itemInfo.productId = parseInt(itemInfo.productId);
            itemInfo.prodId = parseInt(itemInfo.prodId);
            itemInfo.trial = parseInt(itemInfo.trial);
        }
        java20Page.start(itemInfos, function () {
            //showLoading('自动登陆', '小双在使劲加载，请稍候...');
            //stbcli.start(onStart);
        });
        java20Page.show(java20Page.current, onPageKey);

        setTimeout(function () {
            showLoading();
            stbcli.start(onStart);
        }, 100);
    });
};