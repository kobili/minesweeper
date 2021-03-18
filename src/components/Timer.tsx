import React, {useState} from 'react'

/**
 * 
 * @param props : props.isDisabled determines if the timer should be stopped
 * @returns 
 */
let Timer = (props: any) => {

    let [time, setTime] = useState(0);

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let intervalVar = setInterval(() => {
        setTime(time++);
    }, 1000);

    if (props.isDisabled) {
        clearInterval(intervalVar);
    }

    return (
        <div>
            Time: {minutes}:{seconds}
        </div>
    )
}

export default Timer;