import { useState } from "react"


function TodoForm({addTask}){ //where addTask is assigned to a function in the parent component, whose role is to add this new task to the existing tasks array
    const [newTask, setNewTask] = useState("")
    const[errorMessage,setErrorMessage] = useState("")

    function handleFormSubmit(e){
        e.preventDefault()
        if(newTask === ""){
            alert("Task is empty, Can't be submitted")
        }
        else{
            const newTaskObject = { id: Date.now(), item: newTask }
            addTask(newTaskObject)
            setNewTask("")
        }
    }

    function handleTaskInput(e){
        const userData = e.target.value
        if(userData === "sleep"){
            // alert("Not Allowed")
            setErrorMessage("Sleep is Not Allowed")
        }
        else{
            setNewTask(userData)

        }       
    }
    function handleUpdateTask(taskItem, newValue) {
        const updatedTasks = tasks.map((task) =>
          task.id === taskItem.id ? { ...task, item: newValue } : task
        )
        setTasks(updatedTasks)
        fetch(`http://localhost:3000/todos/${taskItem.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...taskItem, item: newValue }),
        })
      }
    
    // eventlistener is associated with an event handler which will be invoked, everytime, an event is detected
    return(
        <>
        <h1>This is the TodoForm Component</h1>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="task">Enter Todo Item</label> <br />
            <p id="errorMessage">{errorMessage} </p>
            <input onChange={handleTaskInput} type="text" name="task" value={newTask} id="taskInput"/> <br />
            <button type="submit">Add Task</button>
        </form>
        </>
    )
}
export default TodoForm