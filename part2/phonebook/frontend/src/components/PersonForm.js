import React from 'react'

const PersonForm = ({newName, newPhone,handleNameChange, handlePhoneChange, addPeople })=>{
    return (
        <form onSubmit={addPeople}>
        <div>
          <h3>Add New People</h3>
          Name: <input value={newName} onChange={handleNameChange}/>
          Number: <input value={newPhone} onChange={handlePhoneChange} />
          <button type="submit">Add</button>
          </div>
      </form>

    )
}

export default PersonForm