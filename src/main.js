var GameBoardPresenter = require('./presenter/GameBoardPresenter');
var PlayerInfo = require('./model/PlayerInfo');

let playerInfo = new PlayerInfo();
let gameBoardPresenter = new GameBoardPresenter(playerInfo);

function updatePlayer(){
    document.getElementById('currentPlayer').innerHTML = playerInfo.currentPlayer;

}
updatePlayer();

document.querySelectorAll('button').forEach((position) => {
    position.addEventListener('click', function (event) {
        gameBoardPresenter.recordPlayerMoveOnBoard(1);
        updatePlayer();
    })
});