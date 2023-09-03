import React from 'react'
import './App.css'
import CountDown from './components/CountDown/Countdown'

const UPDATE_DEADLINE = 'September 2, 2023'
const App: React.FC = () => {
  return (
        <div className="App">
            <header className="App-header">
                <h1>Завершуємо розробку 4 вересня, маємо вже усі матеріали!</h1>
                <CountDown targetDate={UPDATE_DEADLINE}>
                    <div>
                        <span>Запуск сьогодні!!!</span></div>
                </CountDown>
            </header>
        </div>
  )
}

export default App
