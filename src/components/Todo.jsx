import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import { useState, useEffect } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [btnClicked, setbtnClicked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((response2) => setTasks(response2));
  }, [btnClicked]);

  const taskList = tasks.map(taskShower);

  function taskShower(currItem, currIndex) {
    return (
      <TodoItem
        key={currIndex}
        taskItem={currItem}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />
    );
  }

  function handleDeleteTask(childData) {
    let newItems = tasks.filter((item) => item.id !== childData.id);
    setTasks(newItems);
    fetch(`http://localhost:3000/todos/${childData.id}`, {
      method: "DELETE",
    });
  }

  function handleAddTask(newTask) {
    const newTaskObject = { id: Date.now(), item: newTask.item };
    setTasks([...tasks, newTaskObject]);
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskObject),
    });
  }

  function handleUpdateTask(taskItem, newValue) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskItem.id ? { ...task, item: newValue } : task
    );
    if (newValue === "") {
        return null;
    } else {
    setTasks(updatedTasks);
    fetch(`http://localhost:3000/todos/${taskItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...taskItem, item: newValue }),
    })};
  }

  return (
    <>
      <button onClick={() => setbtnClicked(!btnClicked)}>Get Todos</button>
      <h1>This is the Todo Component</h1>
      {taskList}
      <TodoForm addTask={handleAddTask} />
    </>
  );
}

export default Todo;