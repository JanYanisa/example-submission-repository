import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"
import Counter from "./tutorial-components/Counter"
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
  console.log('App:rerender?')
  return (<>
    <div>
      <Header course = {course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
    <div className="tutorial">
      <Counter/>
    </div>
  </>
  )
}

export default App