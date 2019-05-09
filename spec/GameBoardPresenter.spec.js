var GameBoardPresenter = require("../src/js/presenter/GameBoardPresenter");


describe("Tic Tac Toe Game", () => {
    let gameBoardPresenter;
    let playerInfo;

    beforeEach(function () {
        playerInfo = {
            currentPlayer: "X"
        };

        gameBoardView = jasmine.createSpyObj('gameBoardView', ['displayOwnerOnTile','displayGameStatus']);
        gameBoardView.displayPlayerTurn = function () { };
        gameBoardPresenter = new GameBoardPresenter(playerInfo, gameBoardView);

    });

    it("should display default Player as 'X'", () => {

        expect(playerInfo.currentPlayer).toEqual("X");
    });

    it("should 'O' Playes after 'X' and other way around", () => {
        let playedPosition = 1;
        gameBoardPresenter.recordPlayerMoveOnBoard(playedPosition);

        expect(playerInfo.currentPlayer).toEqual("O");

    });

    it("should update the played tiles with owner", () => {
        for(var playedPosition = 0 ; playedPosition < 9 ; playedPosition++ ){
            gameBoardPresenter.recordPlayerMoveOnBoard(playedPosition);
        }
        let X= "X";
        let O= "O";

        expect(gameBoardPresenter.tiles).toEqual([ 
         X,O,X,
         O,X,O,
         X,O,X]);

    });

    it("should declare 'X'as  winner on taking all tiles in top row  ", () => {
        gameBoardPresenter.recordPlayerMoveOnBoard(0);
        gameBoardPresenter.recordPlayerMoveOnBoard(5);
        gameBoardPresenter.recordPlayerMoveOnBoard(1);
        gameBoardPresenter.recordPlayerMoveOnBoard(4);
        gameBoardPresenter.recordPlayerMoveOnBoard(2);

        expect(gameBoardPresenter.winner).toEqual("X");
    }); 
    
    it("should declare 'O' as winner on taking all tiles in top row  ", () => {
        gameBoardPresenter.recordPlayerMoveOnBoard(5);
        gameBoardPresenter.recordPlayerMoveOnBoard(0);
        gameBoardPresenter.recordPlayerMoveOnBoard(4);
        gameBoardPresenter.recordPlayerMoveOnBoard(1);
        gameBoardPresenter.recordPlayerMoveOnBoard(6);
        gameBoardPresenter.recordPlayerMoveOnBoard(2);

        expect(gameBoardPresenter.winner).toEqual("O");
    });


});