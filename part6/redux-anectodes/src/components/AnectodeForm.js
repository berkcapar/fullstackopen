import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnectode } from '../reducers/anecdoteReducer'
import { ResetNotification } from '../reducers/notificationReducer'
import anectodeService from '../services/anecdotes'


const AnectodeForm = () => { 

    const dispatch = useDispatch()

    const addAnectode = async (event) => {    
        event.preventDefault()
        const content  = event.target.new.value
        event.target.new.value = '';
        const getId = () => (100000 * Math.random()).toFixed(0)
        const anectode = {
            content,
            votes:0,
            id: getId()
        }
        
        const data = await anectodeService.createNew(anectode)
        
        dispatch(createAnectode(data))
        setTimeout(()=>{
            dispatch(ResetNotification())
        },5000)
      
      }

      return (
          <div>
       <h2>create new</h2>
       <form onSubmit={addAnectode}>
        <div><input name="new" /></div>
        <button type="submit">create</button>
      </form>
          </div>
      )


}


export default AnectodeForm
