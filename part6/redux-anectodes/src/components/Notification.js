import React from 'react'
import { useSelector } from 'react-redux';

const Notification = () => {

  const notification = useSelector((state) =>
    state.anecdotes.find((anecdote) => anecdote.id === state.notice),
  );


  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
    
    if (notification) {
      return  <div style={style}>You voted {notification.content}</div>;
    }
    return null;
  };
   
  


export default Notification