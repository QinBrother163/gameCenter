import {retail, retailId} from "./toodo/_retail";


if (retailId == retail.gxgd) {
    //document.body.style.background = 'url(img/bg_gxgd.jpg) no-repeat';
    document.body.style.background = 'url(img/bg.png) no-repeat';
    try {
        //iPanel.setGlobalVar("SEND_ALL_KEY_TO_PAGE", "1");
        iPanel.setGlobalVar("SEND_RETURN_KEY_TO_PAGE", "1");
        iPanel.setGlobalVar("SEND_EXIT_KEY_TO_PAGE", "1");
    } catch (e) {
    }
} else if (retailId == retail.hnyx) {
    //document.body.style.background = 'url(img/bg_hnyx.jpg) no-repeat';
    document.body.style.background = 'url(img/bg.png) no-repeat';
} else if (retailId == retail.gdgd) {
    //document.body.style.background = 'url(img/bg_gdgd.jpg) no-repeat';
    document.body.style.background = 'url(img/bg.png) no-repeat';
} else {
    document.body.style.background = 'url(img/bg.png) no-repeat';
    // 屏蔽退格返回键
    document.onkeypress = function (e) {
        return false;
    };
}

window.onunload = function () {
    if (retailId == retail.gxgd) {
        try {
            //iPanel.setGlobalVar("SEND_ALL_KEY_TO_PAGE", "0");
            iPanel.setGlobalVar("SEND_RETURN_KEY_TO_PAGE", "0");
            iPanel.setGlobalVar("SEND_EXIT_KEY_TO_PAGE", "0");
        } catch (e) {
        }
    }
};
