// Default React imports
import React, {useState} from 'react';
import './App.css';

// Other imports
import Minefield from "./model/Minefield";
import Grid from './components/Grid';
import Timer from './components/Timer';
import NewGameForm from './components/NewGameForm';


function App() {

  // STATE: Stores the minefield for a game of minesweeper
  let [mineField, setMineField] = useState(new Minefield(9, 9, 10));

  // STATE: Whether or not the game is over
  let [isGameOver, setIsGameOver] = useState(false);

  // STATE: string representing the status of the game (win/lose)
  let [status, setStatus] = useState("");

  // STATE: the amount of seconds since the current game started
  let [elapsedTime, setElapsedTime] = useState(0);

  // update the timer
  let timer = setTimeout(() => {
    setElapsedTime(elapsedTime + 1);
  }, 1000);

  if (isGameOver) {
    clearTimeout(timer);
  }

  // Reveals the square at [xCoord, yCoord]
  let revealGridSquare = (xCoord: number, yCoord: number) => {
        
    // if the user clicked on a square with a mine, then it's game over
    if (mineField.field[yCoord][xCoord].label === "*") {
        setStatus("You lost");
        endGame();
    }

    // copy the minefield
    let newMineField: Minefield = new Minefield(mineField.height, mineField.width, mineField.numMines);
    newMineField.copyMineField(mineField);

    // update the minefield
    newMineField.revealSquare(xCoord, yCoord);

    // Check win condition
    if (newMineField.squaresRevealed === (newMineField.height * newMineField.width - newMineField.numMines)) {
        // console.log("Winner winner chicken dinner");
        setStatus("You won");
        endGame();
    }

    // update the state
    setMineField(newMineField);
  } 

  // Flags the square at [xCoord, yCoord]
  let flagGridSquare = (xCoord: number, yCoord: number) => {

    // copy the minefield
    let newMineField: Minefield = new Minefield(mineField.height, mineField.width, mineField.numMines);
    newMineField.copyMineField(mineField);

    // update the minefield
    newMineField.flagSquare(xCoord, yCoord);

    // update the state
    setMineField(newMineField);
  } 

  // Ends the game
  let endGame = () => {
    // console.log("Game over");
    setIsGameOver(true);
  }

  // Starts a new game according to user input
  let startNewGame = (newSettings: [number, number, number]) => {
    // console.log("starting new game...")
    setMineField(new Minefield(newSettings[1], newSettings[0], newSettings[2]));
    setElapsedTime(0);
    setIsGameOver(false);
  }

  return (
    <div className="App">
      <Timer secondsElapsed={elapsedTime}/>
      <Grid isDisabled={isGameOver} mineField={mineField} revealGridSquare={revealGridSquare}
            flagGridSquare={flagGridSquare} status={status}/>
      <NewGameForm updateGame={startNewGame}/>
    </div>
  );
}

export default App;
