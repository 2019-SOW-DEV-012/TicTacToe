var GameBoardPresenter = require("./presenter/GameBoardPresenter");
var PlayerInfo = require("./model/PlayerInfo");
var GameBoardView = require("./view/GameBoardView");
var $ = require("jquery");

let playerInfo = new PlayerInfo();
let gameBoardView = new GameBoardView();
let gameBoardPresenter = new GameBoardPresenter(playerInfo, gameBoardView);

$('td').click(function (event) {
    let playedTile = event.target.dataset.index;
    gameBoardPresenter.recordPlayerMoveOnBoard(playedTile)
});