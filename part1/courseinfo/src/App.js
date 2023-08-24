import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"
import Counter from "./tutorial-components/Counter"
import LeftRightClick from "./tutorial-components/LeftRightClick"
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <>
      <Course course={course} />
      <div className="tutorial">
          <Counter/>
          <LeftRightClick/>
      </div>
    </>
  )
}

export default App

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}