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
            console.log(newTask)
            // get the new task, which is already set in state, and then 
            addTask(newTask)
        }
        // receive the new task
        // pass it to the parent
        //where it will be added to the other tasks
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