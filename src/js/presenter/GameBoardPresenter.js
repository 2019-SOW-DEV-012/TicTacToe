var gameStatus = require("../constants/GameStatus");
var possibleWinningPositions = require("../constants/PossibleWinningPositions");
var players = require("../constants/Players");


function GamePresenter(playerInfo,view) {
  view.displayPlayerTurn(playerInfo.currentPlayer);
  this.tiles = [];
  this.winner = "";

  this.recordPlayerMoveOnBoard = function(playedPosition) {
    if(this.tiles[playedPosition]){
      return
    }

    addPlayedTileToBoard(playedPosition,this.tiles);

    playerInfo.currentPlayer = switchPlayer();
    view.displayPlayerTurn(playerInfo.currentPlayer)

    if(this.tiles[possibleWinningPositions.TOP_ROW_WIN[0]] && this.tiles[possibleWinningPositions.TOP_ROW_WIN[0]]=== this.tiles[possibleWinningPositions.TOP_ROW_WIN[1]] && this.tiles[possibleWinningPositions.TOP_ROW_WIN[0]] === this.tiles[possibleWinningPositions.TOP_ROW_WIN[2]]){
    this.winner = this.tiles[possibleWinningPositions.TOP_ROW_WIN[0]];
    }
  
    else if (this.tiles[possibleWinningPositions.MIDDLE_ROW_WIN[0]] && this.tiles[possibleWinningPositions.MIDDLE_ROW_WIN[0]]=== this.tiles[possibleWinningPositions.MIDDLE_ROW_WIN[1]] && this.tiles[possibleWinningPositions.MIDDLE_ROW_WIN[0]] === this.tiles[possibleWinningPositions.MIDDLE_ROW_WIN[2]]){
      this.winner = this.tiles[possibleWinningPositions.MIDDLE_ROW_WIN[0]];
    }
    
    else if (this.tiles[possibleWinningPositions.BOTTOM_ROW_WIN[0]] && this.tiles[possibleWinningPositions.BOTTOM_ROW_WIN[0]]=== this.tiles[possibleWinningPositions.BOTTOM_ROW_WIN[1]] && this.tiles[possibleWinningPositions.BOTTOM_ROW_WIN[0]] === this.tiles[possibleWinningPositions.BOTTOM_ROW_WIN[2]]){
      this.winner = this.tiles[possibleWinningPositions.BOTTOM_ROW_WIN[0]];
    }
    if (this.winner) view.displayGameStatus(gameStatus[this.winner]);



  };

  function addPlayedTileToBoard(playedPosition,tiles){
    tiles[playedPosition] = playerInfo.currentPlayer;
    view.displayOwnerOnTile(playerInfo.currentPlayer,playedPosition);
  //view.displayPlayerTurn(playerInfo.currentPlayer)


  }
  function switchPlayer() {
    return playerInfo.currentPlayer === players.PLAYER_X ? players.PLAYER_O : players.PLAYER_X;
  }
}
module.exports = GamePresenter;
