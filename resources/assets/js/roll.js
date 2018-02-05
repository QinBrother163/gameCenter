var config = {
    "pinIndex": 0, //滚动的起点
    "speed": 200, //滚动的速度
    "cycle": 0, //滚动的圈数
    "fastCycle": 5, //快速滚动圈数
    "rollResult": 4 //抽奖的结果
};
var Roll = function() {
    var self = this;
    self.config = config;
    self.pinIndex='';
    self.stopIndex = '';
    self.isRolling = false;
    self.timer = null;
    self.rollList = '';
    self.rollIndex = 0;
    self.callback="";
};

Roll.prototype = {
    init:function (rollResult,rollList) {
        var self = this;
        self.pinIndex=0;
        self.speed=300;
        self.cycle=0;
        self.fastCycle=2;
        self.rollList=rollList;
        self.rollResult=rollResult;
        self.stopIndex = self.rollResult;
    },
    start:function (callback) {
        this.rollPre();
        this.callback=callback;
    },
    rollPre:function () {
        var self = this;
        if (!self.isRolling) {
            for(var i=0;i<self.rollList.length;i++){
                if(i==self.pinIndex){
                    self.rollList[self.pinIndex].style.display="block";
                }else{
                    self.rollList[i].style.display="none";
                }
            }
            // self.rollList.eq(self.ops.pinIndex).show().siblings().hide();
            this.rollStart(self); // 开始启动转盘
        }
    },
    rollGoNext:function (self) {
        self.rollIndex += 1;
        if (self.rollIndex > self.rollList.length) {
            self.rollIndex = 0;
            self.cycle++;
        }
        // self.rollList.eq(self.rollIndex).show().siblings().hide();
        for(var i=0;i<self.rollList.length;i++){
            if(i==self.rollIndex){
                self.rollList[self.rollIndex].style.display="block";
            }else{
                self.rollList[i].style.display="none";
            }
        }
    },
    rollStop:function (self) {
        clearInterval(self.timer);
        (function stopGoNext() {
            if (self.rollIndex !== self.stopIndex) {
                self.rollGoNext(self);
                setTimeout(function() {
                    stopGoNext();
                }, 300);
            } else {
                self.isRolling = false;
                self.cycle = 0;
                self.rollIndex = 0;
                if(self.callback!=null){
                    self.callback(self.rollResult);
                }
                document.getElementById("turntable-text").src="img/turntable/btn1.png"
            }
        })();
    },
    rollStart:function (self) {
        self.isRolling = true;
        self.timer = setInterval(function() {
            self.rollGoNext(self);
            if (self.rollIndex == 5) {
                clearInterval(self.timer);
                self.speed = 20;
                self.timer = setInterval(function() {
                    self.rollGoNext(self);
                    if (self.cycle >= 5) {
                        clearInterval(self.timer);
                        self.speed = 200;
                        self.timer = setInterval(function() {
                            if (self.cycle === 6) {
                                self.rollStop(self);
                            } else {
                                self.rollGoNext(self);
                            }
                        }, self.speed);
                    }
                }, self.speed);
            }
        }, self.speed);
    }
};


export {Roll}