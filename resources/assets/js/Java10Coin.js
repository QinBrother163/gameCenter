function Java10Coin() {

}
Java10Coin.prototype = {
    coins: 0,
    show: function (coins) {
        this.coins = coins;

        var layout = document.getElementById('java10-coin');
        if (!layout) {
            layout = document.createElement('div');
            layout.className = 'java10-coin';
            layout.id = 'java10-coin';
            layout.innerHTML =
                '<div class="coin-icon"></div>' +
                '<div class="coin-text">666666</div>';
            document.body.appendChild(layout);
        }

        var nodeText = layout.querySelector('.coin-text');
        nodeText.innerHTML = coins;
    }
};

var javaCoin = new Java10Coin();
export {javaCoin}