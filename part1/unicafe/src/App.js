import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const avg = total === 0 ? total :(good - bad)/total
  const positive = total === 0 ? total : good/total * 100
  return (
    <>
    <div>
      <h1>give feedback</h1>
      <div className='feedback-btns'>
        <FeedbackButton setFn={() => setGood(good + 1)} text='good'/>
        <FeedbackButton setFn={() => setNeutral(neutral + 1)} text='neutral'/>
        <FeedbackButton setFn={() => setBad(bad + 1)} text='bad'/>
      </div>
    </div>
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {avg}</p>
      <p>positive {positive}%</p>
    </div>
    </>
  )
}

const FeedbackButton = ({setFn, text}) => {
  return (
      <button onClick={setFn}>{text}</button>
  )
}

export default App