import React from 'react'

const ActiveUser = ({user,handleLogout}) => {
    return (
        <div> 
        <h2>{user.name} logged in</h2>
        <button type = 'button' onClick={handleLogout}>Log Out!</button>
        
        </div>
        
        )
}

export default ActiveUser