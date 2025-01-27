import { useState } from "react"


function TodoForm({addTask}){
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
export default TodoForm;