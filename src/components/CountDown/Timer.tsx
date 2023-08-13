import React from 'react'
import style from './Countdown.module.scss'
import clsx from 'clsx'

interface CounterProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface DateTimeClockProps {
  value: string | number
  type: string
  isDanger: boolean
}
const Timer: React.FC<CounterProps> = ({ days, hours, minutes, seconds }) => {
  return (
        <div className={style.timer}>
            <div className={style.container}>
                <TimerElement value={days} type={'Дні'} isDanger={days <= 3}/>
                <p>:</p>
                <TimerElement value={hours} type={'Годин'} isDanger={false}/>
                <p>:</p>
                <TimerElement value={minutes} type={'Хвилин'} isDanger={false}/>
                <p>:</p>
                <TimerElement value={seconds} type={'Секунд'} isDanger={false}/>
            </div>
        </div>
  )
}

const TimerElement: React.FC<DateTimeClockProps> = ({ value, type, isDanger }) => {
  return (
        <div className={clsx(style.dateTimeClock, isDanger && style.danger)}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
  )
}

export default Timer
