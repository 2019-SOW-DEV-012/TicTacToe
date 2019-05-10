var gameStatus = require("../constants/GameStatus");
var possibleWinningPositions = require("../constants/PossibleWinningPositions");
var players = require("../constants/Players");


function GamePresenter(playerInfo, view) {
  view.displayPlayerTurn(playerInfo.currentPlayer);
  this.tiles = [];
  this.winner = "";

  this.recordPlayerMoveOnBoard = function (playedPosition) {
    if (this.tiles[playedPosition]) {
      return
    }

    addPlayedTileToBoard(playedPosition, this.tiles);

    playerInfo.currentPlayer = switchPlayer();
    view.displayPlayerTurn(playerInfo.currentPlayer)

    this.winner = checkWinningPossibility(this.tiles);
    if (this.winner) view.displayGameStatus(this.winner);



  };

  function addPlayedTileToBoard(playedPosition, tiles) {
    tiles[playedPosition] = playerInfo.currentPlayer;
    view.displayOwnerOnTile(playerInfo.currentPlayer, playedPosition);


  }
  function switchPlayer() {
    return playerInfo.currentPlayer === players.PLAYER_X ? players.PLAYER_O : players.PLAYER_X;
  }
  function checkWinningPossibility(tiles) {
    for (let winningPosition of Object.keys(possibleWinningPositions)) {
      const [
        firstPossiblePosition,
        secondPossiblePosition,
        thirdPossiblePosition
      ] = possibleWinningPositions[winningPosition];

      if (
        tiles[firstPossiblePosition] &&
        tiles[firstPossiblePosition] ===
        tiles[secondPossiblePosition] &&
        tiles[firstPossiblePosition] ===
        tiles[thirdPossiblePosition]
      ) {
        return gameStatus[[tiles[firstPossiblePosition]]];
      }
    }
  }
}
module.exports = GamePresenter;
