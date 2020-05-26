import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/index'


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


 
const handleGoodClick = () => setGood(good + 1)
const handleNeutralClick = () => setNeutral (neutral + 1)
const handleBadClick = () => setBad (bad+1)


  return (
    <div>
      <Header/>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h2>Stats:</h2>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All:{good + neutral + bad}</p>
      <p>Avg:{(good + neutral + bad)/3}</p>
      <p>Positive:{(good)/(good + neutral + bad)/3}</p>            
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
