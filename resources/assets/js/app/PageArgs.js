import {stbNull} from '../toodo/_stbnull';


function PageArgs(page) {
    this.prefix = page ? page + '.' : '';
}
PageArgs.prototype = {
    getValue: function (k) {
        return stbNull.getValue(this.prefix + k);
    },
    setValue: function (k, v) {
        stbNull.setValue(this.prefix + k, v);
    },
    getReturnUrl: function () {
        return this.getValue('returnUrl');
    },
    setReturnUrl: function (url) {
        this.setValue('returnUrl', url);
    },
    getRedirectUrl: function () {
        return this.getValue('redirectUrl');
    },
    setRedirectUrl: function (url) {
        this.setValue('redirectUrl', url);
    },
    setCallFlag:function (num) {
        this.setValue("callFlag",num);
    },
    getCallFlag:function () {
        return this.getValue("callFlag");
    },
    setSuccessCode:function (successCode) {
        this.setValue("successCode",successCode);
    },
    getSuccessCode:function () {
        return this.getValue("successCode");
    },
    setPrizeID:function (id) {
        this.setValue("PrizeID",id);
    },
    getPrizeID:function () {
        return this.getValue("PrizeID");
    },
    getTurntableUrl: function () {
        return this.getValue('TurntableUrl');
    },
    setTurntableUrl: function (url) {
        this.setValue('TurntableUrl', url);
    },
};


var shopArgs = new PageArgs('shop');
var rechargeArgs = new PageArgs('recharge');
var callbackArgs = new PageArgs('callback');
var turnTableArgs = new PageArgs('turntable');

var appArgs = new PageArgs('app');
appArgs.onFirstPage = function () {
    var firstUrl = appArgs.getRedirectUrl();
    if (firstUrl) {
        window.location.href = firstUrl;
    }
};

appArgs.onHomePage = function () {
    var homeUrl = appArgs.getReturnUrl();
    if (homeUrl) {
        window.location.href = homeUrl;
    }
};

appArgs.onTurntablePage = function () {
    var TurntableUrl = appArgs.getTurntableUrl();
    if (TurntableUrl) {
        window.location.href = TurntableUrl;
    }
};
export {shopArgs,rechargeArgs,callbackArgs,appArgs,turnTableArgs}