import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import anecdoteService from './services/anecdotes'
import AnectodeForm from './components/AnectodeForm'
import AnectodeList from './components/AnectodeList'
import Notification from './components/Notification';
import {initializeAnectodes} from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{

    anecdoteService
    .getAll().then(anecdotes=>dispatch(initializeAnectodes(anecdotes)))

  },[dispatch])

  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
     <AnectodeList/>
     <AnectodeForm/>
    </div>
  )
}

export default App