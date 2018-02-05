import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";


var keyCode = getKeyCodes();
var preCodes = getCodes();


var itemPostion=[
    [400,70],
    [65,220],
    [380,185],
    [750,185],
    [920,220]
];

var index=0;
var node_0=document.getElementById("home-item0");
function HomePage() {
    this.layout = document.getElementById('home-page');
    this.items = [];
    for (var i = 0; i < 5; ++i) {
        var node = this.layout.querySelector('#home-item' + i);
        this.items.push(node);

        setTimeout(function (i, node) {
            var img = node.querySelector('img');
            if(i==0){
                img.src = 'img/home/unhome' + i + '.png';
                img.src = 'img/home/bighome' + i + '.png';
                img.src = 'img/home/home' + i + '.png';
            }else if(i==1||i==4){
                img.src = 'img/home/home' + i + '.png';
                img.src = 'img/home/unhome' + i + '.png';
                img.src = 'img/home/bighome' + i + '.png';
            }else{
                img.src = 'img/home/home' + i + '.png';
                img.src = 'img/home/bighome' + i + '.png';
                img.src = 'img/home/unhome' + i + '.png';
            }
        }, 100 * i, i, node);
    }

}
HomePage.prototype = {
    /**
     * {int} current [0,3]
     */
    current: 0,
    onKeyDown: null,

    show: function (current, onKeyDown) {
        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        this.setAnimate();
        var owner = this;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        }
    },
    hide: function () {
        this._setFocus(this.current, false);
        this.setAnimate(true);
        if(this.current==0||this.current==1){
            this.items[0].style.top="70px";
        }else{
            this.items[0].style.top="110px";
        }
    },
    _setFocus: function (current) {
        function initLocation(num,imgIndex){
            for(var i=1;i<5;i++) {
                if(i==num){
                    //对0图片进行位置调整
                    if(imgIndex==0){
                        if(num==1||num==4){
                            document.getElementById("home-item"+i).style.top=(itemPostion[i][1]-100)+"px";
                        }else{
                            document.getElementById("home-item"+i).style.top=(itemPostion[i][1]-40)+"px";
                        }
                        //对1图片进行位置调整
                    }else if(imgIndex==1){
                        document.getElementById("home-item"+i).style.top=(itemPostion[i][1]-30)+"px";
                        document.getElementById("home-item"+i).style.left=(itemPostion[i][0]+15)+"px";
                    }
                }else{
                    document.getElementById("home-item"+i).style.top=itemPostion[i][1]+"px";
                }
            }
        }
            this.items[0].querySelector('img').src="img/home/home"+current+".png";
            document.getElementById("text-div").querySelector('img').src="img/home/home-"+current+".png";
            if(current==1){
                this.items[0].style.left=350+"px";
            }else{
                this.items[0].style.left=400+"px";
            }
            switch (current){
                case 0:
                case 1:
                    this.items[0].style.top=70+"px";
                    this.setAnimate(false);
                    break;
                case 2:
                case 3:
                case 4:
                    this.items[0].style.top=110+"px";
                    this.setAnimate(false);
                    break
            }
        switch (current){
            case 4:
                index=0;
                this.items[1].querySelector('img').src="img/home/bighome"+index+".png";
                this.items[2].querySelector('img').src="img/home/unhome"+(++index)+".png";
                this.items[3].querySelector('img').src="img/home/unhome"+(++index)+".png";
                this.items[4].querySelector('img').src="img/home/bighome"+(++index)+".png";
                initLocation(1,0);
                break;
            case 3:
                this.items[1].querySelector('img').src="img/home/bighome"+(current+1)+".png";
                index=0;
                this.items[2].querySelector('img').src="img/home/unhome"+index+".png";
                this.items[3].querySelector('img').src="img/home/unhome"+(++index)+".png";
                this.items[4].querySelector('img').src="img/home/bighome"+(++index)+".png";
                initLocation(2,0);
                break;
            case 2:
                this.items[1].querySelector('img').src="img/home/bighome"+(current+1)+".png";
                this.items[2].querySelector('img').src="img/home/unhome"+(current+2)+".png";
                index=0;
                this.items[3].querySelector('img').src="img/home/unhome"+index+".png";
                this.items[4].querySelector('img').src="img/home/bighome"+(++index)+".png";
                initLocation(3,0);
                break;
            case 1:
                this.items[1].querySelector('img').src="img/home/bighome"+(current+1)+".png";
                this.items[2].querySelector('img').src="img/home/unhome"+(current+2)+".png";
                this.items[3].querySelector('img').src="img/home/unhome"+(current+3)+".png";
                index=0;
                this.items[4].querySelector('img').src="img/home/bighome"+index+".png";
                initLocation(4,0);
                break;
            case 0:
                for(var i=1;i<this.items.length;i++) {
                    if(i==1 || i==4){
                        this.items[i].querySelector('img').src = "img/home/bighome" + (current + i) + ".png";
                    }else{
                        this.items[i].querySelector('img').src = "img/home/unhome" + (current + i) + ".png";
                    }
                }
                initLocation(1,1);
                break;
        }
    },
    setSelected: function (current) {
        this.current = current;
        //for (var i = 0; i < this.items.length; ++i) {
        //    this._setFocus(i, current == i);
        //}
        this._setFocus(current);
    },
    animateFn:function(obj, json, interval, sp, fn,topFlag,StopFlag){
        if(StopFlag){
            clearInterval(obj.timer);
        }else{
            animate(obj, json, interval, sp, fn,topFlag);
        }

        function animate(obj, json, interval, sp, fn,topFlag){
            clearInterval(obj.timer);
            //var k = 0;
            //var j = 0;
            function getStyle(obj, arr) {
                if(obj.currentStyle){
                    return obj.currentStyle[arr];    //针对ie
                } else {
                    return document.defaultView.getComputedStyle(obj, null)[arr];
                }
            }
            obj.timer = setInterval(function(){
                //j ++;
                var flag=true;
                for(var arr in json) {
                    var icur = 0;
                    //k++;
                    if(arr == "opacity") {
                        icur = Math.round(parseFloat(getStyle(obj, arr))*100);
                    } else {
                        icur = parseInt(getStyle(obj, arr));
                    }
                    var speed = (json[arr] - icur) * sp;
                    speed = speed > 0 ? Math.ceil(speed): Math.floor(speed);
                    if(icur != json[arr]){
                        flag = false;
                    }
                    if(arr == "opacity"){
                        obj.style.filter = "alpha(opacity : '+(icur + speed)+' )";
                        obj.style.opacity = (icur + speed)/100;
                    }else {
                        obj.style[arr] = icur + speed + "px";
                    }
                    //console.log(j + "," + arr +":"+ flag);
                }

                if(flag){
                    clearInterval(obj.timer);
                    //console.log(j + ":" + flag);
                    //console.log("k = " + k);
                    //console.log("j = " + j);
                    //console.log("DONE");
                    if(fn){
                        if(topFlag){
                            animate(node_0, {top:node_0.offsetTop+12},80, 0.01, function() {},false);
                        }else{
                            animate(node_0, {top:node_0.offsetTop-12},80, 0.01, function() {},true);
                        }
                        fn();
                    }
                }
            },interval);
        }
    },
    setAnimate:function(StopFlag){
        this.animateFn(this.items[0], {top:this.items[0].offsetTop-12},80, 0.01, function(){},true,StopFlag);
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
                        owner.current=1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current=2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current=3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current=4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current=0;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current=4;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current=0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current=1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current=2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                //switch (owner.current) {
                //    case 4:
                //        owner.current--;
                //        owner.setSelected(owner.current);
                //        break;
                //}
                break;
            case keyCode.down:
                //switch (owner.current) {
                //    case 3:
                //        owner.current++;
                //        owner.setSelected(owner.current);
                //        break;
                //}
                break;
        }

        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }
};

export {HomePage}