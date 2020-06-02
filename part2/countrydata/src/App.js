import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

const App = () => {
  
const [countries, setCountries] = useState([])
const [search, setSearch] = useState('')

    useEffect((search)=>{
      axios
     .get('https://restcountries.eu/rest/v2/all')
     .then(response=> {
      setCountries(response.data)
     })
     .catch(error =>{
       console.log(error)
     })
   },[])


const handleInputChange = (event) =>{
  setSearch(event.target.value)
}

const filteredSearch = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
 
  return (
    <div>
    <Filter search={search} handleInputChange={handleInputChange} />
     <CountryList countries ={countries}/>
    </div>
   
  )
}

export default App;
