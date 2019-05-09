var TicTacToeGame = require("../src/game");

describe("Tic Tac Toe Game", () => {

    it("should display current Player as 'X'" , () => {
        game = new TicTacToeGame();
        
        expect(game.currentPlayer).toEqual("X");
    });

}); 