import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";


var keyCode = getKeyCodes();
var preCodes = getCodes();

var itemSize = [
    [385, 378],
    [385, 378],
    [385, 378],
    [385, 378]
];

function ShopPage() {
    this.layout = document.getElementById('shop-page');
    this.items = [];
    for (var i = 0; i < 4; ++i) {
        var node = this.layout.querySelector('#shop-item' + i);
        this.items.push(node);
        if (!node) continue;
        setTimeout(function (i, node) {
            var img = node.querySelector('img');
            img.src = 'img/shop/shop' + i + '.png';
        }, 100 * i, i, node);
    }
}
ShopPage.prototype = {
    /**
     * {int} current [0,3]
     */
    current: 3,
    onKeyDown: null,

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
        if (!node) return;
        node.style.zIndex = focus ? 1 : 0;

        var size = itemSize[current];
        var div = node.querySelector('div');
        var img = node.querySelector('img');
        if (focus) {
            div.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.025 + 'px';
            img.style.top = -size[1] * 0.025 + 'px';
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
                    case 1:
                    case 2:
                    case 3:
                        owner.current--;
                        if (owner.current == 1) owner.current--;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                    case 1:
                    case 2:
                        owner.current++;
                        if (owner.current == 1) owner.current++;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }

        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }
};

export {ShopPage}