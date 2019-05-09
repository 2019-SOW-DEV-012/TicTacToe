var TicTacToeGame = require("../src/game");

describe("Tic Tac Toe Game", () => {

    it("should display current Player as 'X'" , () => {
        game = new TicTacToeGame();

        expect(game.currentPlayer).toEqual("X");
    });


    it("should 'O' Playes after 'X' and other way around" , () => {
        game = new TicTacToeGame();
        let playedPosition = 1;
        game.recordPlayerMoveOnBoard(playedPosition);

        expect(game.currentPlayer).toEqual("O");

    });

    
}); 