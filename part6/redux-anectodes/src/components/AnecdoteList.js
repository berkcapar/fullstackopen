import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {giveVote} from '../reducers/anecdoteReducer'
import {showNotification} from '../reducers/notificationReducer'


const AnecdoteList = () => {

    
    const anecdotes = useSelector(state => {
      console.log(state.anecdotes)
      const filter = state.filter.toLowerCase()
      return state.anecdotes.filter(a=>a.content.toLowerCase().includes(filter))
    })

    const dispatch = useDispatch()
    
    const vote = (anecdote) => {
      console.log('vote', anecdote)
        dispatch(giveVote(anecdote))
        dispatch(showNotification(`You voted for ${anecdote.content}`),5)       
    }
    return (
        <div> 
        {anecdotes.sort((a,b)=>b.votes-a.votes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>            
          )}
          </div>
    )
}

export default AnecdoteList



