import React, {useState} from 'react';

/**
 * A square on a minesweeper board
 * @param props : props.label is the label of the square
 *                props.isRevealed is a boolean that determines whether or the square's label should be revealed
 *                props.xCoord is the x coordinate of the square in the grid
 *                props.yCoord is the y coordinate of the square in the grid
 *                
 */
let Square = (props: any) => {

    let isRevealed = props.isRevealed;
    let xCoord = props.xCoord;
    let yCoord = props.yCoord;

    // STATE:: whether or not this square has been flagged by the user
    let [isFlagged, setIsFlagged] = useState(false);

    // place a flag on the square when the user right clicks on it
    // if already flagged, then remove the flag on right click
    let flagSquare = (e: any) => {
        e.preventDefault();
        setIsFlagged(!isFlagged);
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
    if (isRevealed) {
        style = {
            background: "grey"
        };
    } else {
        style = {};
    }

    return (
        <button className="square" style={style} onClick={attemptToRevealSquare} onContextMenu={flagSquare}>{label}</button>
    )
}

export default Square;