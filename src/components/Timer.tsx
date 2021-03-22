import React, {useState, useEffect} from 'react'

/**
 * 
 * @param props : props.isDisabled determines if the timer should be stopped
 * @returns 
 */
let Timer = (props: any) => {

    let [elapsedTime, setElapsedTime] = useState(0);

    let minutes: number = Math.floor(elapsedTime / 60);
    let seconds: number = elapsedTime % 60;

    let minutesDisplay: string = minutes.toString();
    if (minutesDisplay.length === 1) {
        minutesDisplay = "0" + minutesDisplay;
    }

    let secondsDisplay: string = seconds.toString();
    if (secondsDisplay.length === 1) {
        secondsDisplay = "0" + secondsDisplay;
    }

    let timer = setTimeout(() => {
        setElapsedTime(elapsedTime + 1);
    }, 1000);

    if (props.isDisabled) {
        clearTimeout(timer);
    }


    return (
        <div>
            Time: {minutesDisplay}:{secondsDisplay}
        </div>
    )
}

export default Timer;