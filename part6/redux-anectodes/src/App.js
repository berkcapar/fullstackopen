import React from 'react'

import AnectodeForm from './components/AnectodeForm'
import AnectodeList from './components/AnectodeList'
import Notification from './components/Notification';

const App = () => {
  
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