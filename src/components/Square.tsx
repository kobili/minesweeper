import React, {useState} from 'react';

/**
 * A square on a minesweeper board
 * @param props : props.val is the label of the square
 */
let Square = (props: any) => {

    // STATE: whether or not this square's label is hidden
    let [isHidden, setIsHidden] = useState(false);

    // STATE:: whether or not this square has been flagged by the user
    let [isFlagged, setIsFlagged] = useState(false);

    // when the user clicks on the square, the label is revealed
    let revealLabel = (e: any) => {
        if (!isFlagged) {
            setIsHidden(true);
        }
    }

    // place a flag on the square when the user right clicks on it
    // if already flagged, then remove the flag on right click
    let flagSquare = (e: any) => {
        e.preventDefault();
        setIsFlagged(!isFlagged);
    }

    let label: String;
    if (isHidden) {
        label = props.val;
    } else if (isFlagged) {
        label = "🇨🇦";
    }else {
        label = "";
    }

    return (
        <button className="square" onClick={revealLabel} onContextMenu={flagSquare}>{label}</button>
    )
}

export default Square;