import React, { useState } from 'react'

const Statistic = ({text, value}) => (
  <div>
    <td>{text}</td>
    <td>{value}</td>
  </div>
)

const Statistics = ({stats}) => {
  const {good, neutral, bad} = stats
  const total = good + neutral + bad

  if (total === 0) return <div>No feedback given</div>
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={bad+good+neutral}/>
        <Statistic text="avg" value={bad+good+neutral/3}/>
      </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
        
      <Statistics stats={{good, neutral, bad}}/>
    </div>
    
  )
}

export default App