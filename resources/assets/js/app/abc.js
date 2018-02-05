function getJSON(url, cb) {
    let req;
    req = new XMLHttpRequest;
    req.open('GET', url, true);
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            const itemsArr = eval('[' + req.responseText + ']');
            cb(itemsArr[0]);
        }
    };
    req.send(null);
}

function baseUrl() {
    return location.protocol + '//' + location.host + '/tdenter';
}

function delayBackground(node, img, delay) {
    setTimeout(function () {
        node.style.backgroundImage = 'url(' + img + ')'
    }, delay);
}

export {getJSON,baseUrl,delayBackground}