var gameStatus = require("../constants/GameStatus");
var possibleWinningPositions = require("../constants/PossibleWinningPositions");
var players = require("../constants/Players");


function GamePresenter(player, game, board, view) {

  view.displayPlayerTurn(player.currentPlayer);

  this.recordPlayerMoveOnBoard = function (playedPosition) {
    if (isTileAlreadyPlayed(playedPosition) || isGameOver()) {
      return
    }
    addPlayedTileToBoard(playedPosition, board.tiles);

    updateNextPlayerToPlay();

    if (isMinimumTilesFilledTocheckWinning())
      updateGameStatus()

  };

  function updateGameStatus() {
    game.status = checkWinningPossibility();
    game.status = isGameTie() ? gameStatus.GAME_DRAW : game.status;
    if (game.status) view.displayGameStatus(game.status);
  }


  function updateNextPlayerToPlay() {
    player.currentPlayer = switchPlayer();
    view.displayPlayerTurn(player.currentPlayer)

  }

  function isMinimumTilesFilledTocheckWinning() {
    return board.tiles.join("").length > 4;
  }

  function isGameTie() {
    return board.tiles.join("").length === 9 && !game.status;
  };

  function isGameOver() {
    return !!game.status;
  };

  function isTileAlreadyPlayed(playedPosition) {
    return board.tiles[playedPosition]
  }

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
