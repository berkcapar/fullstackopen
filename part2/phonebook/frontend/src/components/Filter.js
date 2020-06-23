import React from 'react'

const Filter = ({newSearch, handleSearchChange})=>{
return (
    <input value={newSearch} onChange={handleSearchChange}/>
)
}

export default Filter