function GamePresenter(playerInfo,view) {
  view.displayPlayerTurn(playerInfo.currentPlayer);
  this.tiles = [];
  this.winner = "";

  this.recordPlayerMoveOnBoard = function(playedPosition) {
    if(this.tiles[playedPosition]){
      return
    }
    this.tiles[playedPosition] = playerInfo.currentPlayer;
    let topRowWin = [0, 1, 2];
    if(this.tiles[topRowWin[0]]=== this.tiles[topRowWin[1]] && this.tiles[topRowWin[0]] === this.tiles[topRowWin[2]]){
      this.winner = this.tiles[topRowWin[0]];
      view.displayGameStatus(this.winner);
    }
    view.displayOwnerOnTile(playerInfo.currentPlayer,playedPosition);
    playerInfo.currentPlayer = switchPlayer()
    view.displayPlayerTurn(playerInfo.currentPlayer)
  };

  function switchPlayer() {
    return playerInfo.currentPlayer === "X" ? "O" : "X";
  }
}
module.exports = GamePresenter;
