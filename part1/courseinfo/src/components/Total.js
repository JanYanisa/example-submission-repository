const Total = (props) => {
    let sum = 0
    props.exercises.forEach(exe => {
        sum = sum + exe
    });
    return (
        <p>Number of exercises {sum}</p>
    )
  }
  export default Total