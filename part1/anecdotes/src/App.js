import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const initvoted = new Array(anecdotes.length).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [votedCounts, setVotedCount] = useState(initvoted)

  function getRandomInt(max) {
    console.log('getRandomInt current index:', Math.floor(Math.random() * max))
    return Math.floor(Math.random() * max);
  }
  const setVotedCountFn = () => {
    let copy = [...votedCounts]
    copy[selected] = copy[selected] + 1
    console.log('setVotedCountFn copy after:', copy)
    setVotedCount(copy)
  }
  const getMostVotesIndex = () => {
    const maxVotes = Math.max(...votedCounts)
    const index = votedCounts.indexOf(maxVotes)
    console.log('getMostVotesIndex index:', index)
    return index > -1 ? index : 0
  }
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={setVotedCountFn}>vote</button>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>next anecdotes</button>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[getMostVotesIndex()]}</p>
    </div>
  )
}

export default App