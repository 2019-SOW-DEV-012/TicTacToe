function GamePresenter(playerInfo,view) {
  view.displayPlayerTurn(playerInfo.currentPlayer);
  this.tiles = [];

  this.recordPlayerMoveOnBoard = function(playedPosition) {
    this.tiles[playedPosition] = playerInfo.currentPlayer;
    playerInfo.currentPlayer = switchPlayer()
    view.displayPlayerTurn(playerInfo.currentPlayer)
  };

  function switchPlayer() {
    return playerInfo.currentPlayer === "X" ? "O" : "X";
  }
}
module.exports = GamePresenter;
