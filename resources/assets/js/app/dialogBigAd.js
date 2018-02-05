import {getKeyCodes,getEvent,getKey,getCodes} from "../toodo/_keycodes";


function showAd16(callback, btn) {
    const layoutId = 'big-ad-16';

    let layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'big-ad-16';
        layout.id = layoutId;
        layout.innerHTML =
            '<div id="big-ad-16-btn-0"></div>' +
            '<div id="big-ad-16-btn-1"></div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var btn0 = layout.querySelector('#big-ad-16-btn-0');
    var btn1 = layout.querySelector('#big-ad-16-btn-1');

    const focusBtn = function (btnIdx) {
        if (btnIdx == 0) {
            btn0.style.display = 'block';
            btn1.style.display = 'none';
        }
        if (btnIdx == 1) {
            btn0.style.display = 'none';
            btn1.style.display = 'block';
        }
        btn = btnIdx;
    };

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

            document.onkeydown = null;
            if (typeof(callback) === 'function') callback(btn);
        }
    }
}

function showAd29(callback, btn, ad) {
    const layoutId = 'big-ad-29';

    let layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.id = layoutId;
        layout.innerHTML =
            '<div id="big-ad-btn-0" class="big-ad-btn-0-focus"></div>' +
            '<div id="big-ad-btn-1" class="big-ad-btn-1"></div>';
        document.body.appendChild(layout);
    }
    layout.className = 'big-ad-' + ad;
    layout.style.display = "block";

    var btn0 = layout.querySelector('#big-ad-btn-0');
    var btn1 = layout.querySelector('#big-ad-btn-1');

    const focusBtn = function (btnIdx) {
        if (btnIdx == 0) {
            btn0.className = 'big-ad-btn-0-focus';
            btn1.className = 'big-ad-btn-1';
        }
        if (btnIdx == 1) {
            btn0.className = 'big-ad-btn-0';
            btn1.className = 'big-ad-btn-1-focus';
        }
        btn = btnIdx;
    };

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

            document.onkeydown = null;
            if (typeof(callback) === 'function') callback(btn);
        }
    }
}

export {showAd16,showAd29}