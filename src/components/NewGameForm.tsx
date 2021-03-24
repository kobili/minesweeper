import React, { useState } from 'react';

/**
 * @param props : props.updateGame is a function that sets the state in the game
 * @returns 
 */
let NewGameForm = (props: any) => {

    // // Difficulty selections - gives specific height, width and mine amount
    // let BEGINNER: [number, number, number] = [9, 9, 10];
    // let INTERMEDIATE: [number, number, number] = [16, 16, 40];
    // let EXPERT: [number, number, number] = [16, 30, 99];

    // STATE: Variables which store the various input parameters
    let [numHorizontal, setNumHorizontal] = useState(9);
    let [numVertical, setNumVertical] = useState(9);
    let [numMines, setNumMines] = useState(10);

    // the following functions are called when one of the inputs changes
    let updateHorizontal = (e : React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setNumHorizontal(parseInt(e.target.value));
    }
    let updateVertical = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNumVertical(parseInt(e.target.value));
    }
    let updateNumMines = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNumMines(parseInt(e.target.value));
    }

    let startNewGame = (e : any) => {
        e.preventDefault();
        // console.log(`${numHorizontal}, ${numVertical}, ${numMines}`)
        let newSettings = [numHorizontal, numVertical, numMines];
        props.updateGame(newSettings)
    }
    
    return (
        <form>
            <label htmlFor="horizontal">Horizontal Squares: </label>
            <input id="horizontal" onChange={updateHorizontal} defaultValue={numHorizontal}></input>
            <label htmlFor="vertical">Vertical Squares: </label>
            <input id="vertical" onChange={updateVertical} defaultValue={numVertical}></input>
            <label htmlFor="num-mines">Number of Mines: </label>
            <input id="num-mines" onChange={updateNumMines} defaultValue={numMines}></input>
            <br></br>
            <button onClick={startNewGame}>New Game</button>
        </form>
    )
}

export default NewGameForm;