import React from 'react'


const Total = (props) => (
  <p>Total:{props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
)

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const ContentText = (props) => {
  return(
    <p>
      Part {props.number}:{props.part} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  return(
    <div>
      <ContentText part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} number = {1}/>
      <ContentText part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}  number = {2}/>
      <ContentText part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}  number = {3}/>
    </div>
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
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App