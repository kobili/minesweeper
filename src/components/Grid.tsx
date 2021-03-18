import React, {useState} from 'react'
import Square from './Square'
import Minefield from '../model/Minefield'

/**
 * props.minefield will contain an instance of Minefield
 * props.endGame is a function that will end the game
 * props.isDisabled is a boolean that disables the component
 */
let Grid = (props: any) => {

    // STATE: the minefield for this game of minesweeper
    let [mineField, setMineField] = useState(props.minefield);

    // Reveals the square at [xCoord, yCoord]
    let revealGridSquare = (xCoord: number, yCoord: number) => {
        
        // if the user clicked on a square with a mine, then it's game over
        if (mineField.field[yCoord][xCoord].label === "*") {
            props.endGame();
        }

        // copy the minefield
        let newMineField: Minefield = new Minefield(mineField.height, mineField.width, mineField.numMines);
        newMineField.copyMineField(mineField);

        // update the minefield
        newMineField.revealSquare(xCoord, yCoord);

        // Check win condition
        if (newMineField.squaresRevealed == (newMineField.height * newMineField.width - newMineField.numMines)) {
            console.log("Winner winner chicken dinner");
        }
        
        // update the state
        setMineField(newMineField);
    }

    let gridOfSquares = mineField.field.map((row: Array<any>) => {  
        return (
            <div className="grid-row">
                {
                    row.map((squareInfo: any) => {
                        return (
                            <Square label={squareInfo.label} isRevealed={squareInfo.isRevealed}
                                    xCoord={squareInfo.xCoord} yCoord={squareInfo.yCoord}
                                    revealSquare={revealGridSquare} isDisabled={props.isDisabled}/>
                        );
                    })
                }   
            </div>
        )
    })
    return (
        <div>
            {gridOfSquares}
        </div>
    )
}

export default Grid;