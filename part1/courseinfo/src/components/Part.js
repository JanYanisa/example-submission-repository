const Part = (props) => {
    console.log('Part', props)
    return (
        <p>
        {props.part.name} {props.part.exercises}
        </p>
    )
  }
  
  export default Part