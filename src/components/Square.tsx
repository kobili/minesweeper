import React, {useState} from 'react';

/**
 * A square on a minesweeper board
 * @param props : props.val is the label of the square
 */
let Square = (props: any) => {

    // STATE: whether or not this square's label is hidden
    let [isHidden, setIsHidden] = useState(false);

    // when the user clicks on the square, the label is revealed
    let revealLabel = () => {
        setIsHidden(true);
    }

    let label: String;
    if (isHidden) {
        label = props.val;
    } else {
        label = "";
    }

    return (
        <button className="square" onClick={revealLabel}>{label}</button>
    )
}

export default Square;