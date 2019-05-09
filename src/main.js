var GameBoardPresenter = require('./presenter/GameBoardPresenter');
	
var gameBoardPresenter = new GameBoardPresenter();

function updatePlayer(){
    document.getElementById('currentPlayer').innerHTML = gameBoardPresenter.currentPlayer;

}
updatePlayer();

document.querySelectorAll('button').forEach((position) => {
    position.addEventListener('click', function (event) {
        gameBoardPresenter.recordPlayerMoveOnBoard(1);
        updatePlayer();
    })
});