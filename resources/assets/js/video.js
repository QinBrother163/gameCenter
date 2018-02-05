import {getEvent,getKey,getKeyCodes} from './toodo/_keycodes';
import {pageUrl} from './app/PageUrl';


var args = pageUrl.parseQuery(window.location.search);
document.getElementById('biz1').innerHTML = args.returnURL;

var keyCode = getKeyCodes();
document.onkeydown = function (e) {
    var key = getKey(e);
    switch (key) {
        case keyCode.num1:
            var url = "http://192.168.200.100/nn_vod.ts?id=4355e30ecbaad2bccdc332004f905675";
            iPanel.setGlobalVar("VOD_CTRL_LOCATION", "x=0&y=0&w=1280&h=720");
            iPanel.setGlobalVar("VOD_CTRL_ENABLE_MENU", "0");
            iPanel.setGlobalVar("VOD_CTRL_URL", url);
            iPanel.setGlobalVar("VOD_CTRL_PLAY", "1");
            break;
        case keyCode.num2:
            iPanel.setGlobalVar("VOD_CTRL_STOP", "0");
            break;
        case keyCode.num0:
            iPanel.setGlobalVar("VOD_CTRL_STOP", "1");
            window.location.href = args.returnURL;
            break;
    }
};

/**
 VOD_PLAY_STATUS 获取视频播放状态，获取成功，返回播放状态，失败， 返回#。
 播放状态：
 返回-3：网络连接异常；
 返回-2：资源繁忙，播放失败；
 返回-1：服务器异常，播放失败；
 返回 0：停止播放；
 返回 1：开始播放；
 返回 2：同步播放；
 返回 3：播放结束；
 */
function getStatus() {
    return iPanel.getGlobalVar("VOD_PLAY_STATUS");
}