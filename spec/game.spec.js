var TicTacToeGame = require("../src/game");

describe("Tic Tac Toe Game", () => {

    beforeEach(function () {

        game = new TicTacToeGame();

    });


    it("should display current Player as 'X'" , () => {
        
        expect(game.currentPlayer).toEqual("X");
    });


    it("should 'O' Playes after 'X' and other way around" , () => {
        let playedPosition = 1;
        game.recordPlayerMoveOnBoard(playedPosition);

        expect(game.currentPlayer).toEqual("O");

    });


}); 