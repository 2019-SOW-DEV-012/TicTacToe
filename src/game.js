function game(){

    this.currentPlayer = "X";

    this.recordPlayerMoveOnBoard = function(currentPlayedPosition) {
        this.currentPlayer = this.switchPlayer()
    };

    this.switchPlayer = function() {
      return this.currentPlayer === "X" ? "O" : "X";
    }

}
module.exports = game; 