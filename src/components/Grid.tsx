import React from 'react'
import Square from './Square'

/**
 * props.mineField will contain an instance of a minesweeper field
 * props.isDisabled is a boolean that disables the component
 * props.revealGridSquare is a function that is called when the user clicks on a square
 * props.status is text that is displayed when the game is either won or loss
 */
let Grid = (props: any) => {

    let gridOfSquares = props.mineField.field.map((row: Array<any>) => {  
        return (
            <div className="grid-row">
                {
                    row.map((squareInfo: any) => {
                        return (
                            <Square label={squareInfo.label} isRevealed={squareInfo.isRevealed}
                                    xCoord={squareInfo.xCoord} yCoord={squareInfo.yCoord}
                                    revealSquare={props.revealGridSquare} isDisabled={props.isDisabled}/>
                        );
                    })
                }   
            </div>
        )
    })
    return (
        <div>
            {gridOfSquares}
            <p>{props.isDisabled ? props.status : ""}</p>
        </div>
    )
}

export default Grid;