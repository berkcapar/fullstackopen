import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  const handleRandomAnectode = () => {
   setSelected([Math.floor(Math.random()*anecdotes.length)])
  }
  const handleVoteAnectode = () =>{

    const votesmemory = [...votes]
    votesmemory[selected]+=1
    setVotes(votesmemory)
  }
  return (
    <div>
      <h1>Daily Anectode</h1>
      <p>{anecdotes[selected]}</p>
      <p>This anectode has {votes[selected]} votes.</p>
      <Button handleClick={handleRandomAnectode} text = "Next Anectode"/>
      <Button handleClick={handleVoteAnectode} text ="Please Vote!" />
      <h1>Anectode with most votes has {votes[votes.indexOf(Math.max(...votes))]} votes</h1>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)
