import {getKeyCodes,getEvent,getKey,getCodes} from "../toodo/_keycodes";


function ChildMenu() {
}
ChildMenu.prototype = {
    /**
     * @param callback {function}
     * @param callback.btn {int} 0.按钮1 1.按钮2 -1.取消操作
     * @param cnt {int} [1,2] 按钮数量
     * @param btn {int} [0,1] 默认选中
     * @param text {string} 提示文本
     */
    show: function (callback, cnt, btn, text) {
        var layoutId = 'lock-menu-layout';
        var layout = document.getElementById(layoutId);
        if (!layout) {
            layout = document.createElement('div');
            layout.className = 'lock-layout';
            layout.id = layoutId;
            layout.innerHTML =
                '<div class="lock-menu-bg">' +
                '    <div id="lock-title" class="lock-title-0"></div>' +
                '    <div id="lock-btn0" class="lock-btn"><span>开启童锁</span></div>' +
                '    <div id="lock-btn1" class="lock-btn"><span>关闭童锁</span></div>' +
                '    <div id="lock-btn2" class="lock-btn"><span>更改密码</span></div>' +
                '    <div class="lock-tips">选择需要的操作按确定键进行下一步，按返回键关闭弹窗。</div>' +
                '</div>';
            document.body.appendChild(layout);
        }
        layout.style.display = 'block';

        var bg = layout.querySelector('.lock-menu-bg');
        var btnNodes = bg.querySelectorAll('.lock-btn');
        for(var i=0;i<btnNodes.length;++i){
            var btnNode = btnNodes[i];
            btnNode.style.display = 'none';
        }

        var btnNode0, btnNode1;
        if (cnt == 1) {
            btnNode0 = btnNodes[0];
        } else {
            cnt = 2;
            btnNode0 = btnNodes[1];
            btnNode1 = btnNodes[2];
        }
        if (btnNode0) btnNode0.style.display = 'block';
        if (btnNode1) btnNode1.style.display = 'block';

        var tipNode = bg.querySelector('.lock-tips');
        tipNode.innerHTML = text;

        function focusBtn(btnIdx) {
            var focusNode;
            if (cnt == 1) {
                btnNode0.className="lock-btn lock-btn-focus";
                // focusNode = btnNode0.querySelector('.lock-btn-focus');
                // focusNode.style.display = 'block';
            } else {
                if (btnIdx == 0) {
                    btnNode0.className="lock-btn lock-btn-focus";
                    btnNode1.className="lock-btn";
                    // focusNode = btnNode0.querySelector('.lock-btn-focus');
                    // focusNode.style.display = 'block';
                    // focusNode = btnNode1.querySelector('.lock-btn-focus');
                    // focusNode.style.display = 'none';
                } else {
                    btnNode0.className="lock-btn";
                    btnNode1.className="lock-btn lock-btn-focus";
                    // focusNode = btnNode0.querySelector('.lock-btn-focus');
                    // focusNode.style.display = 'none';
                    // focusNode = btnNode1.querySelector('.lock-btn-focus');
                    // focusNode.style.display = 'block';
                }
            }
            btn = btnIdx;
        }

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
                case keyCode.up:
                    focusBtn(0);
                    break;
                case keyCode.down:
                    focusBtn(cnt - 1);
                    break;
                case keyCode.ok:     //确定
                    submit = true;
                    break;
                case keyCode.back:
                case keyCode.num0:      //取消
                    btn = -1;
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
};

var childMenu = new ChildMenu();
export {childMenu}