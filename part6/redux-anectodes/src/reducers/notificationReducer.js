const notificationReducer = (state= null, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type){
        case 'NOTIFICATION':
            return action.message
            default:
                return state
    }
}

export const showNotification = (message,second) => {
    return dispatch => {
        dispatch({
            type: 'NOTIFICATION',
            message  
        })
        setTimeout(()=>{
        dispatch({
            type: 'NOTIFICATION',
            message: null
        })
        },second*1000)
    }      
}


export default notificationReducer