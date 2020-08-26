import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';


let CreateNew = ({anecdotes, setAnecdotes, history, setNotification}) => {

    const [anecdote, setAnecdote] = useState({ 
        id: 0,
        author: '',
        content: '',
        info:''
    })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      
        anecdote.id = (Math.random() * 10000).toFixed(0)
        setAnecdotes(anecdotes.concat(anecdote))
        setNotification(`New anectode ${anecdote.content} created`)
        setTimeout(() => setNotification(''), 10000);
        history.push('/');
      
      
          
    }
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' value={anecdote.content} onChange={({target}) => setAnecdote({...anecdote, content: target.value})} />
          </div>
          <div>
            author
            <input name='author' value={anecdote.author} onChange={({target}) => setAnecdote({...anecdote, author: target.value})} />
          </div>
          <div>
            url for more info
            <input name='info' value={anecdote.info} onChange={({target}) => setAnecdote({...anecdote, info: target.value})} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  
  }
  CreateNew = withRouter(CreateNew);
  export default CreateNew;