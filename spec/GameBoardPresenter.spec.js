var GameBoardPresenter = require("../src/presenter/GameBoardPresenter");


describe("Tic Tac Toe Game", () => {
    let gameBoardPresenter;
    beforeEach(function () {

         gameBoardPresenter = new GameBoardPresenter();

    });

    it("should display default Player as 'X'" , () => {

        expect(gameBoardPresenter.currentPlayer).toEqual("X");
    });
    
    it("should 'O' Playes after 'X' and other way around" , () => {
        let playedPosition = 1;
        gameBoardPresenter.recordPlayerMoveOnBoard(playedPosition);

        expect(gameBoardPresenter.currentPlayer).toEqual("O");

    });
    
});