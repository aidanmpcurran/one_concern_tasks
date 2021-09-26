import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


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
        <ContentText part={part1} exercises={exercises1} number = {1}/>
        <ContentText part={part2} exercises={exercises2}  number = {2}/>
        <ContentText part={part3} exercises={exercises3}  number = {3}/>
      </div>
    )
  }

  return (
    <div>
      <Header course = {course}/>
      <p>
      <Total exercises={exercises1+exercises2+exercises3}/>
      </p>
      <p>
      <Content/>
      </p>
    </div>
  )
}

export default App