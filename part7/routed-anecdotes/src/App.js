import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,Route,Link, useParams, useHistory
} from "react-router-dom"

import Menu from './components/Menu'
import Anecdote from './components/Anectode'
import AnecdoteList from './components/Anectodelist'
import About from './components/About'
import Footer from './components/Footer'
import Notification from './components/Notification'
import CreateNew from './components/CreateNew'



const App = (props) => {
  const [anecdotes, setAnecdotes] = useState(props.anecdotes);

  const [notification, setNotification] = useState('')
  const history = useHistory()



  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div> 
      <h1>Software anecdotes</h1>
    <Router> 
    <Menu/>
    <Notification notification={notification} />
    <Switch>
      <Route path = "/create">
      <CreateNew anecdotes={anecdotes} setAnecdotes={setAnecdotes} setNotification={setNotification}  />
      </Route>
      <Route path = "/about">
        <About/>
      </Route>
      <Route path = "/anecdotes/:id">
        <Anecdote anecdotes={anecdotes}/>
      </Route>
      <Route path = "/">
      <AnecdoteList anecdotes={anecdotes} />
      </Route>
    </Switch>
    </Router>
    <Footer />  
    </div>
  )
}

export default App;
