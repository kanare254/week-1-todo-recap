import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function Todo(){
    const tasks = ["Cooking","Cleaning ","Eating","Task 4"]

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
    }

    return(
        <>
        <h1>This is the Todo Component</h1>
        {taskList}
        <TodoForm/>
        </>
    )
}

export default Todo;

