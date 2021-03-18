// Default React imports
import React from 'react';
import './App.css';

// Other imports
import Minefield from "./model/Minefield";
import Grid from './components/Grid';

function App() {

  // test inputs
  // let testField: Minefield = new Minefield(3, 3, 1);
  // testField.generateField();
  // console.log(testField)
  let testField: Minefield = new Minefield(9, 9, 10);
  testField.generateField();

  return (
    <div className="App">
      <Grid minefield={testField}/>
    </div>
  );
}

export default App;
