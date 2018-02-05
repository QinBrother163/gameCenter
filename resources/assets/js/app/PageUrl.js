import {stbNull} from '../toodo/_stbnull'
import {stbcli} from '../toodo/_stbcli';

function PageUrl() {
}
PageUrl.prototype = {
    parseQuery: function (query) {
        const start = query.indexOf('?');
        if (start >= 0) {
            query = query.slice(start + 1);
        }
        const args = {};
        const arr = query.split('&');
        for (let m = 0; m < arr.length; m++) {
            const v = arr[m];
            const tmp = v.split('=');
            args[tmp[0]] = decodeURIComponent(tmp[1]);
        }
        return args;
    },
    parseArgs: function (args) {
        let k, v;
        const arr = [];
        for (k in args) {
            //! js 会把'0'当作false args[k] => args[k] !== ''
            if (args.hasOwnProperty(k) && args[k] !== '') {
                v = encodeURIComponent(args[k]);
                arr.push(k + '=' + v);
            }
        }
        return arr.join('&');
    },
    baseUrl: function () {
        return location.protocol + '//' + location.host + '/tdenter';
    },
    getUserId: function () {
        return stbNull.getValue('toodo.userId');
    },
    getStbId: function () {
        return stbNull.getCardTV();
    },
    getSignKey: function () {
        var ts = new Date().getTime();
        var msg = this.getUserId() + ts;
        var md5 = stbcli.md5(msg);
        return md5 + ts;
    },
    getChildLock: function () {
        return '';
    },
    rechargeUrl: function () {
        return location.protocol + '//' + location.host + '/tdsrv/api/coin';
    },
    callUrl: function (item, returnUrl) {
        let rechargeUrl = this.rechargeUrl();
        let args = {};
        args.gameid = item.gameId;
        args.key = this.getSignKey();
        args.dev = this.getStbId();
        args.fatherkey = this.getChildLock();
        args.userId = this.getUserId();
        args.userid = this.getUserId();
        args.ts = new Date().getTime();
        args.returnURL = returnUrl;

        var hostName = window.location.hostname; //不带端口
        var dstUrl = item.url;
        dstUrl = dstUrl.replace('192.168.200.100', hostName);

        let params = {};
        params.redirectUrl = dstUrl + '?' + this.parseArgs(args) + '&rechageURL=' + rechargeUrl;
        params.returnUrl = returnUrl;
        return this.baseUrl() + '/resize.html?' + this.parseArgs(params);
    },
    callUrlBase: function (item, returnUrl) {
        let rechargeUrl = this.rechargeUrl();
        let args = {};
        args.gameid = item.gameId;
        args.key = this.getSignKey();
        args.dev = this.getStbId();
        args.fatherkey = this.getChildLock();
        args.userId = this.getUserId();
        args.userid = this.getUserId();
        args.ts = new Date().getTime();
        args.returnURL = returnUrl;

        var hostName = window.location.hostname; //不带端口
        var dstUrl = item.url;
        dstUrl = dstUrl.replace('192.168.200.100', hostName);

        return dstUrl + '?' + this.parseArgs(args) + '&rechageURL=' + rechargeUrl;
    },
    callGame: function (item, returnUrl) {
        window.location.href = this.callUrl(item, returnUrl);
    },
    callGameBase: function (item, returnUrl) {
        window.location.href = this.callUrlBase(item, returnUrl);
    }
};

const pageUrl = new PageUrl();

export {pageUrl}