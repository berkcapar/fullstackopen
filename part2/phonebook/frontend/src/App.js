import React, { useState,useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification/Notification'

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
  const [message, setMessage] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handlePhoneChange = (event) =>{
    setNewPhone(event.target.value)
  }
  
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }
  

const addPeople = (event) => {
  event.preventDefault()
  const peopleObject = {
    name: newName,
    number: newPhone,
    id: persons.length + 1   
  }

const checkExistingName = persons.map(person => person.name)

if(checkExistingName.includes(newName)){
  window.alert(`${newName} is already added to phonebook`); 
} else {
  personService
 .create(peopleObject).then(returnedPeople => {
   setPersons(persons.concat(returnedPeople));
   setNewName('');
   setNewPhone('');
   setMessage(`Added ${newName}`) 
  setTimeout(() => {
    setMessage(null)
  }, 5000)
 }); 
}
};

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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