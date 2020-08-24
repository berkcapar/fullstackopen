
export const createAnectode = (data) => {
return{
  type: 'NEW_ANECTODE',
  data
}
}

export const giveVote = (id) => {
return {
  type: 'VOTE',
  data:{
    id
  }
}
}

export const initializeAnectodes = (data) =>{
  return {
    type: 'INIT_ANECTODES',
    data,
  
  }
}



//const getId = () => (100000 * Math.random()).toFixed(0)


//const asObject = (anecdote) => {
  //return {
    //content: anecdote,
    //id: getId(),
    //vote: 0
  //}
 //}


const reducer = (state = [], action) => {


  switch(action.type){
    case 'VOTE':
    const {id} = action.data
    const likedAnectode = state.find(n=>n.id === id)
    const changedAnecdote = {
      ...likedAnectode,
      votes: likedAnectode.votes + 1
    }
    return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote);
    case 'NEW_ANECTODE':
   const {data} = action
   return [...state,data]   
   case 'INIT_ANECTODES':
     return action.data
   default: 
   return state;
  }
   
}

export default reducer