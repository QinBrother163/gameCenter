import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";
import {showDialog} from './app/dialog';
import {TurntablePage} from './TurntablePage';
import {hideLoading, showLoading} from "./app/loading";
import {showReceiveDialog} from './app/receiveDialog';
import {showOrderDialog} from './app/orderDialog';
import {onQueryProduct1} from './turntable';
import {turnTableArgs} from './app/PageArgs';
var keyCode = getKeyCodes();
var preCodes = getCodes();


var pageSize = 6;
var itemSize = [50, 117, 185, 253, 318, 383];
var itemsSizeLeft=[0,0,0,0,0,0];
function BillTable() {
}
BillTable.prototype = {
    /**
     * {int} current [0,4]
     */
    current: 0,
    currentSize: 6,
    bills: [],
    page: 0,
    pageIndex: -1,
    onKeyDown: null,
    //getBill: function () {
    //    var index = this.pageIndex * pageSize;
    //    index += this.current;
    //    if (index < this.bills.length) {
    //        return this.bills[index];
    //    }
    //    return false;
    //},
    start: function (bills) {
        var layout = document.getElementById('bill-layout');
        if (!layout) {
            layout = document.createElement('div');
            layout.className = 'bill-layout';
            layout.id = 'bill-layout';
            layout.innerHTML =
                '<div class="turn-bill-bg">' +
                '    <div class="turnBillTable"><div class="turnBillDate">时间</div><div class="turnBillName">奖品</div><div class="turnBillType">状态</div></div>' +
                '    <div id="bill-select" class="turn-bill-select">' +
                '      <div class="bill-outline"></div>' +
                '    </div>' +
                '    <div id="turnBill-line0" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' +
                '    <div id="turnBill-line1" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' +
                '    <div id="turnBill-line2" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' +
                '    <div id="turnBill-line3" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' +
                '    <div id="turnBill-line4" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' +
                '    <div id="turnBill-line5" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' +
                '    <div id="turnBill-line6" class="bill-line"><<< 第1页/共1页 >>></div>' +
                '</div>';
            document.body.appendChild(layout);
        }
        this.layout = layout;

        var bg = layout.querySelector('.turn-bill-bg');
        this.selected = bg.querySelector('#bill-select');

        this.table = [];
        for (var i = 0; i < pageSize; ++i) {
            var tr = bg.querySelector('#turnBill-line' + i);
            this.table.push(tr);
        }
        this.titlePage = bg.querySelector('#turnBill-line6');

        this.bills = bills;
        this.showPage(0);
        this.hide();
    },
    showPage: function (pageIndex) {
        var cnt = this.bills.length;
        var page = parseInt(cnt / pageSize);
        if (cnt > page * pageSize) {
            page++;
        }
        if (pageIndex >= page) {
            pageIndex = page - 1;
        }
        this.page = page;
        this.pageIndex = pageIndex;

        this.titlePage.innerHTML = '第' + (pageIndex + 1) + '页/共' + page + '页';
        ////创建圆点
        //for(var i=1;i<=page;i++){
        //    this.titlePage.innerHTML='<div class="bill-circle" id="bill-circle'+i+'"></div>';
        //}


        var cut0 = pageSize * pageIndex;
        this.currentSize = (cnt - cut0) >= pageSize ? pageSize : cnt - cut0;
        var cut1 = this.currentSize + cut0;
        var cutInfos = this.bills.slice(cut0, cut1);
        this.showInfo(cutInfos);

        this.setSelected(0);
    },
    showInfo: function (infos) {
        var cnt = infos.length;
        this.table.forEach(function (row, index) {
            var tds = row.querySelectorAll('div');
            if (index >= cnt) {
                tds[0].innerHTML = '';
                tds[1].innerHTML = '';
                tds[2].innerHTML = '';
            } else {
                var info = infos[index];
                //setTimeout(function (tds, song) {
                tds[0].innerHTML = info.winningDate;
                tds[1].innerHTML = info.prizeName;
                var state;
                switch (info.state){
                    case 1:
                        state="等待领取";
                        break;
                    case 2:
                        state="正在配送";
                        break;
                    case 3:
                        state="已经过期";
                        break;
                }
                tds[2].innerHTML = state;
                //}, 100 * index, tds, song);
            }
        });
    },
    show: function (current, onKeyDown) {
        this.layout.style.display = 'block';
        this.setSelected(current);
        this.onKeyDown = onKeyDown;

        var owner = this;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        }
    },
    hide: function () {
        this.layout.style.display = 'none';
        this.selected.style.display = 'none';
    },
    setSelected: function (current) {
        this.current = current;
        this.selected.style.top = itemSize[current] + 'px';
        this.selected.style.left = itemsSizeLeft[current] + 'px';
        this.selected.style.display = 'block';
    },
    handleKey: function (e) {
        var owner = this;
        e = getEvent(e);
        var curKey = getKey(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.up:
                if (owner.current > 0) {
                    owner.current--;
                    owner.setSelected(owner.current);
                } else if (owner.pageIndex > 0) {
                    owner.pageIndex--;
                    owner.showPage(owner.pageIndex);
                }
                break;
            case keyCode.down:
                if (owner.current < owner.currentSize - 1) {
                    owner.current++;
                    owner.setSelected(owner.current);
                } else if (owner.pageIndex < owner.page - 1) {
                    owner.pageIndex++;
                    owner.showPage(owner.pageIndex);
                }
                break;
            case keyCode.left:
                if (owner.pageIndex > 0) {
                    owner.pageIndex--;
                    owner.showPage(owner.pageIndex);
                }
                break;
            case keyCode.right:
                if (owner.pageIndex < owner.page - 1) {
                    owner.pageIndex++;
                    owner.showPage(owner.pageIndex);
                }
                break;
            case keyCode.ok:
                var cur;
                if(owner.pageIndex==0){
                    cur=owner.current;
                }else{
                    cur=owner.pageIndex*4+owner.current+1;
                }

                if(this.bills[cur].state==1){
                    showReceiveDialog(function (btn) {
                            if(btn==0){
                                showOrderDialog(function (btn) {
                                    if(btn==0){
                                        turnTableArgs.setCallFlag(1);
                                        turnTableArgs.setPrizeID(owner.bills[cur].id);
                                        onQueryProduct1();
                                    }else{
                                        owner.show(owner.current,owner.onKeyDown);
                                    }
                                })
                            }else{
                                owner.show(owner.current,owner.onKeyDown);
                            }
                    },this.bills[cur].prizeID);
                }else  if(this.bills[cur].state==2){
                    showLoading('提示', '已经在配送哦，请留意手机快递电话。');
                    hideLoading(function () {
                        owner.show(owner.current,owner.onKeyDown);
                    },2000);
                }else  if(this.bills[cur].state==3){
                    showLoading('提示', '已经过期啦，奖品要在7天内领取哦。');
                    hideLoading(function () {
                        owner.show(owner.current,owner.onKeyDown);
                    },2000);
                }
                break;
        }
        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }
};

function onBill(code, biz) {
    if (code == 0) {
        if (biz && biz.length > 0) {
            bills = biz;
            billTable.start(bills);
            billTable.show(billTable.current, onTableKey);
        } else {
            showDialog(function (btn) {
                turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            }, 0, '提示', '没有找到订单记录。', '确定', '返回');
        }
    } else {
        showDialog(function (btn) {
            if (btn == 0) {
                var stbcli = turntablePage.tdeUser.stbcli;
                stbcli.bill(onBill);
            } else {
                turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            }
        }, 0, '提示', '网络异常，没有找到订单记录。', '重试', '取消');
    }
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

var turntablePage = new TurntablePage();
var billTable = new BillTable();
var bills;

export {BillTable}
