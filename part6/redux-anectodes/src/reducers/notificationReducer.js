

export const ResetNotification = () =>({
    type: 'RESET',
    data: {
        id: null
    }
})


const reducer = (state = null, { type, data }) => {
    switch (type) {
        case 'RESET':
        return null
      case 'VOTE':
        return data.id;
      case 'NEW_ANECDOTE':
        return data.id;
      default:
        return state;
    }
  };
  
  export default reducer;
