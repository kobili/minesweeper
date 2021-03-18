// Default React imports
import React from 'react';
import './App.css';

// Other imports
import Minefield from "./model/Minefield";
import Square from "./components/Square";

function App() {

  // test inputs
  let testField: Minefield = new Minefield(3, 3, 1);
  let grid: Array< Array<String> > = [["0", "1", "1"], ["0", "1", "*"], ["0", "1", "1"]]; 
  testField.field = grid;

  return (
    <div className="App">
      <Square val={"*"}/>
    </div>
  );
}

export default App;
