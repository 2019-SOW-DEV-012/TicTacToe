function GamePresenter() {
  this.currentPlayer = "X";

  this.recordPlayerMoveOnBoard = function(currentPlayedPosition) {
    this.currentPlayer = this.switchPlayer()
  };

  this.switchPlayer = function() {
      console.log(this.currentPlayer)
    return this.currentPlayer === "X" ? "O" : "X";
  }
}
module.exports = GamePresenter;
