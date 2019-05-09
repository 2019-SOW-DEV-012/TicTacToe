function game(){

    this.currentPlayer = "X";

    this.recordPlayerMoveOnBoard = function(currentPlayedPosition) {
        this.currentPlayer = this.currentPlayer === "X" ? "O":"X";
    };

    
}
module.exports = game; 