import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {giveVote} from '../reducers/anecdoteReducer'

const AnectodeList = () => {

  const anecdotes = useSelector(state => [...state].sort((first,second) => second.votes - first.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
   dispatch(giveVote(id))   
   console.log('vote', id)
 }

 return (
    <div>
     
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
    
}

export default AnectodeList