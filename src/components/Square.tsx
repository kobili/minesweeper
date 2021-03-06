import React from 'react';

/**
 * A square on a minesweeper board
 * @param props : props.label is the label of the square
 *                props.isRevealed is a boolean that determines whether or the square's label should be revealed
 *                props.isFlagged is a boolean that determines if this square is flagged
 *                props.xCoord is the x coordinate of the square in the grid
 *                props.yCoord is the y coordinate of the square in the grid
 *                props.revealSquare is a function that is called when the user clicks on a square
 *                props.flagSquare is a function that is called when the user right clicks on a square
 *                props.isDisabled is a boolean that indicates if the component is disabled
 *                
 */
let Square = (props: any) => {

    let isRevealed = props.isRevealed;
    let isFlagged = props.isFlagged;
    let xCoord = props.xCoord;
    let yCoord = props.yCoord;


    // place a flag on the square when the user right clicks on it
    // if already flagged, then remove the flag on right click
    let flagSquare = (e: any) => {
        e.preventDefault();
        props.flagSquare(xCoord, yCoord);
    }

    // will try to reveal the square
    // if the square is flagged then nothing can happen
    let attemptToRevealSquare = () => {
        if (!isFlagged) {
            props.revealSquare(xCoord, yCoord);
        }
    }

    let label: String;
    if (isRevealed) {
        label = props.label;
    } else if (isFlagged) {
        label = "🇨🇦";
    }else {
        label = "";
    }

    // update the background color of squares which have been revealed
    let style;
    if (isRevealed && props.label === "*") {    // paint the square red if it contains a mine
        style = {
            background: "red"
        }
    } else if (isRevealed) {
        style = {
            background: "grey"
        };
    } else {
        style = {};
    }

    return (
        <button disabled={props.isDisabled} className="square" 
                style={style} onClick={attemptToRevealSquare} onContextMenu={flagSquare}>
            {label}
        </button>
    )
}

export default Square;