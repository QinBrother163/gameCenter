import {getKeyCodes,getEvent,getKey,getCodes} from "../toodo/_keycodes";


/**
 * @param {function} callback
 * @param {int} callback.code 按键 0.输入完成 1.取消
 * @param {string} callback.msg 输入的字符串
 * @param title {int} 标题图片 0.设置铜锁 1.铜锁验证
 * @param label {int} 提示语 0.输入密码 1.再次输入
 */
function showChildLock(callback, title, label) {
    title = arguments[1] ? arguments[1] : 0;
    label = arguments[2] ? arguments[2] : 0;
    var tips = arguments[3] ? arguments[3] : '请输入6位数字密码，按返回键关闭弹窗。';

    var layoutId = 'lock-layout-003';
    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement('div');
        layout.className = 'lock-layout';
        layout.id = layoutId;
        layout.innerHTML = '' +
            '<div class="lock-bg">' +
            '  <div id="lock-title" class="lock-title-0"></div>' +
            '  <div class="lock-input">' +
            '    <div id="lock-label" class="lock-label-0"></div>' +
            '    <div id="lock-text" class="lock-text"></div>' +
            '  </div>' +
            '  <div id="lock-tips" class="lock-tips"></div>' +
            '</div>' +
            '<div class="lock-keyboard">' +
            '  <div class="lock-num-bg">' +
            '    <div id="lock-num-1" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>1</span></div></div>' +
            '    <div id="lock-num-2" class="lock-num"> <div class="lock-num-focus"></div>    <div class="lock-num-img"><span>2</span></div></div>' +
            '    <div id="lock-num-3" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>3</span></div></div>' +
            '    <div id="lock-num-4" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>4</span></div></div>' +
            '    <div id="lock-num-5" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>5</span></div></div>' +
            '    <div id="lock-num-6" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>6</span></div></div>' +
            '    <div id="lock-num-7" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>7</span></div></div>' +
            '    <div id="lock-num-8" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>8</span></div></div>' +
            '    <div id="lock-num-9" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>9</span></div></div>' +
            '    <div id="lock-num-10" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"></div></div>' +
            '    <div id="lock-num-0" class="lock-num"> <div class="lock-num-focus"></div> <div class="lock-num-img"><span>0</span></div></div>' +
            '    <div id="lock-num-11" class="lock-num">   <div class="lock-num-focus"></div>  <div class="lock-num-img"></div></div>' +
            '  </div>' +
            '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var lockText = document.getElementById("lock-text");
    var lockTitle = document.getElementById("lock-title");
    var lockLabel = document.getElementById('lock-label');
    var lockTips = document.getElementById('lock-tips');
    lockText.innerText = "";
    lockTitle.className = "lock-title-" + title;
    lockLabel.className = 'lock-label-' + label;
    lockTips.innerHTML = tips;

    var keyCode = getKeyCodes();
    var preCodes = getCodes();
    var itemNodes = [
        {keyCode: keyCode.num1, id: "lock-num-1"},
        {keyCode: keyCode.num2, id: "lock-num-2"},
        {keyCode: keyCode.num3, id: "lock-num-3"},
        {keyCode: keyCode.num4, id: "lock-num-4"},
        {keyCode: keyCode.num5, id: "lock-num-5"},
        {keyCode: keyCode.num6, id: "lock-num-6"},
        {keyCode: keyCode.num7, id: "lock-num-7"},
        {keyCode: keyCode.num8, id: "lock-num-8"},
        {keyCode: keyCode.num9, id: "lock-num-9"},
        {keyCode: keyCode.back, id: "lock-num-10"},
        {keyCode: keyCode.num0, id: "lock-num-0"},
        {keyCode: null, id: "lock-num-11"}
    ];

    var inputText = '';
    var curIdx = 0;

    var setSelected = function (curIdx) {
        itemNodes.forEach(function (itemNode, index) {
            var node = document.getElementById(itemNode.id);
           // node.className = (index == curIdx ? 'lock-num-focus' : 'lock-num');
            node.querySelector('div').style.display=index == curIdx ? "block":"none";
        });
    };
    var submit = function (code) {
        layout.style.display = "none";
        //document.body.removeChild(layout);
        document.onkeydown = null;
        if (typeof(callback) === 'function') callback(code, inputText);
    };
    var invisible = function (text) {
        var star = '';
        for (var i = 0; i < text.length; ++i) star += '*';
        return star;
    };
    var clickNum = function (num) {
        inputText += String(num);
        lockText.innerText = invisible(inputText);
    };
    var backspace = function () {
        inputText = inputText.substring(0, inputText.length - 1);
        lockText.innerText = invisible(inputText);
    };
    var handleOk = function () {
        var current = itemNodes[curIdx];
        if (current.keyCode == null) {
            backspace();
        } else {
            handleKey(current.keyCode);
        }
    };
    var handleKey = function (curKey) {
        switch (curKey) {
            case keyCode.left:
                if ((curIdx % 3) != 0) {
                    curIdx--;
                }
                break;
            case keyCode.right:
                if ((curIdx % 3) != 2) {
                    curIdx++;
                }
                break;
            case keyCode.up:
                if (curIdx > 2) {
                    curIdx -= 3;
                }
                break;
            case keyCode.down:
                if (curIdx < 9) {
                    curIdx += 3;
                }
                break;
            case keyCode.ok:
                handleOk();
                break;
            case keyCode.back:
                submit(1);
                break;
            case keyCode.num1:
            case keyCode.num2:
            case keyCode.num3:
            case keyCode.num4:
            case keyCode.num5:
            case keyCode.num6:
            case keyCode.num7:
            case keyCode.num8:
            case keyCode.num9:
            case keyCode.num0:
                var num = curKey - keyCode.num0;
                clickNum(num);
                break;
            default:
                break;
        }
    };

    setSelected(0);
    document.onkeydown = function (e) {
        e = getEvent(e);
        var curKey = getKey(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        handleKey(curKey);
        setSelected(curIdx);

        if (inputText.length == 6) {
            submit(0);
        }
    };
}

export {showChildLock}