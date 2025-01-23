import React, {useState} from 'react'

function TodoItem({taskItem, onDelete ,onUpdate}) {
  const [editValue, setEditValue] = useState(taskItem.item)
  
  function handleDelete(e){
      onDelete(taskItem);
    }
    
    function handleInputChange(e){
      const newValue  = e.target.value;
      setEditValue(newValue);
      onUpdate(taskItem, newValue)
    }

  return (
   <>
   <li>
    <input type="text" value={editValue} onChange={handleInputChange}/>
   </li>
   <button onClick={handleDelete}>Delete Task</button>
   </>
  )
}

export default TodoItem

