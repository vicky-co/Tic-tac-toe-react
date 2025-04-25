import PlayerListingAreaComponent from '../PlayerList/PlayerListingAreaComponent.jsx'
import GameBoard from '../GameBoard/GameBoard.jsx'
import Log from './Log.jsx';
import GameOver from './GameOver.jsx';
import {WINNING_COMBINATIONS} from '../../assets/winning-combinations.js'
import { useState } from 'react';

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const PLAYERS = {
    'X' : 'Player 1',
    'O' : 'Player 2'
} 

function setCurrentSymbol(turns){
    console.log(turns);
    let selectedSymbol = 'X';

    if(turns.length >0 && turns[0].player == 'X' ){
        selectedSymbol = 'O';
    }
    return selectedSymbol;
}

function checkWinner(gameBoard, players) {
    let winner;
  
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];
  
      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = players[firstSquareSymbol];
      }
    }
  
    return winner;
  }
function setGameBoard(turns){
    let gameBoard = [...initialBoard.map((array) => [...array])];

    for (const turn of turns) {
      const { square, player } = turn;
      const { row, col } = square;
  
      gameBoard[row][col] = player;
    }
  
    return gameBoard;
}

function GameContainerComponent(){
    const [player, setPlayers] = useState({...PLAYERS});
    const [turns, setTurn] = useState([]);

    const gameBoard = setGameBoard(turns);
    const currentPlayerSymbol = setCurrentSymbol(turns);
    const winner = checkWinner(gameBoard, player);
    const isDraw = turns.length == 9 && !winner;

    function updateBoard(rowIndex, colIndex){
        setTurn((prevTurn) => {
            const currentPlayer = setCurrentSymbol(prevTurn);
            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
                ...prevTurn,
              ];
        
              return updatedTurns;
        });
    }

    function resetBoard(){
        setTurn([]);
    }

    function updatePlayer(players){
        setPlayers( {...players} );
    }

    return (
        <>
            <div id="game-container">
                <PlayerListingAreaComponent players={player} updatedPlayers={updatePlayer} activePlayerLogo={currentPlayerSymbol}></PlayerListingAreaComponent>
                <GameBoard handleCellClick={updateBoard} board={gameBoard} />
                {(winner || isDraw) && <GameOver winner={winner} onRestart={resetBoard} />}
            </div>
            <div id='reset-container'>
              <button onClick={resetBoard} className='reset-board'>Reset Board</button>
           </div>
            <Log turns={turns} players={player} />
        </>
    );
}

export default GameContainerComponent;