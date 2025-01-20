import React from 'react'

function TodoItem({taskItem, onDelete}) {
    // console.log(onDelete("Any random data"))
    function handleDelete(e){
        onDelete(taskItem)
    }
  return (
   <>
   <li> {taskItem} </li>
   <button onClick={handleDelete}>Delete Task</button>
   </>
  )
}

export default TodoItem

