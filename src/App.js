import './App.css'
import { useState } from "react";
import { Task } from "./Task";
function App() {
  const [todoList,setTodoList] = useState([])
  const [newTask,setNewTask] = useState("")

  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }

  const AddTask = ()=>{
    const task = {
      id: todoList.length > 0 ? todoList[todoList.length-1].id+1 : 0,
      taskName: newTask,
      complete: false,
    }   
    setTodoList([...todoList,task])
  }

  const handledelete = (id) =>{
    const list = todoList.filter((task)=> task.id !== id)
    setTodoList(list)

  }
  const handleComplete = (id)=>{
   const list = todoList.map((task)=>task.id === id ?{...task,complete : true} : task);
   setTodoList(list)
  }
  return (
    <div className="App">
      <div className="addtask">
        <input onChange={handleChange} placeholder = "Add Task"/>
        <button onClick={AddTask} >Add Task</button>
      </div>
      <div className="list"> 
        {todoList.map((task)=>{
          return <Task  key={task.id}
                    taskName = {task.taskName}
                    id={task.id} 
                    handledelete={handledelete}
                    complete = {task.complete}
                    handleComplete = {handleComplete}
                  /> 
          
        })}
       </div>
      
    </div>
  );
}

export default App;
