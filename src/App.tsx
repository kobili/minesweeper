// Default React imports
import React, {useState} from 'react';
import './App.css';

// Other imports
import Minefield from "./model/Minefield";
import Grid from './components/Grid';
import Timer from './components/Timer';

function App() {

  // STATE: Whether or not the game is over
  let [isGameOver, setIsGameOver] = useState(false);

  let endGame = () => {
    console.log("Game over");
    setIsGameOver(true);
  }

  // let testField: Minefield = new Minefield(9, 9, 10);
  let testField: Minefield = new Minefield(3, 3, 1);
  testField.generateField();

  return (
    <div className="App">
      <Timer isDisabled={isGameOver}/>
      <Grid isDisabled={isGameOver} minefield={testField} endGame={endGame}/>
    </div>
  );
}

export default App;
