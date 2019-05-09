function GamePresenter(playerInfo) {

  this.recordPlayerMoveOnBoard = function(currentPlayedPosition) {
    playerInfo.currentPlayer = switchPlayer()
  };

  function switchPlayer() {
    return playerInfo.currentPlayer === "X" ? "O" : "X";
  }
}
module.exports = GamePresenter;
