import React from 'react'

/**
 * 
 * @param props : props.secondsElapsed is the number of seconds since the game started
 *                
 */
let Timer = (props: any) => {

    let minutes: number = Math.floor(props.secondsElapsed / 60);
    let seconds: number = props.secondsElapsed % 60;

    let minutesDisplay: string = minutes.toString();
    if (minutesDisplay.length === 1) {
        minutesDisplay = "0" + minutesDisplay;
    }

    let secondsDisplay: string = seconds.toString();
    if (secondsDisplay.length === 1) {
        secondsDisplay = "0" + secondsDisplay;
    }

    return (
        <div>
            Time: {minutesDisplay}:{secondsDisplay}
        </div>
    )
}

export default Timer;