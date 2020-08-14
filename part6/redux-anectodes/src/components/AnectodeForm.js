import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnectode } from '../reducers/anecdoteReducer'


const AnectodeForm = () => { 

    const dispatch = useDispatch()

    const addAnectode = (event) => {    
        event.preventDefault()
        const content  = event.target.new.value
        dispatch(createAnectode(content))
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
