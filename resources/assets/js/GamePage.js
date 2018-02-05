import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";


var keyCode = getKeyCodes();
var preCodes = getCodes();

var itemSize = [
    [249, 404],
    [249, 404],
    [337, 200],
    [337, 177],
    [249, 404]
];

function GamePage() {
    this.layout = document.getElementById('game-page');
    this.items = [];
    for (var i = 0; i < 5; ++i) {
        var node = this.layout.querySelector('#game-item' + i);
        this.items.push(node);

        setTimeout(function (i, node) {
            var img = node.querySelector('img');
            img.src = 'img/game/game' + i + '.png';
        }, 100 * i, i, node);
    }
}
GamePage.prototype = {
    /**
     * {int} current [0,3]
     */
    current: 0,
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
                    case 1:
                    case 2:
                    case 4:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current -= 2;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                    case 1:
                    case 3:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current += 2;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 3:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 2:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }

        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }
};

export {GamePage}