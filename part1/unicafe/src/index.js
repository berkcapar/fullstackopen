import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/index'

const Statistic = ({text,value}) => {
return (
  <tr>
<td>{text}</td>
<td>{value}</td>
  </tr>
)
}

const Statistics = ({good,bad,neutral}) => { 

   const all =  good + bad + neutral
   const avg = all/3
   const positive = good/all

if (all===0){
  return('No Feedback Given')
}

return ( 
    <table> 
      <tbody>
   <Statistic text="Good" value ={good} />
   <Statistic text="Neutral" value ={neutral} />
   <Statistic text="Bad" value ={bad} />
   <Statistic text = "All" value = {all}/>
   <Statistic text = "Average" value = {avg}/>
   <Statistic text = "Positive" value = {positive}/>
   </tbody>
   </table>
   )
}

const App = (all,avg,positive) => {
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
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>          
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
