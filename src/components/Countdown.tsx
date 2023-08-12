import "./styles.css";
import React from "react";
import { useCountdown } from "../hooks/useCountDown";
import DateTimeClock from "./DateTimeClock";

interface CountDownProps {
    targetDate: string,
    children: React.ReactNode
}

const CountDown: React.FC<CountDownProps> = ({targetDate, children}) => {

    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    const isExpired = (days + hours + minutes + seconds) <= 0
    return (
        <div className="App">
            {isExpired
                ? children :
            <Counter days={days} hours={hours} minutes={minutes} seconds={seconds}/>
            }
        </div>
    );
}

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

interface CounterProps {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}
const Counter: React.FC<CounterProps> = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a
                href="https://tapasadhikary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <DateTimeClock value={days} type={'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeClock value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeClock value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeClock value={seconds} type={'Seconds'} isDanger={false} />
            </a>
        </div>
    );
};


export default CountDown
