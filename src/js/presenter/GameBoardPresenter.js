var gameStatus = require("../constants/GameStatus");
var possibleWinningPositions = require("../constants/PossibleWinningPositions");
var players = require("../constants/Players");


function GamePresenter(player, game, board, view) {

  view.displayPlayerTurn(player.currentPlayer);

  this.recordPlayerMoveOnBoard = function (playedPosition) {
    if (board.tiles[playedPosition]) {
      return
    }

    addPlayedTileToBoard(playedPosition, board.tiles);

    player.currentPlayer = switchPlayer();
    view.displayPlayerTurn(player.currentPlayer)

    game.status = checkWinningPossibility();
    if (game.status ) view.displayGameStatus(game.status);



  };

  function addPlayedTileToBoard(playedPosition, tiles) {
    tiles[playedPosition] = player.currentPlayer;
    view.displayOwnerOnTile(player.currentPlayer, playedPosition);


  }
  function switchPlayer() {
    return player.currentPlayer === players.PLAYER_X ? players.PLAYER_O : players.PLAYER_X;
  }
  function checkWinningPossibility() {
    let tiles = board.tiles;
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
