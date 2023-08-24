import Part from "./Part"

const Content = (props) => {
    let contentParts = []
    for (let i=0; i< props.parts.length; i++ ){
        contentParts.push(<Part part={props.parts[i]} exercise={props.exercises[i]}/>) 
    }
    return (
        <div>
            {contentParts}
        </div>
    )
  }
  
  export default Content