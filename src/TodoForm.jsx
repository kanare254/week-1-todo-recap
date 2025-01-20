import { useState } from "react"

function TodoForm(){
    const [newTask, setNewTask] = useState("")
    const[errorMessage,setErrorMessage] = useState("")
    function handleFormSubmit(e){
        e.preventDefault()
        // receive the new task
        // pass it to the parent
        //where it will be added t othe other tasks
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
        </form>z
        </>
    )
}
export default TodoForm