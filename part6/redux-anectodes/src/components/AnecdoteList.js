import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {giveVote} from '../reducers/anecdoteReducer'
import {showNotification,hideNotification} from '../reducers/notificationReducer'


const AnecdoteList = () => {

    
    const anecdotes = useSelector(state => {
      console.log(state.anecdotes)
      const filter = state.filter.toLowerCase()
      return state.anecdotes.filter(a=>a.content.toLowerCase().includes(filter))
    })

    
  
    const dispatch = useDispatch()
    
  
    const vote = (id) => {
      console.log('vote', id)
        dispatch(giveVote(id))
        const anecdote = anecdotes.find(a=>a.id === id)
        dispatch(showNotification(`You voted for ${anecdote.content}`))
        setTimeout(()=>{
          dispatch(hideNotification())
        },5000)
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
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>            
          )}
          </div>
    )
}

export default AnecdoteList



