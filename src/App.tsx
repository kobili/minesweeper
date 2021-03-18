// Default React imports
import React from 'react';
import './App.css';

// Other imports
import Minefield from "./model/Minefield";
import Square from "./components/Square";
import Grid from './components/Grid';

function App() {

  // test inputs
  let testField: Minefield = new Minefield(3, 3, 1);
  let grid: Array< Array<String> > = [["", "1", "1"], ["", "1", "*"], ["", "1", "1"]]; 
  testField.field = grid;

  return (
    <div className="App">
      <Grid minefield={testField}/>
    </div>
  );
}

export default App;
