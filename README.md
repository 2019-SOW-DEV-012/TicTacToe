# Tic-Tac-Toe
KATA - Javascript.

## Technologies Used
- [Javascript](https://www.javascript.com/)
- [jQuery](http://jquery.com/)
- [Jasmine](http://jasmine.github.io/)

## Requirements
- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Design Pattern 
- Model–view–presenter

## How to run the app
- Clone this repository
- Install dependencies with : `$ npm install`
- To run the project: `$ npm run dev`
- Visit:[http://localhost:8080](http://localhost:8080)
- To run unit tests: `$ npm run test`
- To build prod version: `$ npm run build-prod`


## Game Rules

-  X always goes first
-  Players cannot play on a played tiles
-  Players alternate placing X’s and O’s on the board until either
     - [x] One player has three in a row, horizontally, vertically or diagonally
     - [X] All nine squares are filled
-  If a player is able to draw three X’s or three O’s in a row, that player wins
-  If all nine tiles are filled and neither player has three in a row, the game is a draw
-  Games ends if player has 3 symbols in a row, or the board is full
-  No more allowed play on tiles

### Game Board
The game "board" is comprised of 9 "Tiles" in a 3 x 3 grid.

<table>
    <tr>
        <td>0</td>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td>3</td>
        <td>4</td>
        <td>5</td>
    </tr>
    <tr>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
</table>
