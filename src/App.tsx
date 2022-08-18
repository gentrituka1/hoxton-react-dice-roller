import { useState } from 'react'
import './App.css'




function App() {

  const [die1, setDie1] = useState(0)
  const [die2, setDie2] = useState(0)
  const [status, setStatus] = useState('')

  function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1
    const die2 = Math.floor(Math.random() * 6) + 1
    setDie1(die1)
    setDie2(die2)
    let diceTotal = die1 + die2
    if (die1 === die2) {
      setStatus('You rolled a double! You get a free turn!!')
    } else {
      setStatus(`You rolled ${diceTotal}`)
    }
  }

  return (
    <div className="App">
        <div className='dice-div'>
          <div className='dice'>{die1}</div>
          <div className='dice'>{die2}</div>
        </div>
        <button className='roll-dice' onClick={rollDice}>Roll Dice</button>
        <h2>{status}</h2>
    </div>
  )
}

export default App
