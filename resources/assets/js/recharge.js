import {StbClient} from "./toodo/_stbcli";
import {getKeyCodes} from './toodo/_keycodes';
import {hideLoading, showLoading} from "./app/loading";
import {showDialog} from "./app/dialog";
import {getJSON} from "./app/abc";

import {HomeMenu} from './HomeMenu';
import {RechargePage} from './RechargePage';
import {javaCoin} from './Java10Coin';
import {rechargeArgs,callbackArgs,appArgs} from './app/PageArgs';
import {shopBill} from './ShopBill';
import {showChildLock} from "./app/childLock";


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
                    rechargePage.show(rechargePage.current, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            javaCoin.show(biz.coins);
            rechargePage.show(rechargePage.current, onPageKey);
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
        var itemInfo = itemInfos[rechargePage.current];
        if (code == 0 && biz && biz.productId == itemInfo.prodId) {
            let text = '';
            if (biz.category == 0) {
                text = '您将花费' + biz.price / 100 + '元/月订购' + biz.goodsName;
            } else {
                text = '您将花费' + biz.price / 100 + '元购买' + biz.goodsName;
            }

            showDialog(function (btn) {
                if (btn == 0) {
                    if (tdeUser.childLock) {
                        showChildLock(function (code, msg) {
                            onValidLock(code, msg, rechargePage, itemInfo);
                        }, 1, 0);
                    } else {
                        sendOrder(itemInfo);
                    }
                } else {
                    rechargePage.show(rechargePage.current, onPageKey);
                }
            }, 0, '订购信息', text, '确认', '取消');
        } else {
            showDialog(function (btn) {
                if (btn == 0) {
                    showLoading('提示', '正在加载，请稍候...');
                    stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
                } else {
                    rechargePage.show(rechargePage.current, onPageKey);
                }
            }, 0, '提示', '没有找到产品信息哦！', '重试', '取消');
        }
    });
}

function onOrder1(code, biz) {
    hideLoading(function () {
        var itemInfo = itemInfos[rechargePage.current];
        if (code == 0 && biz) {
            showLoading('提示', '正在处理，请稍候...');
            callbackArgs.setRedirectUrl(window.location.href);
            callbackArgs.setReturnUrl(window.location.href);
            stbcli.pay(biz.tradeNo);
        } else {
            showDialog(function (btn) {
                if (btn == 0) {
                    sendOrder(itemInfo);
                } else {
                    rechargePage.show(rechargePage.current, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = rechargeArgs.getReturnUrl();
            break;
        case keyCode.esc:
            appArgs.onFirstPage();
            break;
        case keyCode.down:
            homeMenu.hide();
            rechargePage.show(rechargePage.current, onPageKey);
            break;
        case keyCode.ok:
            if (homeMenu.current == 2) {
                window.location.href = rechargeArgs.getReturnUrl();
            }
            break;
    }
}

function onPageKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = rechargeArgs.getReturnUrl();
            break;
        case keyCode.esc:
            appArgs.onFirstPage();
            break;
        case keyCode.ok:
            //未登录
            if (!stbcli.isReady) {
                showLoading('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var itemInfo = itemInfos[rechargePage.current];
            //未开通
            showLoading('提示', '正在加载，请稍候...');
            stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
            break;
        case keyCode.up:
            rechargePage.hide();
            homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
            break;
        case keyCode.down:
            rechargePage.hide();
            shopBill.show(shopBill.current, onBillKey, tdeUser);
            break;
    }
}

function onBillKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = rechargeArgs.getReturnUrl();
            break;
        case keyCode.esc:
            appArgs.onFirstPage();
            break;
        case keyCode.up:
            shopBill.hide();
            rechargePage.show(rechargePage.current, onPageKey);
            break;
    }
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


var homeMenu;
var rechargePage;
var itemInfos = [];
var tdeUser;

window.onload = function () {
    homeMenu = new HomeMenu();
    rechargePage = new RechargePage();
    rechargePage.show(rechargePage.current, onPageKey);

    //showLoading('提示', '正在加载，请稍候...');
    getJSON("data/tde_recharge_infos.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            itemInfos.push(data[i]);
        }

        setTimeout(function () {
            showLoading();
            stbcli.start(onStart);
        }, 100);
    });
};