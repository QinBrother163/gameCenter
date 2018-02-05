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
function showAgainDialog(/*callback, btn, title, text, btn0, btn1*/) {
    const layoutId = 'dialog-layout';
    let callback, btn, title, text, btn0, btn1;
    callback = arguments[0] ? arguments[0] : null;
    btn=0;
    btn0 = '再抽一次';
    let layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML =
            '<div class="Againdialog-bg">' +
                  '<div class="again-img"></div>'+
            '    <div class="Againdialog-text"><p>获得<span>\"再抽一次\"</span>机会!</p></div>' +
            '    <div id="dialog-btn0" style="left: 30%;top: 68%" class="OrderdialogBtn_1"></div>' +
            '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var background = layout.querySelector('.Againdialog-bg');
    background.style.display = "block";


    var nodeBtn0 = background.querySelector('#dialog-btn0');
    nodeBtn0.innerHTML = btn0 + '<div></div>';

    var btn_006 = nodeBtn0.querySelector("div");


    const focusBtn = function (btnIdx) {
        if (btnIdx == 0) {
            nodeBtn0.className = " " + "OrderdialogBtn_1 Orderdialog-Btn_focus";
        }
        // if (btnIdx == 1) {
        //     nodeBtn0.className = " " + "OrderdialogBtn_0";
        // }
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
                // focusBtn(0);
                break;
            case keyCode.right:
                // focusBtn(1);
                break;
            case keyCode.ok:     //确定
                submit = true;
                break;
            case keyCode.back:
            case keyCode.num0:      //取消
                btn = 0;
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

export {showAgainDialog}
