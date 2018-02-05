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
function showOrderDialog(/*callback, btn, title, text, btn0, btn1*/) {
    const layoutId = 'dialog-layout';
    let callback, btn, title, text, btn0, btn1;
    callback = arguments[0] ? arguments[0] : null;
    btn=0;
    btn0 = '确定';
    btn1 ='取消';
    let layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML =
            '<div class="Orderdialog-bg">' +
            '    <div class="Orderdialog-text"><p>是否在线订购<span>\"体感热舞\"</span>包月?</p></div>' +
            '    <div id="dialog-btn0" style="left: 12%;top: 68%" class="OrderdialogBtn_1"></div>' +
            '    <div id="dialog-btn1" style="left: 57%;top: 68%" class="OrderdialogBtn_0"></div>' +
            '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var background = layout.querySelector('.Orderdialog-bg');
    background.style.display = "block";

    // var nodeTitle = background.querySelector('.dialog-title');
    // nodeTitle.innerHTML = title;
    // var nodeText = background.querySelector('.dialog-text');
    // nodeText.innerHTML = text;
    // nodeText.style.textAlign = align;

    var nodeBtn0 = background.querySelector('#dialog-btn0');
    nodeBtn0.innerHTML = btn0 + '<div></div>';
    var nodeBtn1 = background.querySelector('#dialog-btn1');
    nodeBtn1.innerHTML = btn1 + '<div></div>';

    var btn_006 = nodeBtn0.querySelector("div");
    var btn_006none = nodeBtn1.querySelector("div");



    const focusBtn = function (btnIdx) {
        if (btnIdx == 0) {
            nodeBtn0.className = " " + "OrderdialogBtn_1 Orderdialog-Btn_focus";
            nodeBtn1.className = " " + "OrderdialogBtn_0";
        }
        if (btnIdx == 1) {

            nodeBtn0.className = " " + "OrderdialogBtn_0";
            nodeBtn1.className = " " + "OrderdialogBtn_1 Orderdialog-Btn_focus";

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

export {showOrderDialog}