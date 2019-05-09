function GamePresenter(playerInfo,view) {
  view.displayPlayerTurn(playerInfo.currentPlayer);


  this.recordPlayerMoveOnBoard = function(currentPlayedPosition) {

    playerInfo.currentPlayer = switchPlayer()
    view.displayPlayerTurn(playerInfo.currentPlayer)
  };

  function switchPlayer() {
    return playerInfo.currentPlayer === "X" ? "O" : "X";
  }
}
module.exports = GamePresenter;
