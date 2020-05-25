import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => { 
  return ( 
  <h1>{props.course}</h1>
  )
}

const Part = (props)=> {
  return ( 
   <p>{props.chapter} {props.exercise}</p>
  )
}

const Content = (props) =>{
  return( 
    <div>
    <Part chapter = {props.chapter1} exercise={props.exercise1}/>
    <Part chapter= {props.chapter2} exercise={props.exercise2}/>
    <Part chapter = {props.chapter3} exercise={props.exercise3}/>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Number of exercises = {props.exercise} </p>
    </div>
  )
}

const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  } 
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
    <Header course ={course}/>
    <Content chapter1 = {part1.name} exercise1 = {part1.exercises} chapter2 = {part2.name} exercise2 = {part2.exercises} chapter3={part3.name} exercise3={part3.exercises} />
    <Total exercise = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))