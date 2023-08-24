import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
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
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

const FeedbackButton = ({setFn, text}) => {
  return (
      <button onClick={setFn}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const avg = total === 0 ? total :(good - bad)/total
  const positive = total === 0 ? total : good/total * 100
  if (total > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={total} />
        <StatisticLine text="average" value ={avg} />
        <StatisticLine text="positive" value ={ positive + '%'} />
      </div>
    )
  }
  return (<div>
    <h1>Statistics</h1>
    <h3>No feedback given</h3>
  </div>)
}

const StatisticLine = ({text, value}) => {
  return <p>{text} {value}</p>
}

export default App