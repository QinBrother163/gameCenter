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
function showDialog(/*callback, btn, title, text, btn0, btn1*/) {
    const layoutId = 'dialog-layout-001';
    let callback, btn, title, text, btn0, btn1;
    callback = arguments[0] ? arguments[0] : null;
    btn = arguments[1] ? arguments[1] : 0;
    title = arguments[2] ? arguments[2] : '提示';
    text = arguments[3] ? arguments[3] : '';
    btn0 = arguments[4] ? arguments[4] : '确定';
    btn1 = arguments[5] ? arguments[5] : '返回';
    var align = arguments[6] ? arguments[6] : 'center';

    let layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML =
            '<div class="dialog-bg">' +
            '    <div class="dialog-title"></div>' +
            '    <div class="dialog-text"></div>' +
            '    <div id="dialog-btn0" style="left: 12%;top: 73%" class="dialog-btn dialog-btn0"></div>' +
            '    <div id="dialog-btn1" style="left: 57%;top: 73%" class="dialog-btn dialog-btn1"></div>' +
            '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var background = layout.querySelector('.dialog-bg');
    background.style.display = "block";

    var nodeTitle = background.querySelector('.dialog-title');
    nodeTitle.innerHTML = title;
    var nodeText = background.querySelector('.dialog-text');
    nodeText.innerHTML = text;
    nodeText.style.textAlign = align;

    var nodeBtn0 = background.querySelector('#dialog-btn0');
    nodeBtn0.innerHTML = btn0 + '<div></div>';
    var nodeBtn1 = background.querySelector('#dialog-btn1');
    nodeBtn1.innerHTML = btn1 + '<div></div>';

    var btn_006 = nodeBtn0.querySelector("div");
    var btn_006none = nodeBtn1.querySelector("div");



    const focusBtn = function (btnIdx) {
        if (btnIdx == 0) {
            nodeBtn0.className = " " + "dialogBtn_1 dialog-Btn_focus";
            nodeBtn1.className = " " + "dialogBtn_0";
        }
        if (btnIdx == 1) {

            nodeBtn0.className = " " + "dialogBtn_0";
            nodeBtn1.className = " " + "dialogBtn_1 dialog-Btn_focus";

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

export {showDialog}