import React from 'react'

const Filter = ({handleInputChange,search}) =>{

    return(
        <div>
            <h2>Find Countries:</h2>
            <input onChange={handleInputChange} value={search} />
            </div>
    )
}

export default Filter