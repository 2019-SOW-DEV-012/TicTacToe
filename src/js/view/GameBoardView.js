let $ = require("jquery");
function GameBoardView() {

    this.displayPlayerTurn = function (player) {
        $("#currentPlayer").text(player);
    };

    this.displayOwnerOnTile = function(currentPlayer,position){
        $("td[data-index='"+position+"']").text(currentPlayer);
    }
}

module.exports = GameBoardView;
