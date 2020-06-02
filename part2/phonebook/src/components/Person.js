import React from 'react'

const Person = ({person,deletePeople})=>{

    return (
        <div>
        <li>{person.name} {person.number}
        <button onClick={() => deletePeople(person)}>Delete</button>
        </li> 
        </div>
       
    )
}

export default Person