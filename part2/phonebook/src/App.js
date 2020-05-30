import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName ] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

const addPeople = (event) => {
  event.preventDefault()
  const peopleObject = {
    name: newName,
   number: newPhone,
    id: persons.length + 1
  }

 const checkExistingName = persons.map(person => person.name)

 checkExistingName.includes(newName) ? window.alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(peopleObject)) && setNewName('') && setNewPhone('') 
}

 const filteredSearch = newSearch === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))


const handleNameChange = (event) =>{
  setNewName(event.target.value)
}

const handlePhoneChange = (event) =>{
  setNewPhone(event.target.value)
}

const handleSearchChange = (event) => {
  setNewSearch(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search By Name: <input value={newSearch} onChange={handleSearchChange}/></h3>
      
      <form onSubmit={addPeople}>
        <div>
          <h3>Add New People</h3>
          Name: <input value={newName} onChange={handleNameChange}/>
          Number: <input value={newPhone} onChange={handlePhoneChange} />
          <button type="submit">Add</button>
          </div>
      </form>
      <h2>Numbers</h2>
    <ul>
     {filteredSearch.map((person,i) => <Person key={i} person = {person}/>)}
    </ul>
    </div>
  )
}

export default App