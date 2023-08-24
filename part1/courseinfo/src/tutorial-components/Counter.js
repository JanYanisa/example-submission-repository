import { useState } from 'react'

// Component state, event handlers : Passing state - to child components
const Counter = () => {
    const [ counter, setCounter ] = useState(0)
  
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)
    console.log('Counter:rerender?')
    return (
      <div>
        <Display counter={counter}/>
        <Button
          handleClick={increaseByOne}
          text='plus'
        />
        <Button
          handleClick={setToZero}
          text='zero'
        />     
        <Button
          handleClick={decreaseByOne}
          text='minus'
        />           
      </div>
    )
  }
  
  const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
  
  const Display = ({ counter }) => <div>{counter}</div>

  export default Counter