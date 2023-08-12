import React from 'react';

interface DateTimeClockProps {
    value: string | number,
    type: string,
    isDanger: boolean
}

const DateTimeClock:React.FC<DateTimeClockProps> = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown-danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

export default DateTimeClock;
