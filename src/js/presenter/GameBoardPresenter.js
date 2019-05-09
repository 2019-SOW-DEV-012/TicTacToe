function GamePresenter(playerInfo,view) {
  view.displayPlayerTurn(playerInfo.currentPlayer);
  this.tiles = [];
  this.winner = "";

  this.recordPlayerMoveOnBoard = function(playedPosition) {
    if(this.tiles[playedPosition]){
      return
    }

    addPlayedTileToBoard(playedPosition,this.tiles);
    let topRowWin = [0, 1, 2];
    let middleRowWin = [3, 4, 5];
    let bottomRowWin = [6, 7, 8];
    if(this.tiles[topRowWin[0]] && this.tiles[topRowWin[0]]=== this.tiles[topRowWin[1]] && this.tiles[topRowWin[0]] === this.tiles[topRowWin[2]]){
    this.winner = this.tiles[topRowWin[0]];
    }
  
    else if (this.tiles[middleRowWin[0]] && this.tiles[middleRowWin[0]]=== this.tiles[middleRowWin[1]] && this.tiles[middleRowWin[0]] === this.tiles[middleRowWin[2]]){
      this.winner = this.tiles[middleRowWin[0]];
    }
    
    else if (this.tiles[bottomRowWin[0]] && this.tiles[bottomRowWin[0]]=== this.tiles[bottomRowWin[1]] && this.tiles[bottomRowWin[0]] === this.tiles[bottomRowWin[2]]){
      this.winner = this.tiles[bottomRowWin[0]];
    }

     else{
      playerInfo.currentPlayer = switchPlayer();
     }
     view.displayGameStatus(this.winner);



  };

  function addPlayedTileToBoard(playedPosition,tiles){
    tiles[playedPosition] = playerInfo.currentPlayer;
    view.displayOwnerOnTile(playerInfo.currentPlayer,playedPosition);
    view.displayPlayerTurn(playerInfo.currentPlayer)


  }
  function switchPlayer() {
    return playerInfo.currentPlayer === "X" ? "O" : "X";
  }
}
module.exports = GamePresenter;
