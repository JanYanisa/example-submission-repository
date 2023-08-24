const Total = ({parts}) => {
    const total = 
        parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <h4>Number of exercises {total}</h4>
    )
  }
  export default Total