import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";
import {showDialog} from './app/dialog';

var keyCode = getKeyCodes();
var preCodes = getCodes();

// var callbackUrl = location.protocol + '//' + location.host + '/tdenter/callback.html';
var callbackUrl = "http://120.77.82.54/tdGameCenter/callback.html";
function ShopBill() {
    this.layout = document.createElement('div');
    document.body.appendChild(this.layout);
    this.layout.className = 'bill-btn';
    this.layout.innerHTML =
        '<div class="bill-btn-focus"></div>';

    this.items = [];
    var node = this.layout.querySelector('.bill-btn-focus');
    node.style.display = 'none';
    this.items.push(node);
}

ShopBill.prototype = {
    /**
     * {int} current [0,0]
     */
    current: 0,
    onKeyDown: null,
    tdeUser: null,

    show: function (current, onKeyDown, tdeUser) {
        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        this.tdeUser = tdeUser;
        var owner = this;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        }
    },
    hide: function () {
        this._setFocus(this.current, false);
    },
    _setFocus: function (current, focus) {
        var node = this.items[current];
        node.style.display = focus ? 'block' : 'none';
    },
    setSelected: function (current) {
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function (e) {
        var owner = this;
        e = getEvent(e);
        var curKey = getKey(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.ok:
                if (bills) {
                    billTable.start(bills);
                    billTable.show(billTable.current, onTableKey);
                    break;
                }
                var stbcli = owner.tdeUser.stbcli;
                stbcli.bill(onBill);
                break;
        }

        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }
};

var pageSize = 5;
var itemSize = [75, 149, 224, 297, 374];
var itemsSizeLeft=[12,25,41,54,70];
function BillTable() {
}
BillTable.prototype = {
    /**
     * {int} current [0,4]
     */
    current: 0,
    currentSize: 5,
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
                '<div class="bill-bg">' +
                '    <div id="bill-select" class="bill-select">' +
                '      <div class="bill-outline"></div>' +
                '    </div>' +
                '    <div id="bill-line0" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' +
                '    <div id="bill-line1" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' +
                '    <div id="bill-line2" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' +
                '    <div id="bill-line3" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' +
                '    <div id="bill-line4" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' +
                '    <div id="bill-line5" class="bill-line"><<< 第1页/共1页 >>></div>' +
                '</div>';
            document.body.appendChild(layout);
        }
        this.layout = layout;

        var bg = layout.querySelector('.bill-bg');
        this.selected = bg.querySelector('#bill-select');

        this.table = [];
        for (var i = 0; i < pageSize; ++i) {
            var tr = bg.querySelector('#bill-line' + i);
            this.table.push(tr);
        }
        this.titlePage = bg.querySelector('#bill-line5');

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
                tds[0].innerHTML = info.created_at;
                tds[1].innerHTML = info.subject;
                tds[2].innerHTML = parseInt(info.totalAmount / 100) + '元';
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
                shopBill.show(shopBill.current, shopBill.onKeyDown, shopBill.tdeUser);
            }, 0, '提示', '没有找到订单记录。', '确定', '返回');
        }
    } else {
        showDialog(function (btn) {
            if (btn == 0) {
                var stbcli = shopBill.tdeUser.stbcli;
                stbcli.bill(onBill);
            } else {
                shopBill.show(shopBill.current, shopBill.onKeyDown, shopBill.tdeUser);
            }
        }, 0, '提示', '网络异常，没有找到订单记录。', '重试', '取消');
    }
}

function onTableKey(key) {
    switch (key) {
        case keyCode.back:
        case keyCode.num0:
            billTable.hide();
            shopBill.show(shopBill.current, shopBill.onKeyDown, shopBill.tdeUser);
            break;
    }
}

var shopBill = new ShopBill();
var billTable = new BillTable();
var bills;

export {shopBill}