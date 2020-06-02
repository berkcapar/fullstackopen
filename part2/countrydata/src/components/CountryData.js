import React from 'react'

const CountryData = ({country})=>{
    return(
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages:</h3>
            <ul>
                {country.map(language => (<li>{language.name}</li>))}
            </ul>
            <img src={country.flag}/> 
        </div>
    )
}

export default CountryData