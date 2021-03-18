import React, {useState} from 'react'
import Square from './Square'
import Minefield from '../model/Minefield'

/**
 * props.minefield will contain an instance of Minefield
 */
let Grid = (props: any) => {

    let [mineField, setMineField] = useState(props.minefield);

    // Reveals the square at [xCoord, yCoord]
    let revealGridSquare = (xCoord: number, yCoord: number) => {

        // copy the minefield
        let newMineField: Minefield = new Minefield(mineField.height, mineField.width, mineField.numMines);
        newMineField.field = mineField.field;

        // update the minefield
        newMineField.revealSquare(xCoord, yCoord);

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
                                    revealSquare={revealGridSquare}/>
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