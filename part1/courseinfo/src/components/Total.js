const Total = (props) => {
    let sum = 0
    props.parts.forEach(part => {
        sum = sum + part.exercises
    });
    return (
        <p>Number of exercises {sum}</p>
    )
  }
  export default Total