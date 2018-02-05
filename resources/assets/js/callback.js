import {pageUrl} from './app/PageUrl';
import {callbackArgs,turnTableArgs} from './app/PageArgs';
import {showDialog} from "./app/dialogQr";
const args = pageUrl.parseQuery(window.location.search);

if (args.code == 0) {
    var data = JSON.parse(args.data);
    var flag=turnTableArgs.getCallFlag();
    turnTableArgs.setSuccessCode(1);
    //! 复合产品、跳舞毯
    if (data.complex == 1 || data.prodId == 5 ||flag==1) {
        var imgSrc = args.qrImg;
        showDialog(function (btn) {
            if (btn == 0) {
                window.location.href = callbackArgs.getRedirectUrl();
            } else {
                window.location.href = callbackArgs.getReturnUrl();
            }
        }, 0, '填写信息', '扫 <span style="color: red">二维码</span> 或拨打客服电话 <span style="color: red">400-668-2886</span> 填写收货信息！', '完成', '返回', imgSrc);

    } else {
        turnTableArgs.setPrizeID(-1);
        window.location.href = callbackArgs.getRedirectUrl();
    }
} else {
    turnTableArgs.setPrizeID(-1);
    window.location.href = callbackArgs.getReturnUrl();
}
