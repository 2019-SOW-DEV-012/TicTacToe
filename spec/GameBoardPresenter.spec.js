var GameBoardPresenter = require("../src/js/presenter/GameBoardPresenter");

this.initView = function() {
    gameBoardView = jasmine.createSpyObj('gameBoardView', ['displayOwnerOnTile','displayGameStatus','displayPlayerTurn']);

}




describe("Tic Tac Toe Game", () => {
    let gameBoardPresenter;
    let playerInfo;
    this.initView();


    this.xPlayOnTile = function(tile) {
        gameBoardPresenter.recordPlayerMoveOnBoard(tile);
    };

    this.oPlayOnTile = function(tile) {
        gameBoardPresenter.recordPlayerMoveOnBoard(tile);
    };

    beforeEach(function () {
        playerInfo = {
            currentPlayer: "X"
        };

        gameBoardPresenter = new GameBoardPresenter(playerInfo, gameBoardView);

    });

    it("should display default Player as 'X'", () => {

        expect(playerInfo.currentPlayer).toEqual("X");
    });

    it("should 'O' Playes after 'X' and other way around", () => {
        this.xPlayOnTile(1);

        expect(playerInfo.currentPlayer).toEqual("O");

    });

    it("should update the played tiles with owner", () => {
        for(var tile = 0 ; tile < 9 ; tile++ ){
            gameBoardPresenter.recordPlayerMoveOnBoard(tile);
        }
        let X= "X";
        let O= "O";

        expect(gameBoardPresenter.tiles).toEqual([ 
         X,O,X,
         O,X,O,
         X,O,X]);

    });

    it("should not allow to play on already played tile", () => {
        this.xPlayOnTile(0);
        this.xPlayOnTile(0);

        expect(gameBoardPresenter.tiles[0]).toEqual("X");
    }); 
     
    it("should declare 'X'as  winner on taking all tiles in top row  ", () => {
        this.xPlayOnTile(0);
        this.oPlayOnTile(5);
        this.xPlayOnTile(1);
        this.oPlayOnTile(4);
        this.xPlayOnTile(2);

        expect(gameBoardPresenter.winner).toEqual("X");
    }); 
    
    it("should declare 'O' as winner on taking all tiles in top row  ", () => {
        this.xPlayOnTile(5);
        this.oPlayOnTile(0);
        this.xPlayOnTile(4);
        this.oPlayOnTile(1);
        this.xPlayOnTile(6);
        this.oPlayOnTile(2);

        expect(gameBoardPresenter.winner).toEqual("O");
    });
    
    it("should declare 'X' as winner on taking all tiles in middle row  ", () => {
        this.xPlayOnTile(3);
        this.oPlayOnTile(0);
        this.xPlayOnTile(4);
        this.oPlayOnTile(1);
        this.xPlayOnTile(5);

        expect(gameBoardPresenter.winner).toEqual("X");
    });

    it("should declare 'O' as winner on taking all tiles in middle row  ", () => {
        this.xPlayOnTile(0);
        this.oPlayOnTile(5);
        this.xPlayOnTile(1);
        this.oPlayOnTile(4);
        this.xPlayOnTile(8);
        this.oPlayOnTile(3);

        expect(gameBoardPresenter.winner).toEqual("O");
    }); 
    
    it("should declare 'X' as winner on taking all tiles in bottom row  ", () => {
        this.xPlayOnTile(6);
        this.oPlayOnTile(0);
        this.xPlayOnTile(7);
        this.oPlayOnTile(1);
        this.xPlayOnTile(8);

        expect(gameBoardPresenter.winner).toEqual("X");
    });

    it("should declare 'O' as winner on taking all tiles in bottom row  ", () => {
        this.xPlayOnTile(0);
        this.oPlayOnTile(6);
        this.xPlayOnTile(1);
        this.oPlayOnTile(7);
        this.xPlayOnTile(5);
        this.oPlayOnTile(8);

        expect(gameBoardPresenter.winner).toEqual("O");
    });


});