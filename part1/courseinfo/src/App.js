import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"
import Counter from "./tutorial-components/Counter"
import LeftRightClick from "./tutorial-components/LeftRightClick"
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
      <div className="tutorial">
          <Counter/>
          <LeftRightClick/>
      </div>
    </>
  )
}

export default App

const Course = ({courses}) => {
  return (
    <>
      {courses.map(course => 
        <div key={course.id}>
          <Header course = {course.name}/>
          <Content parts ={course.parts}/>
          <Total parts={course.parts} />
        </div>
        )}
    </>
  )
}