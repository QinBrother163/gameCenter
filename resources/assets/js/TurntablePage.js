import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";


var keyCode = getKeyCodes();
var preCodes = getCodes();

var itemSize = [
    [264, 386],
    [264, 386],
    [264, 386],
    [264, 386]
];
function TurntablePage() {
    document.body.style.background = 'url(img/turntable/bg.jpg) no-repeat';
    this.layout = document.getElementById('turntable-page');
    this.items = [];
    this.focusItems=[];
    //转盘
    for (var i = 0; i < 6; ++i) {
            var node = this.layout.querySelector('#turntable-item' + i);
            // this.items.push(node);
            var div=node.querySelector('div');
            this.focusItems.push(div);
            setTimeout(function (i, node) {
                var img = node.querySelector('img');
                img.src = 'img/turntable/prize'+i+'.png';
            }, 100 * i, i, node);
    }
    this.imglist=document.getElementById("turntable-pointer").querySelectorAll('img');
    this.imglist[0].src='img/turntable/btn.png';
    this.imglist[1].src='img/turntable/btn0.png';


    //focus
    this.items.push(this.imglist[0]);
    this.items.push(document.getElementById("prize-btn"));

}
TurntablePage.prototype = {
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
        if(focus){
            switch (current){
                case 0:
                    node.src='img/turntable/btn-focus.png';
                    break;
                case 1:
                    node.className="prize-btn-focus";
                    break
            }
        }else{
            switch (current){
                case 0:
                    node.src='img/turntable/btn.png';
                    break;
                case 1:
                    node.className="prize-btn";
                    break
            }
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

                }
                break;
            case keyCode.right:
                switch (owner.current) {

                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    // case 0:
                    // case 1:
                    // case 2:
                    //     owner.current++;
                    //     owner.setSelected(owner.current);
                    //     break;
                    case 0:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    // case 0:
                    // case 1:
                    // case 2:
                    //     owner.current++;
                    //     owner.setSelected(owner.current);
                    //     break;
                    case 1:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }

        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    },

};

export {TurntablePage}