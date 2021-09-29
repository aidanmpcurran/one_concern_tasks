import React, { useState } from 'react'

const Button = ({ handleClick, text }) => { //copied from earlier 
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [chosen, setChosen] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))



  const handleVoteClick = () => {
    const vote = [...votes]
    vote[chosen] += 1
    setVotes(vote)
  }

  const handleNextClick = () => {
    const Next = Math.floor(Math.random() * anecdotes.length)
    setChosen(Next)
  }

  const mostVotes = () => {
    let max = 0
    let indexMax = 0
    votes.forEach((item, index) => { //standard max looping function
      if (item > max) {
        max = item
        indexMax = index
      }
    })
    return indexMax
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[chosen]}</div>
      <div>has {votes[chosen]} votes</div>
      <Button handleClick={handleVoteClick} text="Vote" />

      <Button handleClick={handleNextClick} text="Next" />
      
      <h1>Anecdote with most votes</h1>

      {votes[mostVotes()] == 0?
        <>
        no votes
        </>
        :
        <>
          <p>has {votes[mostVotes()]} votes</p>
        </>
      }
    </>
  )
}

export default App