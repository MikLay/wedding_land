import React from 'react'
import { useCountdown } from '../../hooks/useCountDown'
import Timer from './Timer'

interface CountDownProps {
  targetDate: string
  children: React.ReactNode
}

const CountDown: React.FC<CountDownProps> = ({ targetDate, children }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  const isReady = (days + hours + minutes + seconds) <= 0
  return (
        <div className="App">
            {isReady
              ? children
              : <Timer days={days} hours={hours} minutes={minutes} seconds={seconds}/>
            }
        </div>
  )
}

export default CountDown
