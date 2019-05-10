var GameBoardPresenter = require("../src/js/presenter/GameBoardPresenter");
var gameStatus = require("../src/js/constants/GameStatus");


this.initView = function () {
    gameBoardView = jasmine.createSpyObj('gameBoardView', ['displayOwnerOnTile', 'displayGameStatus', 'displayPlayerTurn']);

}




describe("Tic Tac Toe Game", () => {
    let gameBoardPresenter;
    let game ;
    let board;
    let player;
    this.initView();


    this.xPlayOnTile = function (tile) {
        gameBoardPresenter.recordPlayerMoveOnBoard(tile);
    };

    this.oPlayOnTile = function (tile) {
        gameBoardPresenter.recordPlayerMoveOnBoard(tile);
    };

    beforeEach(function () {
        player = {
            currentPlayer: "X"
        }; 
        board = {
            tiles: []
        }; 
        game = {
            status: null
        };


        gameBoardPresenter = new GameBoardPresenter(player,game,board,gameBoardView);

    });

    it("should display default Player as 'X'", () => {

        expect(player.currentPlayer).toEqual("X");
    });

    it("should 'O' Playes after 'X' and other way around", () => {
        this.xPlayOnTile(1);

        expect(player.currentPlayer).toEqual("O");

    });

    it("should update the played tiles with owner", () => {
        for (var tile = 0; tile < 9; tile++) {
            gameBoardPresenter.recordPlayerMoveOnBoard(tile);
        }
        let X = "X";
        let O = "O";

        expect(board.tiles).toEqual([
            X, O, X,
            O, X, O,
            X]);

    });

    it("should not allow to play on already played tile", () => {
        this.xPlayOnTile(0);
        this.xPlayOnTile(0);

        expect(board.tiles[0]).toEqual("X");
    });

    describe("Row winner", () => {

        it("should declare 'X'as  winner on taking all tiles in top row  ", () => {
            this.xPlayOnTile(0);
            this.oPlayOnTile(5);
            this.xPlayOnTile(1);
            this.oPlayOnTile(4);
            this.xPlayOnTile(2);

            expect(game.status).toEqual(gameStatus.X);
        });

        it("should declare 'O' as winner on taking all tiles in top row  ", () => {
            this.xPlayOnTile(5);
            this.oPlayOnTile(0);
            this.xPlayOnTile(4);
            this.oPlayOnTile(1);
            this.xPlayOnTile(6);
            this.oPlayOnTile(2);

            expect(game.status).toEqual(gameStatus.O);
        });

        it("should declare 'X' as winner on taking all tiles in middle row  ", () => {
            this.xPlayOnTile(3);
            this.oPlayOnTile(0);
            this.xPlayOnTile(4);
            this.oPlayOnTile(1);
            this.xPlayOnTile(5);

            expect(game.status).toEqual(gameStatus.X);
        });

        it("should declare 'O' as winner on taking all tiles in middle row  ", () => {
            this.xPlayOnTile(0);
            this.oPlayOnTile(5);
            this.xPlayOnTile(1);
            this.oPlayOnTile(4);
            this.xPlayOnTile(8);
            this.oPlayOnTile(3);

            expect(game.status).toEqual(gameStatus.O);
        });

        it("should declare 'X' as winner on taking all tiles in bottom row  ", () => {
            this.xPlayOnTile(6);
            this.oPlayOnTile(0);
            this.xPlayOnTile(7);
            this.oPlayOnTile(1);
            this.xPlayOnTile(8);

            expect(game.status).toEqual(gameStatus.X);
        });

        it("should declare 'O' as winner on taking all tiles in bottom row  ", () => {
            this.xPlayOnTile(0);
            this.oPlayOnTile(6);
            this.xPlayOnTile(1);
            this.oPlayOnTile(7);
            this.xPlayOnTile(5);
            this.oPlayOnTile(8);

            expect(game.status).toEqual(gameStatus.O);
        });
    });
    
    describe("column winner", () => {

        it("should declare 'X'as  winner on taking all tiles in left column", () => {
            this.xPlayOnTile(0);
            this.oPlayOnTile(5);
            this.xPlayOnTile(3);
            this.oPlayOnTile(4);
            this.xPlayOnTile(6);

            expect(game.status).toEqual(gameStatus.X);
        });

        it("should declare 'O' as winner on taking all tiles in left column", () => {
            this.xPlayOnTile(5);
            this.oPlayOnTile(0);
            this.xPlayOnTile(4);
            this.oPlayOnTile(3);
            this.xPlayOnTile(2);
            this.oPlayOnTile(6);

            expect(game.status).toEqual(gameStatus.O);
        });

        it("should declare 'X' as winner on taking all tiles in middle column", () => {
            this.xPlayOnTile(1);
            this.oPlayOnTile(0);
            this.xPlayOnTile(4);
            this.oPlayOnTile(6);
            this.xPlayOnTile(7);

            expect(game.status).toEqual(gameStatus.X);
        });

        it("should declare 'O' as winner on taking all tiles in middle column", () => {
            this.xPlayOnTile(0);
            this.oPlayOnTile(1);
            this.xPlayOnTile(2);
            this.oPlayOnTile(4);
            this.xPlayOnTile(8);
            this.oPlayOnTile(7);

            expect(game.status).toEqual(gameStatus.O);
        });

        it("should declare 'X' as winner on taking all tiles in right column", () => {
            this.xPlayOnTile(2);
            this.oPlayOnTile(0);
            this.xPlayOnTile(5);
            this.oPlayOnTile(1);
            this.xPlayOnTile(8);

            expect(game.status).toEqual(gameStatus.X);
        });

        it("should declare 'O' as winner on taking all tiles in right column", () => {
            this.xPlayOnTile(0);
            this.oPlayOnTile(2);
            this.xPlayOnTile(1);
            this.oPlayOnTile(5);
            this.xPlayOnTile(4);
            this.oPlayOnTile(8);

            expect(game.status).toEqual(gameStatus.O);
        });
    });

    describe("diagonal & anti-diagonal winner", () => {

        it("should declare 'X'as  winner on taking all diagonal tiles", () => {
            this.xPlayOnTile(0);
            this.oPlayOnTile(5);
            this.xPlayOnTile(4);
            this.oPlayOnTile(6);
            this.xPlayOnTile(8);

            expect(game.status).toEqual(gameStatus.X);
        });

        it("should declare 'O' as winner on taking all diagonal tiles", () => {
            this.xPlayOnTile(5);
            this.oPlayOnTile(0);
            this.xPlayOnTile(3);
            this.oPlayOnTile(4);
            this.xPlayOnTile(2);
            this.oPlayOnTile(8);

            expect(game.status).toEqual(gameStatus.O);
        });
        
        it("should declare 'O' as winner on taking all anti - diagonal tiles", () => {
            this.xPlayOnTile(1);
            this.oPlayOnTile(2);
            this.xPlayOnTile(3);
            this.oPlayOnTile(4);
            this.xPlayOnTile(5);
            this.oPlayOnTile(6);

            expect(game.status).toEqual(gameStatus.O);
        });
        
        it("should declare 'X' as winner on taking all anti - diagonal tiles", () => {
            this.xPlayOnTile(2);
            this.oPlayOnTile(1);
            this.xPlayOnTile(4);
            this.oPlayOnTile(3);
            this.xPlayOnTile(6);

            expect(game.status).toEqual(gameStatus.X);
        });
    });

    it("should declare the game is a draw if neither of the player has won", () => {
        this.xPlayOnTile(4);
        this.oPlayOnTile(8);
        this.xPlayOnTile(1);
        this.oPlayOnTile(7);
        this.xPlayOnTile(6);
        this.oPlayOnTile(2);
        this.xPlayOnTile(5);
        this.oPlayOnTile(3);
        this.xPlayOnTile(0);

        expect(game.status).toEqual(gameStatus.GAME_DRAW);
    });
});