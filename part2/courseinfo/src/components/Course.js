import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
    
  )
}

const Total = ({parts}) => {
  const sum = parts.reduce((total,part)=>total + part.exercises,0);

    return <p>Total of {sum} exercises</p>
};

const Part = ({course}) => {
  return (
    <p>
      {course.name} {course.exercises}
    </p>    
  )
}

const Content = ({ parts }) => (
    parts.map((part)=>
    <Part key = {part.id} name={part.name} exercises = {part.exercises} />
    )
)
  

const Course= ({course}) => {
   return (
    <div>
      <Header name = {course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course