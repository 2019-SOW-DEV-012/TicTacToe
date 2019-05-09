
const gameBoardHTML = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h1>Welcome to Tic - Tac - Toe Game !</h1>
    <div class = "scoreboard"><span class="playerTurn">Current Player :<span id="currentPlayer"></span> </span></div>
</body>
</html>
`;
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM(gameBoardHTML);
const { window } = jsdom;
const { document } = window;
global.window = window;
global.document = document;
const $ = global.jQuery = require('jquery');
const currentPlayerDom = $('#currentPlayer');
const $board = $('table tr');
var GameBoardPresenter = require("../src/js/view/GameBoardView");

describe("Game board view", () => {
    var view;
    beforeEach(() => {
        view = new GameBoardPresenter();
    });

    

});


