import {retail,retailId} from './toodo/_retail';
import {StbClient} from "./toodo/_stbcli";
import {getKeyCodes} from './toodo/_keycodes';
import {hideLoading, showLoading} from "./app/loading";
import {showDialog} from "./app/dialog";
import {getJSON} from "./app/abc";
import {showChildLock} from "./app/childLock";

import {HomeMenu} from './HomeMenu';
import {GamePage} from './GamePage';
import {pageUrl} from './app/PageUrl';
import {callbackArgs,appArgs} from './app/PageArgs';
import {showAd29} from './app/dialogBigAd';


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
                    gamePage.show(currentIndex, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            gamePage.show(currentIndex, onPageKey);
        }
    });
}

function onQueryServe1(code, biz) {
    hideLoading(function () {
        var itemInfo = itemInfos[currentIndex];
        if (code == 0 && biz && biz.productId == itemInfo.productId) {
            if (itemInfo.gameId == '10011') {
                pageUrl.callGameBase(itemInfo, window.location.href);
            } else {
                pageUrl.callGame(itemInfo, window.location.href);
            }
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
        var itemInfo = itemInfos[currentIndex];
        if (code == 0 && biz && biz.productId == itemInfo.prodId) {
            var cb = function (btn) {
                if (btn == 0) {
                    if (tdeUser.childLock) {
                        showChildLock(function (code, msg) {
                            onValidLock(code, msg, gamePage, itemInfo);
                        }, 1, 0);
                    } else {
                        sendOrder(itemInfo);
                    }
                } else {
                    gamePage.show(currentIndex, onPageKey);
                }
            };

            //let text = '';
            //if (biz.category == 0) {
            //    text = '您将花费' + biz.price / 100 + '元/月订购' + biz.goodsName;
            //} else {
            //    text = '您将花费' + biz.price / 100 + '元购买' + biz.goodsName;
            //}
            //showDialog(cb, 0, '订购信息', text, '确认', '取消');
            showAd29(cb, 0, 29);

        } else {
            showDialog(function (btn) {
                if (btn == 0) {
                    showLoading('提示', '正在加载，请稍候...');
                    stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
                } else {
                    gamePage.show(currentIndex, onPageKey);
                }
            }, 0, '提示', '没有找到产品信息哦！', '重试', '取消');
        }
    });
}

function onOrder1(code, biz) {
    hideLoading(function () {
        var itemInfo = itemInfos[currentIndex];
        if (code == 0 && biz) {
            showLoading('提示', '正在处理，请稍候...');
            var callUrl;
            if (itemInfo.gameId == '10011') {
                callUrl = pageUrl.callUrlBase(itemInfo, window.location.href);
            } else {
                callUrl = pageUrl.callUrl(itemInfo, window.location.href);
            }
            callbackArgs.setRedirectUrl(callUrl);
            callbackArgs.setReturnUrl(window.location.href);
            stbcli.pay(biz.tradeNo);
        } else {
            showDialog(function (btn) {
                if (btn == 0) {
                    sendOrder(itemInfo);
                } else {
                    gamePage.show(currentIndex, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.down:
            homeMenu.hide();
            gamePage.show(currentIndex, onPageKey);
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
            if (currentIndex != 3) {
                gamePage.hide();
                homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
                //homeMenu.show(homeMenu.current, onMenuKey);
            }
            break;
        case keyCode.ok:
            if (!stbcli.isReady) {
                showLoading('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var itemInfo = itemInfos[currentIndex];
            if (itemInfo.productId == 3 && !canVideo()) {
                showDialog(function (btn) {
                    gamePage.show(currentIndex, onPageKey);
                }, 1, '敬请期待', '该机顶盒型号暂不支持体感热舞游戏,请联系96335更换机顶盒.', '确定', '取消', 'left');
                break;
            }
            if (itemInfo.trial == 1) {
                if (itemInfo.gameId == '10011') {
                    pageUrl.callGameBase(itemInfo, window.location.href);
                } else {
                    pageUrl.callGame(itemInfo, window.location.href);
                }
                break;
            }
            if (itemInfo.trial == 2) {
                showDialog(function (btn) {
                    gamePage.show(currentIndex, onPageKey);
                }, 1, '敬请期待', '服务暂未开通哦！', '确定', '取消');
                break;
            }
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
    currentIndex = gamePage.current;
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

function canVideo() {
    if (retailId == retail.gxgd) {
        var embed = iPanel.getGlobalVar("VOD_EMBEDDED_VERSION");
        if (embed == '#' || embed == 0) {
            return false;
        }
    }
    return true;
}

var homeMenu;
var gamePage;
var itemInfos = [];
var currentIndex;
var tdeUser;

window.onload = function () {
    homeMenu = new HomeMenu();

    gamePage = new GamePage();
    currentIndex = gamePage.current;
    gamePage.show(currentIndex, onPageKey);

    var ts = new Date().getTime();
    getJSON("data/tde_game_infos.json?ts=" + ts, function (data) {
        for (var i = 0; i < data.length; i++) {
            itemInfos.push(data[i]);
        }

        setTimeout(function () {
            showLoading();
            stbcli.start(onStart);
        }, 100);
    });

};