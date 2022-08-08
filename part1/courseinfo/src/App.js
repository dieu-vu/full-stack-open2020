import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
};

const Content = ({parts}) => {
  return (
    <>
      {parts.map(item => <Part item={item} />)}
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.item.name} {props.item.exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

export default App