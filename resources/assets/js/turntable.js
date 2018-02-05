import {StbClient} from "./toodo/_stbcli";
import {getKeyCodes} from './toodo/_keycodes';
import {hideLoading, showLoading} from "./app/loading";
import {showDialog} from "./app/dialog";
import {getJSON} from "./app/abc";
import {HomeMenu} from './HomeMenu';
import {TurntablePage} from './TurntablePage';
import {Roll} from './roll';
import { callbackArgs, appArgs,turnTableArgs} from './app/PageArgs';
import {showReceiveDialog} from './app/receiveDialog';
import {showOrderDialog} from './app/orderDialog';
import {showAd29} from './app/dialogBigAd';
import {showChildLock} from "./app/childLock";
import {BillTable} from "./turnTableBill";
import {showAgainDialog} from './app/againDialog'
import {retail,retailId} from './toodo/_retail';
var stbcli = new StbClient();
var keyCode = getKeyCodes();

// var callbackUrl = location.protocol + '//' + location.host + '/tdenter/callback.html';
var callbackUrl = "http://120.77.82.54/tdGameCenter/callback.html";
var winnerFlag = false;
var serveFlag = false;
var getFlag = false;
var rollFlag=true;
function onStart(code, biz) {
    hideLoading(function () {
        if (code != 0) {
            showDialog(function (btn) {
                if (btn == 0) {
                    showLoading('自动登陆', '小双在使劲加载，请稍候...');
                    stbcli.start(onStart);
                } else {
                    turntablePage.show(currentIndex, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            turntablePage.show(currentIndex, onPageKey);

            stbcli.winnerInfo(0, function (code, biz) {
                if (code == 0) {
                    stbcli.userWinner(1, function (code, biz) {
                        if (code == 0 && biz && biz.length > 0) {
                            winnerFlag = true;
                            userWinner(biz);
                            callBackInit();
                        }else{
                            callBackInit();
                        }
                    });
                    if (biz.info && biz.info.length > 0) {
                        showinfo(biz.info, -1);
                    } else {
                        document.getElementById("con1-li0").innerHTML = "<span>下一个幸运儿就是你哦！<span>";
                    }
                }else{
                    callBackInit();
                }
            });
        }
    });
}

function callBackInit() {
    var successCode=turnTableArgs.getSuccessCode();
    if(successCode==1){
        var winningId=turnTableArgs.getPrizeID();
        if(winningId!=-1){
            stbcli.getPrize(winningId,function () {
                stbcli.userWinner(1, function (code, biz) {
                    if(code==0&&biz){
                        userWinner(biz);
                    }
                });
            });
        };
        var flag=turnTableArgs.getCallFlag();
        if(flag==1){
            //增加额外机会
            showAgainDialog(function (btn) {
                if(btn==0){
                    stbcli.addState();
                    initFocus();
                }
            });
        }else{
            //改变每日免费机会
            showAgainDialog(function (btn) {
                if(btn==0){
                    stbcli.updataFreeState();
                    initFocus();
                }
            });
        }
        turnTableArgs.setSuccessCode(-1);
        turnTableArgs.setPrizeID(-1);
    }
}


function onMenuKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = "home.html";
            // window.location.href = rechargeArgs.getReturnUrl();
            break;
        case keyCode.esc:
            appArgs.onFirstPage();
            // window.location.href = "home.html";
            break;
        case keyCode.down:
            homeMenu.hide();
            turntablePage.show(currentIndex, onPageKey);
            break;
        case keyCode.ok:
            switch (homeMenu.current) {
                case 0:
                case 1:
                case 2:
                    window.location.href = "home.html";
                    break;
            }
            // if (homeMenu.current == 2) {
            //     window.location.href = rechargeArgs.getReturnUrl();
            // }
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
            switch (currentIndex) {
                case 0:
                    // //抽奖
                    if(rollFlag){
                        if (tdeUser) {
                            stbcli.turntableState(function (code, biz) {
                                switch (biz) {
                                    case 1:
                                        showLoading('提示', '正在加载...');
                                        hideLoading(function () {
                                        },1500);
                                        //免费次数，判断用户类型
                                        stbcli.queryServe1(3, onQueryServe1);
                                        rollFlag=false;
                                        break;
                                    case 2:
                                        showLoading('提示', '正在加载...');
                                        hideLoading(function () {
                                        },500);
                                        //额外 用户类型为5
                                        stbcli.turntablePro(5, rollPro);
                                        rollFlag=false;
                                        break;
                                    case 3:
                                        //包月获取机会
                                        showOrderDialog(function (btn) {
                                            if(btn==0){
                                                turnTableArgs.setCallFlag(2);
                                                onQueryProduct1();
                                            }else{
                                                initFocus();
                                            }
                                        });
                                        break;
                                }
                            });

                        } else {
                            setTimeout(function () {
                                showLoading();
                                stbcli.start(onStart);
                            }, 100);
                        }
                    }

                    break;
                case 1:
                    //打开用户奖品账单
                    stbcli.userWinner(4,onBill);
                    break;
            }
            break;
            break;
        case keyCode.up:
            switch (currentIndex) {
                case 0:
                    turntablePage.hide();
                    homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
                    break;
            }
            break;
        case keyCode.down:
            break;
    }
    currentIndex = turntablePage.current;
}

function onBill(code,biz) {
    if(code==0){
        if(biz && biz.length>0){
            billTable.start(biz);
            billTable.show(billTable.current, onTableKey);
        }else {
            showDialog(function (btn) {
                turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            }, 0, '提示', '没有找到订单记录。', '确定', '返回');
        }
    }else{
        showDialog(function (btn) {
            if (btn == 0) {
                var stbcli = turntablePage.tdeUser.stbcli;
                stbcli.userWinner(4,onBill);
            } else {
                turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            }
        }, 0, '提示', '网络异常，没有找到订单记录。', '重试', '取消');
    }
}

var itemInfo;
function onQueryProduct1() {
            if(!itemInfo){
                getJSON("data/tde_shop_infos.json", function (data) {
                    itemInfo=data[0];
                });
            }
            var cb = function (btn) {
                if (btn == 0) {
                    if (tdeUser.childLock) {
                        showChildLock(function (code, msg) {
                            onValidLock(code, msg, turntablePage, itemInfo);
                        }, 1, 0);
                    } else {
                        sendOrder(itemInfo);
                    }
                } else {
                    if(document.getElementById("bill-layout")){
                        billTable.show(billTable.current,onTableKey);
                    }else{
                        turntablePage.show(turntablePage.current, onPageKey);
                    }

                }
            };
            var price = 2900;
            showAd29(cb, 0, price / 100);
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
        "title": itemInfo.title,
        "gameId": itemInfo.gameId,
        "productId": itemInfo.productId,
        "prodId": itemInfo.prodId,
        "trial": itemInfo.trial,
        "complex": 0
    };
    var args = JSON.stringify(data);
    showLoading('提示', '正在处理，请稍候...');
    callbackArgs.setRedirectUrl(window.location.href);
    callbackArgs.setReturnUrl(window.location.href);
    stbcli.order1(itemInfo.prodId, callbackUrl, args, onOrder1);
}


function onOrder1(code, biz) {
    hideLoading(function () {
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
                    turntablePage.show(currentIndex, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}


var area;
var con1;
var time;
var _top;
var mytimer;
function showinfo(info, num) {
    //轮播
    if (num == -1) {
        area = document.getElementById('scrollBox');
        con1 = document.getElementById('con1');
        time = 50;
        _top = area.scrollTop;
        if (info.length > 30) {
            mytimer = setInterval(scrollUp, time);
        }
    }

    function scrollUp() {
        if (area.scrollTop >= con1.offsetHeight) {
            _top = 0;
            area.scrollTop = _top;
            stbcli.winnerInfo(num++, function (code, biz) {
                if (biz.flag) {
                    num == -1;
                }
                if (code == 0) {
                    if (biz.info && biz.info > 0) {
                        showinfo(biz.info, num++);
                    }
                }
            });
        } else {
            _top++;
            area.scrollTop = _top;
        }
    }

    for (var i = 0; i < info.length; i++) {
        var data = info[i];
        if (info.length < 15) {
            var li = document.getElementById("con1-li" + i);
        } else {
            if (i < info.length / 2) {
                var li = document.getElementById("con1-li" + i);
            } else {
                var li = document.getElementById("con2-li" + i);
            }
        }
        var dataUserName = (data.userName).toString();
        dataUserName = dataUserName.substring(0, 2) + "***" + dataUserName.substring(dataUserName.length - 1, dataUserName.length);
        li.innerHTML = '<span>恭喜用户' + dataUserName + '<span><span>抽中</span>' + '<span>' + data.prizeName + '<span>';
    }
}

//个人中奖商品加载
function userWinner(biz) {
    var dataList = [];
    //奖品区
    var prize_node = document.getElementById("prize-content");
    for (var i = 0; i < biz.length; i++) {
        dataList.push(biz[i].prizeID);
    }
    //根据用户数据自动生成标签
    prize_Html(dataList);
    if(dataList.length<=5){
        prize_Html(dataList);
    }else{
        for (var i = 0; i < 5; i++) {
            var node = document.createElement('div');
            node.setAttribute("id", "prize-item" + i);
            node.setAttribute("class", "prize-item");
            node.innerHTML = '<img src="img/0.png">';
            prize_node.appendChild(node);
            // var node = this.layout.querySelector('#prize-item' + i);
            node.style.left = i * 65 + "px";
            setTimeout(function (i, node) {
                var img = node.querySelector('img');
                img.style.width = 65 + "px";
                img.src = 'img/turntable/thing' + dataList[i] + '.png';
            }, 100 * i, i, node);
        }
    }

    function prize_Html(dataList) {
        for (var i = 0; i < dataList.length; i++) {
            var node = document.createElement('div');
            node.setAttribute("id", "prize-item" + i);
            node.setAttribute("class", "prize-item");
            node.innerHTML = '<img src="img/0.png">';
            prize_node.appendChild(node);
            // var node = this.layout.querySelector('#prize-item' + i);
            node.style.left = i * 65 + "px";
            setTimeout(function (i, node) {
                var img = node.querySelector('img');
                img.style.width = 65 + "px";
                img.src = 'img/turntable/thing' + dataList[i] + '.png';
            }, 100 * i, i, node);
        }
    }
}



//prize code 是最终停留的code(中奖的奖品)
//callback  结束后回调的函数
function rollFun(prize_code, callback) {
    roll.init(prize_code, turntablePage.focusItems);
    roll.start(callback);
}

function rollCallBack(prizeCode) {
    //存入数据(状态为1)
    if(prizeCode!=3){
        stbcli.addWinner(prizeCode,1,function (code,biz) {
            if(code==0 && biz){
                turnTableArgs.setPrizeID(parseInt(biz));
            }
        });
    }
    showReceiveDialog(function (btn) {
        initFocus();
        if(btn==0){
            //领取
           if(prizeCode==3){
                //充值50F币
               stbcli.addCoins(50);
           }else{
               showOrderDialog(function (btn) {
                   if(btn==0){
                       turnTableArgs.setCallFlag(1);
                       onQueryProduct1();
                   }else{
                       initFocus();
                       stbcli.userWinner(1, function (code, biz) {
                            if(code==0&&biz){
                                userWinner(biz);
                            }

                       });
                   }
               });
           }
        }else{
            //跳过
            if(prizeCode==3){
                //充值50F币
                stbcli.addCoins(50);
            }else{
                stbcli.userWinner(1, function (code, biz) {
                    if(code==0&&biz){
                        userWinner(biz);
                    }
                });
            }
        }
    },parseInt(prizeCode));
    rollFlag=true;
}
//判断包月==新老用户
function onQueryServe1(code, biz) {
    hideLoading(function () {
        if (code == 0) {
            if (biz && biz.productId == 3) {
                serveFlag = true;
            } else {
                serveFlag = false;
            }
            ifGet();
        } else {
            stbcli.queryServe1(3, onQueryServe1);
        }
    });
}
//判断是否已经领取过奖品
function ifGet() {
    stbcli.userWinner(2, function (code, biz) {
        if (code == 0) {
            if (biz && biz.length > 0) {
                getFlag = true;

            } else {
                getFlag = false;
            }
            var type = userType();
            stbcli.turntablePro(type, rollPro);
        } else {
            ifGet();
        }
    });
}
function rollPro(code, biz) {
    if (code == 0 && biz) {
        var proItem = [biz[0].onePro, biz[0].twoPro, biz[0].threePro, biz[0].fourPro, biz[0].fivePro, biz[0].sixPro];
        var prizeItem = [1, 4, 5, 2, 0, 3];
        var one = parseInt(proItem[0] * 100);
        var two = parseInt(proItem[1] * 100);
        var three = parseInt(proItem[2] * 100);
        var four = parseInt(proItem[3] * 100);
        var five = parseInt(proItem[4] * 100);
        var six = parseInt(proItem[5] * 100);
        var res = parseInt(Math.random() * 100);
        var prizeID;

        stbcli.prizeNum(function (code,biz) {
            if(code==0){
                if(biz==undefined){
                    ifPro();
                }else{
                    for(var i=0;i<biz.length;i++){
                        switch (biz[i].prizeID){
                            case 0:
                                six=six+five;
                                five=0;
                                break;
                            case 1:
                                six=six+one;
                                one=0;
                                break;
                            case 2:
                                six=six+four;
                                four=0;
                                break;
                            case 3:
                                break;
                            case 4:
                                six=six+two;
                                two=0;
                                break;
                            case 5:
                                six=six+three;
                                three=0;
                                break;
                        }
                    }
                    ifPro();
                }
            }

        });

        function ifPro() {
            if (0 < res && res <= one) {
                prizeID = prizeItem[0];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one < res && res <= one + two) {
                prizeID = prizeItem[1];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one + two < res && res <= one + two + three) {
                prizeID = prizeItem[2];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one + two + three < res &&  res <= one + two + three + four) {
                prizeID = prizeItem[3];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one + two + three + four < res && res <= one + two + three + four + five) {
                prizeID = prizeItem[4];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one + two + three + four + five < res && res <= one + two + three + four + five + six||res<=0||res>100) {
                prizeID = prizeItem[5];
                rollFun(prizeID, rollCallBack);
                return;
            }
        }
    }
}
function userType() {
    var type = "";
    if (winnerFlag) {
        if (serveFlag) {
            if (getFlag) {
                //已中奖已领取老用户
                type = 4;
            } else {
                //已中奖未领取老用户
                type = 3;
            }
        } else {
            if (getFlag) {
                //已中奖已领取新用户(不成立)
            } else {
                //已中奖未领取新用户
                type = 2;
            }
        }
    } else {
        if (serveFlag) {
            //未中奖老用户
            type = 1;
        } else {
            //未中奖新用户
            type = 0;
        }
    }
    return type;
}

function initFocus() {
    turntablePage.show(currentIndex, onPageKey);
}

function onTableKey(key) {
    switch (key) {
        case keyCode.back:
        case keyCode.num0:
            billTable.hide();
            turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            break;
    }
}
if (retailId == retail.gxgd) {
    appArgs.setRedirectUrl('http://10.1.15.43/nn_cms/nn_cms_view/gxcatv20/go_idc_v2.1.php?page=linux_home_hd');
} else {
    appArgs.setRedirectUrl(window.location.href);
}
appArgs.setReturnUrl(window.location.href);

var homeMenu;
var turntablePage;
var billTable;
var tdeUser;
var roll;
var currentIndex;
window.onload = function () {
    homeMenu = new HomeMenu();
    turntablePage = new TurntablePage();
    billTable=new BillTable();
    currentIndex = turntablePage.current;
    turntablePage.show(turntablePage.current, onPageKey);
    appArgs.setTurntableUrl(window.location.href);
    roll = new Roll();

    setTimeout(function () {
        showLoading();
        stbcli.start(onStart);
    }, 100);
};

export {onQueryProduct1}


