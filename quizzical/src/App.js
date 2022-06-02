import React from 'react'
import './App.css';
import StartPage from './components/StartPage.js'
import GamePage from './components/GamePage.js'

export default function App() {
  const [displayStartPage, setDisplayStartPage] = React.useState(true)
  
  function handleClick() {
      setDisplayStartPage(false)
  }
  
  return (
    <div>
      {displayStartPage ? <StartPage handleClick={handleClick} /> : <GamePage />}
    </div>
  )
}