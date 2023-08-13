import React from 'react'
import './App.css'
import CountDown from './components/CountDown/Countdown'

const UPDATE_DEADLINE = 'August 18, 2023'
const App: React.FC = () => {
  return (
        <div className="App">
            <header className="App-header">
                <h1>Інформація стане доступною через</h1>
                <CountDown targetDate={UPDATE_DEADLINE}>
                    <div>
                        <span>Ready today</span></div>
                </CountDown>
            </header>
        </div>
  )
}

export default App
