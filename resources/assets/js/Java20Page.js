import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";


var keyCode = getKeyCodes();
var preCodes = getCodes();

var itemSize = [
    [183, 176],//0
    [183, 176],
    [194, 370],
    [313, 176],
    [147, 176],
    [147, 176],//5
    [183, 176],
    [183, 176],
    [194, 370],
    [159, 123],
    [159,230],//10
    [213,370],
    [330,176],
    [155,177],
    [156,177],
    [182,176],//15
    [182,176],
    [182,176],
    [182,176]//18
];
var pageSize = itemSize.length;

function Java20Page() {
    this.layout = document.getElementById('java20-page');
    this.items = [];
    for (var i = 0; i < pageSize; ++i) {
        var node = this.layout.querySelector('#java20-item' + i);
        this.items.push(node);
    }
}
Java20Page.prototype = {
    itemInfos: [],
    page: 0,
    pageIndex: 0,
    currentSize: 0,
    /**
     * {int} current [0,9]
     */
    current: 0,
    onKeyDown: null,
    leftNum:0,
    start: function (itemInfos, callback) {
        this.itemInfos = itemInfos;
        this._showInfo(itemInfos, callback);
        //this._showPage(0, callback);
    },
    _showInfo: function (infos, callback) {
        var cnt = infos.length;
        var loadCnt = 0;
        this.items.forEach(function (node, index) {
            node.style.display = index < cnt ? 'block' : 'none';
            if (index >= cnt) {
                return;
            }
            var itemInfo = infos[index];
            var img = node.querySelector('img');
            img.onload = function () {
                loadCnt++;
                if (loadCnt === cnt) {
                    if (typeof(callback) === 'function') callback();
                }
            };

            setTimeout(function (img, itemInfo) {
                img.src = itemInfo.img;
            }, 100 * index, img, itemInfo);
        });
    },
    //_showPage: function (pageIndex, callback) {
    //    var cnt = this.itemInfos.length;//JSON数据的条数
    //    var page = parseInt(cnt / pageSize);//数据分的页数
    //    if (cnt > page * pageSize) {//翻去下一页
    //        page++;
    //    }
    //    if (pageIndex >= page) {//翻去上一页
    //        pageIndex = page - 1;
    //    }
    //    this.page = page;
    //    this.pageIndex = pageIndex;
    //
    //    //this.titleName.innerHTML = this.title;
    //    //this.titlePage.innerHTML = '第' + (pageIndex + 1) + '页/共' + page + '页';
    //
    //    var cut0 = pageSize * pageIndex;
    //    this.currentSize = (cnt - cut0) >= pageSize ? pageSize : cnt - cut0;//如果不是最后一页，就是填满了，如果是最后一页就获取有多少个
    //    var cut1 = this.currentSize + cut0;//
    //    var cutInfos = this.itemInfos.slice(cut0, cut1);//获取到当前页面展示的JSON
    //    this._showInfo(cutInfos, callback);
    //
    //    this.setSelected(0);
    //},
    show: function (current, onKeyDown) {
        this.setSelected(current);
        this.onKeyDown = onKeyDown;

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
        node.style.zIndex = focus ? 1 : 0;

        var size = itemSize[current];
        var div = node.querySelector('div');
        var img = node.querySelector('img');
        if (focus) {
            div.style.display = 'block';
            img.style.width = size[0] * 1.1 + 'px';
            img.style.height = size[1] * 1.1 + 'px';
            img.style.left = -size[0] * 0.05 + 'px';
            img.style.top = -size[1] * 0.05 + 'px';
        } else {
            div.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
        }
    },
    setSelected: function (current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    setLeftMove:function(current){
        if(this.items[12].offsetLeft>880&&this.items[12].offsetLeft<1000){
            this.leftNum++;
            this.setLeft(this.leftNum);
        }else if(this.items[current].offsetLeft>960&&this.items[current].offsetLeft<1060&&current<17){
                this.leftNum++;
                this.setLeft(this.leftNum);
        }
    },
    setLeft: function (leftNum) {
        for(var i=0;i<pageSize;++i){
            switch (leftNum){
                case 1:
                    this.items[i].style.left=this.items[i].offsetLeft-itemSize[0][0]-18+"px";
                    break;
                case 2:
                    this.items[i].style.left=this.items[i].offsetLeft-itemSize[2][0]-18+"px";
                    break;
                case 3:
                    this.items[i].style.left=this.items[i].offsetLeft-itemSize[3][0]-18+"px";
                    break;
                case 4:
                    this.items[i].style.left=this.items[i].offsetLeft-itemSize[6][0]-18+"px";
                    break;
                case 5:
                    this.items[i].style.left=this.items[i].offsetLeft-itemSize[8][0]-18+"px";
                    break;
            }
        }
    },
    setRightMove:function(current){
        if(this.items[current].offsetLeft<100&&current>1){
                this.setRight(this.leftNum);
                this.leftNum--;
        }
    },
    setRight(leftNum){
        for(var i=0;i<pageSize;++i) {
            switch (leftNum) {
                case 1:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[0][0] + 18 + "px";
                    break;
                case 2:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[2][0] + 18 + "px";
                    break;
                case 3:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[3][0] + 18 + "px";
                    break;
                case 4:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[6][0] + 18 + "px";
                    break;
                case 5:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[8][0] + 18 + "px";
                    break;
            }
        }
    },
    handleKey: function (e) {
        var owner = this;
        e = getEvent(e);
        var curKey = getKey(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 3:
                    case 5:
                    case 9:
                    case 12:
                    case 14:
                        owner.setRightMove(owner.current);
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                    case 4:
                    case 7:
                    case 8:
                    case 10:
                    case 11:
                    case 13:
                    case 16:
                    case 17:
                    case 18:
                        owner.setRightMove(owner.current);
                        owner.current =owner.current-2;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                    case 15:
                        owner.setRightMove(owner.current);
                        owner.current =owner.current-3;
                        owner.setSelected(owner.current);
                        break;
                    default:
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 1:
                    case 2:
                    case 4:
                    case 7:
                    case 8:
                    case 10:
                    case 11:
                    case 13:
                        owner.setLeftMove(owner.current);
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                    case 0:
                    case 5:
                    case 6:
                    case 9:
                    case 14:
                    case 15:
                    case 16:
                        owner.setLeftMove(owner.current);
                        owner.current=owner.current+2;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                    case 12:
                        owner.setLeftMove(owner.current);
                        owner.current =owner.current+3;
                        owner.setSelected(owner.current);
                        break;
                    case 17:
                        break;
                    case 18:
                        break;
                    default:
                        break;
                }
                break;
            case keyCode.up:
                //if (owner.current % 2 != 0) {
                //    owner.current--;
                //    owner.setSelected(owner.current);
                //}
                switch (owner.current){
                    case 1:
                    case 4:
                    case 7:
                    case 10:
                    case 13:
                    case 16:
                    case 18:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                    case 14:
                        owner.current=owner.current-2;
                        owner.setSelected(owner.current);
                        break;
                    default:
                        break;
                }


                break;
            case keyCode.down:
                //var current = owner.current;
                //if (current % 2 == 0) {
                //    current++;
                //    if (current >= owner.currentSize) {
                //        current = owner.currentSize - 1;
                //    }
                //    if (current != owner.current) {
                //        owner.setSelected(current);
                //    }
                //}
                switch (owner.current) {
                    case 0:
                    case 3:
                    case 6:
                    case 9:
                    case 12:
                    case 15:
                    case 17:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                    default:
                        break;
                }
                break;
        }

        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }
};

export {Java20Page}