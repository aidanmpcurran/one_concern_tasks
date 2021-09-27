import React, { useState } from 'react'

const Statistic = ({text, value}) => (
  <div>

    <td>{text}</td>
    <td>{value}</td>
  </div>
)

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
      <Statistic text = "Good:" value = {good}/>
      <div>
      <Statistic text = "Bad:" value = {bad}/>
      </div>
      <div>
      <Statistic text = "Neutral:" value = {neutral}/>
      </div>
    
    </div>
  )
}

export default App