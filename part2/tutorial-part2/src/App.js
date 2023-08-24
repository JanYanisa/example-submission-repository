import Part2a from './components/part2-a'
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

function App() {
  return (
    <div className="App">
      <Part2a notes={notes}/>
    </div>
  );
}

export default App;
