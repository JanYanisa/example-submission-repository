import Part2a from './components/part2-a'
import Part6a from './components/part6-a'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducers/counterReducer'
const store = createStore(counterReducer)

function App() {
  return (
    <>
      <div className="App">
        <Part2a/>
      </div>
      <div className="app-redux">
        <Provider store={store}>
          <Part6a/>
        </Provider>
      </div>
    </>
  )
}

export default App
