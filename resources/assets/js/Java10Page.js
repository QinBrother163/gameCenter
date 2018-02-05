import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";


var keyCode = getKeyCodes();
var preCodes = getCodes();

var itemSize = [
    [159, 123],
    [159, 230],
    [213, 370],
    [330, 176],
    [155, 177],
    [156, 177],
    [182, 176],
    [182, 176],
    [182, 176],
    [182, 176]
];

function Java10Page() {
    this.layout = document.getElementById('java10-page');
    this.items = [];
    for (var i = 0; i < itemSize.length; ++i) {
        var node = this.layout.querySelector('#java10-item' + i);
        this.items.push(node);
    }
}
Java10Page.prototype = {
    itemInfos: [],
    /**
     * {int} current [0,9]
     */
    current: 3,
    onKeyDown: null,
    start: function (itemInfos, callback) {
        var itemCnt = this.items.length;
        if (itemInfos.length != itemCnt) {
            return;
        }
        this.itemInfos = itemInfos;

        var loadCnt = 0;
        for (var i = 0; i < itemCnt; i++) {
            var itemInfo = itemInfos[i];
            var node = this.items[i];
            var img = node.querySelector('img');
            img.onload = function () {
                loadCnt++;
                if (loadCnt === itemCnt) {
                    if (typeof(callback) === 'function') callback();
                }
            };

            setTimeout(function (img, itemInfo) {
                img.src = itemInfo.img;
            }, 100 * i, img, itemInfo);
        }
    },
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
    handleKey: function (e) {
        var owner = this;
        e = getEvent(e);
        var curKey = getKey(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 2:
                    case 4:
                    case 7:
                    case 8:
                    case 9:
                        owner.current -= 2;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                    case 5:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current -= 3;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                        owner.current += 2;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                    case 2:
                    case 4:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current += 3;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 1:
                    case 4:
                    case 7:
                    case 9:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current -= 2;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                    case 3:
                    case 6:
                    case 8:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }

        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }
};

export {Java10Page}