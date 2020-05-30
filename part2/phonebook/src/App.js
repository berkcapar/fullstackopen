import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

const addPeople = (event) => {
  event.preventDefault()
  const peopleObject = {
    name: newName,
    id: persons.length + 1
  }

 const checkExistingName = persons.map((person) => {
   return person.name 
 })

 {checkExistingName.includes(newName)? window.alert(`${newName} is already added to phonebook`): setPersons(persons.concat(peopleObject)) && setNewName('')  }
}
const handleInputChange = (event) =>{
  setNewName(event.target.value)
}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPeople}>
        <div>
          name: <input value={newName} onChange={handleInputChange}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    <ul>
     {persons.map((person,i) =>
     <Person key={i} person = {person}/>
     )}
    </ul>
    </div>
  )
}

export default App