let $ = require("jquery");
function GameBoardView() {
    this.displayPlayerTurn = function (player) {
        $("#currentPlayer").text(player);
    };
}

module.exports = GameBoardView;
