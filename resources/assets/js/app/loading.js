var loadTime = new Date().getTime();
var showTime = 1318;
var layoutId = 'loading-layout-002';

function showLoading() {
    loadTime = new Date().getTime();

    var title = arguments[0] ? arguments[0] : '提示';
    var text = arguments[1] ? arguments[1] : '正在加载，请稍候...';

    let layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML =
            '<div class="dialog-bg">' +
            '    <div class="dialog-title"></div>' +
            '    <div class="dialog-text"></div>' +
            '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var nodeBg = layout.querySelector('.dialog-bg');
    nodeBg.style.display = "block";

    var nodeTitle = nodeBg.querySelector('.dialog-title');
    nodeTitle.innerHTML = title;
    var nodeText = nodeBg.querySelector('.dialog-text');
    nodeText.innerHTML = text;

    document.onkeydown = null;
}

function hideLoading(callback) {
    var delayTime = arguments[1] ? arguments[1] : showTime;
    var time = new Date().getTime();
    time = (delayTime + loadTime) - time;
    if (time < 0) time = 0;

    setTimeout(function () {
        var layout = document.getElementById(layoutId);
        if (layout) {
            layout.style.display = 'none';
            let background = layout.querySelector('.dialog-bg');
            background.style.display = "none";
        }
        if (typeof(callback) === 'function') callback();
    }, time);
}

export {showLoading,hideLoading}