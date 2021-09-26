import React from 'react'

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
        <ContentText part={part1.name} exercises={part1.exercises} number = {1}/>
        <ContentText part={part2.name} exercises={part2.exercises}  number = {2}/>
        <ContentText part={part3.name} exercises={part3.exercises}  number = {3}/>
      </div>
    )
  }

  return (
    <div>
      <Header course = {course}/>
      <p>
      <Total exercises={part1.exercises+part2.exercises+part3.exercises}/>
      </p>
      <p>
      <Content/>
      </p>
    </div>
  )
}

export default App