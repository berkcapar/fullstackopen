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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
    <Header course ={course}/>
    <Content chapter1 = {part1} exercise1 = {exercises1} chapter2 = {part2} exercise2 = {exercises2} chapter3={part3} exercise3={exercises3} />
    <Total exercise = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))