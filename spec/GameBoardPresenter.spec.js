var GameBoardPresenter = require("../src/js/presenter/GameBoardPresenter");


describe("Tic Tac Toe Game", () => {
    let gameBoardPresenter;
    let playerInfo;

    beforeEach(function () {
        playerInfo = {
            currentPlayer : "X"
          };
         gameBoardPresenter = new GameBoardPresenter(playerInfo);

    });

    it("should display default Player as 'X'" , () => {

        expect(playerInfo.currentPlayer).toEqual("X");
    });
    
    it("should 'O' Playes after 'X' and other way around" , () => {
        let playedPosition = 1;
        gameBoardPresenter.recordPlayerMoveOnBoard(playedPosition);

        expect(playerInfo.currentPlayer).toEqual("O");

    });
    
});