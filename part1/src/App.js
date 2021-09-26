import React from 'react'

const Header = (props) => {
  return

}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Contenttext = [
    {part1: 'Fundamentals of React', exercises1:10},
    {part2: 'Using props to pass data',exercises2: 7},
    {part3: 'State of a component', exercises3: 14}
  ]

  const Totals = {exercises1, exercises2, exercises3}

  const Content = (TextforContents) => {
    return (
        <div>
          <p>{TextforContents}</p>

        </div>

    )
  }

  const Total = () =>{
    exercises1
    exercises2
    exercises3
  }

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }


  return (
    <div>
      <Header course = {course}/>
      <Content partArray = {Contenttext}/>
      <Total ... />
    </div>
  )
}

export default App