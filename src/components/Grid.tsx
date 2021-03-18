import React, {useState} from 'react'
import Square from './Square'
import Minefield from '../model/Minefield'

/**
 * props.minefield will contain an instance of Minefield
 */
let Grid = (props: any) => {
    
    let mineField: Array<Array<String>> = props.minefield.field;

    let gridOfSquares = mineField.map((row: Array<String>) => {
        return (
            <div>
                {
                    row.map((val: String) => {
                        return (
                            <Square val={val}/>
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