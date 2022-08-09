import React from 'react'

const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  };

const Content = ({ parts }) => {
    const total = parts.map((p)=> p.exercises).reduce((s, p) => s + p, 0);
    return (
    <>
        {parts.map(item => <Part key={item.id} item={item} />)}
        <strong>total of {total} exercises</strong>
    </>
)
}

const Part = (props) => {
return (
    <p>{props.item.name} {props.item.exercises}</p>
)
}

const Course = ({course}) => {
    return (
        <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
    )
}


export default Course;
