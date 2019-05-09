let $ = require("jquery");
function GameBoardView() {

    this.displayPlayerTurn = function (player) {
        $("#currentPlayer").text(player);
    };

    this.displayOwnerOnTile = function(currentPlayer,position){
        $("td[data-index='"+position+"']").text(currentPlayer);
    }

    this.displayGameStatus = function(gameStatus){
        $(".gamestatus").addClass("show");
        $(".scoreboard").addClass("hide");
        $("#result").text(gameStatus)
    };
}

module.exports = GameBoardView;
