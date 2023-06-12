export const Task = (props)=>{
    return (
        <div className="task"
        style={{backgroundColor : props.complete ? "green": "white"}}
        >
          <h1>{props.taskName}</h1>
          <button onClick={()=>props.handleComplete(props.id)}>completed</button>
          <button onClick={()=>props.handledelete(props.id)}>X</button>
        </div>
      )
      
}