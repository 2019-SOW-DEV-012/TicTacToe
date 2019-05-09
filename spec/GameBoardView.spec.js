
const gameBoardHTML = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h1>Welcome to Tic - Tac - Toe Game !</h1>
    <div class = "scoreboard"><span class="playerTurn">Current Player :<span id="currentPlayer"></span> </span></div>
    <table>
      <tr>
        <td data-index = 0 ></td>
        <td data-index = 1 ></td>
        <td data-index = 2 ></td>
      </tr>
      <tr>
        <td data-index = 3 ></td>
        <td data-index = 4 ></td>
        <td data-index = 5 ></td>
      </tr>
      <tr>
        <td data-index = 6 ></td>
        <td data-index = 7 ></td>
        <td data-index = 8 ></td>
      </tr>
    </table>
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
var GameBoardPresenter = require("../src/js/view/GameBoardView");

describe("Game board view", () => {
    var view;
    beforeEach(() => {
        view = new GameBoardPresenter();
    });

    it("should display current Player on top of the board", () => {
        view.displayPlayerTurn("X")

        expect(currentPlayerDom.text()).toEqual("X");
    });

    it("should display tile owners on the tile", () => {
        let currentPlayer = "X"
        view.displayOwnerOnTile(currentPlayer,1);

        expect($("td[data-index=1]").text()).toEqual("X");
    });

});


