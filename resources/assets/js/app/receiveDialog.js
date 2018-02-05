import {getKeyCodes,getEvent,getKey,getCodes} from "../toodo/_keycodes";

/**
 * @param {function} callback
 * @param {int} callback.btn 按键 0.确定 1.取消
 * @param {number} btn 默认焦点 0.确定 1.取消
 * @param {string} title 窗口标题
 * @param {string} text 窗口内容
 * @param {string} btn0 按钮1
 * @param {string} btn1 按钮2
 */
function showReceiveDialog(/*callback, btn,, btn0, btn1, prize*/) {
    const layoutId = 'dialog-layout';
    let callback, btn, title, text, btn0, btn1, prize, prizeImg,prizeName;
    callback = arguments[0] ? arguments[0] : null;
    // btn = arguments[1] ? arguments[1] : 0;
    // btn0 = arguments[2] ? arguments[2] : '领取奖品';
    // btn1 = arguments[3] ? arguments[3] : '跳过';
    prize = arguments[1] ? arguments[1] : 6;
    btn0='领取奖品';
    btn1='跳过';
    btn=0;
    switch (prize){
        case 0:
            prizeName="经典游戏掌机";
            break;
        case 1:
            prizeName="数码平板电脑";
            break;
        case 2:
            prizeName="高清摄像头";
            break;
        case 3:
            prizeName="游戏币50F";
            break;
        case 4:
            prizeName="体感跳舞毯";
            break;
        case 5:
            prizeName="数码摄像机";
            break;
        default:
            prizeName="服务器出错啦！！！";
            break
    }
    if(prize<6){
        prizeImg = "img/turntable/thing"+prize+".png";
    }
    let align = arguments[6] ? arguments[6] : 'center';

    let layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML =
            '<div class="receiveDialog-bg">' +
            '    <div class="receiveDialog-title"></div>' +
            '    <div class="receiveDialog-text"></div>' +
            '    <div id="dialog-btn0" class="receiveDialog-btn receiveDialog-btn0"></div>' +
            '    <div id="dialog-btn1" class="receiveDialog-btn receiveDialog-btn1"></div>' +
            '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    let background = layout.querySelector('.receiveDialog-bg');
    background.style.display = "block";

    let nodeTitle = background.querySelector('.receiveDialog-title');
    nodeTitle.innerHTML = "<img src='img/turntable/dialogText.png' >";
    let nodeText = background.querySelector('.receiveDialog-text');
    nodeText.innerHTML = '<p class="prize-txt">抽中 "<span class="receiveDialog-prize"></span>"是否立即领取？</p>' +
        '<div class="prizeImg">' +
        '<img class="prize_Img" src="">' +
        '</div>';

    let nodePrize = background.querySelector('.receiveDialog-prize');
    nodePrize.innerHTML = prizeName;

    let prize_Img = background.querySelector('.prize_Img');
    prize_Img.src = prizeImg;

    let nodeBtn0 = background.querySelector('#dialog-btn0');
    nodeBtn0.innerHTML = btn0 + '<div></div>';
    let nodeBtn1 = background.querySelector('#dialog-btn1');
    nodeBtn1.innerHTML = btn1 + '<div></div>';

    let btn_006 = nodeBtn0.querySelector("div");
    let btn_006none = nodeBtn1.querySelector("div");

    nodeBtn0.style.color = "#000";
    nodeBtn1.style.color = "red";

    const focusBtn = function (btnIdx) {
        if (btnIdx == 0) {
            nodeBtn0.style.color = "#000";
            nodeBtn1.style.color = "red";
            nodeBtn0.className = " " + "receiveDialogBtn_1";
            nodeBtn1.className = " " + "receiveDialogBtn_0";
            // btn_006.className = "dialogBtn_006";
            // btn_006none.className = "none";
        }
        if (btnIdx == 1) {
            nodeBtn0.style.color = "red";
            nodeBtn1.style.color = "#000";
            nodeBtn0.className = " " + "receiveDialogBtn_0";
            nodeBtn1.className = " " + "receiveDialogBtn_1";
            // btn_006.className = "none";
            // btn_006none.className = "dialogBtn_006";
        }
        btn = btnIdx;
    };

    if (btn < 0 || btn > 1) btn = 0;
    focusBtn(btn);

    let submit = false;
    var keyCode = getKeyCodes();
    var preCodes = getCodes();
    document.onkeydown = function (e) {
        e = getEvent(e);
        var curKey = getKey(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        switch (curKey) {
            case keyCode.left:
                focusBtn(0);
                break;
            case keyCode.right:
                focusBtn(1);
                break;
            case keyCode.ok:     //确定
                submit = true;
                break;
            case keyCode.back:
            case keyCode.num0:      //取消
                btn = 1;
                submit = true;
                break;
        }
        if (submit) {
            layout.style.display = "none";
            background.style.display = "none";

            document.onkeydown = null;
            if (typeof(callback) === 'function') callback(btn);
        }
    }
}
export {showReceiveDialog}