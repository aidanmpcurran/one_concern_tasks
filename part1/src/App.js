import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  const Total = (props) => {
    return(
      <p>Total exercises {props.exercises}</p>
    )
  }

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  const ContentText = (props) => {
    return(
      <p>
        Part {props.number}:{props.part} {props.exercises}
      </p>
    )
  }
  const Content = () => {
    return(
      <div>
        <ContentText part={parts[0].name} exercises={parts[0].exercises} number = {1}/>
        <ContentText part={parts[1].name} exercises={parts[1].exercises}  number = {2}/>
        <ContentText part={parts[2].name} exercises={parts[2].exercises}  number = {3}/>
      </div>
    )
  }

  return (
    <div>
      <Header course = {course}/>
      <p>
      <Total exercises={parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
      </p>
      <p>
      <Content/>
      </p>
    </div>
  )
}

export default App