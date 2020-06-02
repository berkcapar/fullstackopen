import React from 'react'
import CountryData from './CountryData'

const CountryList = ({filteredSearch,search}) => {

    
if(filteredSearch.length === 0){
    return <div>Make a search to find country!</div>
}

if(filteredSearch.length >=10){
    return <div>Specify your search!</div>
}

if(filteredSearch.length >1){
   let filterednames = filteredSearch.map(country=>country.name)
   return {filterednames}
}

else{
   return(
       <CountryData country = {filteredSearch[0]}/>
   )
}

}


export default CountryList
