var GameBoardPresenter = require('./presenter/GameBoardPresenter');
var PlayerInfo = require('./model/PlayerInfo');
var $ = require('jquery')

let playerInfo = new PlayerInfo();
let gameBoardPresenter = new GameBoardPresenter(playerInfo);

function updatePlayer() {
    $("#currentPlayer").text(playerInfo.currentPlayer);

}
updatePlayer();

$('button').click(function () {
    gameBoardPresenter.recordPlayerMoveOnBoard(1);
    updatePlayer();
});
