import TodoItem from "./TodoItem";

function Todo(){
    const tasks = ["Cooking","Cleaning ","Eating","Task 4"]

    const taskList = tasks.map(taskShower)

    function taskShower(currItem,currIndex){
        // console.log(currItem)
        return <TodoItem taskItem={currItem}/>
    }

    // create function to 

    return(
        <>
        <h1>This is the Todo Component</h1>
        {taskList}
        </>
    )
}

export default Todo;

