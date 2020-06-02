import React, { useState,useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/notes'

const App = () => {
  const [ persons, setPersons ] = useState([])
  
  useEffect(()=>{
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  },[])

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

personService
 .create(peopleObject)
 .then(returnedPeople =>{
   setPersons(persons.concat(returnedPeople))
   setNewSearch('')
 }) 


 const checkExistingName = persons.map(person => person.name)

 checkExistingName.includes(newName) ? window.alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(peopleObject)) && setNewName('') && setNewPhone('') 
}

const deletePeople = (person)=>{
  if(window.confirm(`Remove ${person.name}?`)){
    personService
    .extract(person.id)
    .then(()=>{
      setPersons(persons.filter(p => p.id !== person.id))
    })
  }
  
}


 const filteredSearch = newSearch === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))


const handleNameChange = (event) => {
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
      <h3>Search By Name: <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} /></h3>
      <PersonForm addPeople={addPeople} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      
    <ul >
    {filteredSearch.map((person,i) => <Person deletePeople={deletePeople} key={i} person = {person}/>)} 
    </ul>
    </div>
  )
}

export default App