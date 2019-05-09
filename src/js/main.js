var GameBoardPresenter = require("./presenter/GameBoardPresenter");
var PlayerInfo = require("./model/PlayerInfo");
var GameBoardView = require("./view/GameBoardView");
var $ = require("jquery");

let playerInfo = new PlayerInfo();
let gameBoardView = new GameBoardView();
let gameBoardPresenter = new GameBoardPresenter(playerInfo, gameBoardView);

$("button").click(function () {
    gameBoardPresenter.recordPlayerMoveOnBoard(1);
});
