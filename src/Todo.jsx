import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useState } from "react";

function Todo(){
    // const tasks = ["Cooking","Cleaning ","Eating","Task 4"]
    const[tasks,setTasks] = useState(["Cooking","Cleaning ","Eating","Task 4"])

    const taskList = tasks.map(taskShower)
    // const taskList = tasks.map(item=><TodoItem taskItem={item} />)

    function taskShower(currItem,currIndex){
        // console.log(currItem)
        return <TodoItem taskItem={currItem} onDelete={handleDeleteTask}/>
    }

    function handleDeleteTask(childData){
        // remove a task from the tasks array
        // this task will be passed from the child
        console.log(childData)
        // write functionality to remove this task
        let newItems = tasks.filter(filterFn)
        function filterFn(item){
            return item !== childData
        }
        console.log(newItems)
        setTasks(newItems)
        
    }

    // add function handleAddTask whose responsibility is to add this new task from the task form component to the existing tasks array
    function handleAddTask(newTask){
        setTasks([...tasks,newTask])
    }


    return(
        <>
        <h1>This is the Todo Component</h1>
        {taskList}
        <TodoForm addTask={handleAddTask}/>
        </>
    )
}

export default Todo;

