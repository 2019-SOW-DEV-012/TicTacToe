var GameBoardPresenter = require("./presenter/GameBoardPresenter");
var GameBoardView = require("./view/GameBoardView");
var Game = require("./model/Game");
var Board = require("./model/Board");
var Player = require("./model/Player");

var $ = require("jquery");

let game = new Game();
let board = new Board();
let player = new Player();
let gameBoardView = new GameBoardView();
let gameBoardPresenter = new GameBoardPresenter(player,game,board,gameBoardView);

$('td').click(function (event) {
    let playedTile = event.target.dataset.index;
    gameBoardPresenter.recordPlayerMoveOnBoard(playedTile)
});