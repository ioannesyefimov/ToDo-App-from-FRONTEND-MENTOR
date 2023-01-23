import React from 'react'
import Task from './Task'

function TasksList({markTask, removeTask, filtered, tasks, setTasks}) {

  let dragItem = React.useRef(null)
  let dragOverItem = React.useRef(null)

  const handleSort = () => {
    let copyArr = [...tasks]
    const draggedItemContent = copyArr.splice(dragItem.current,1)[0]
    copyArr.splice(dragOverItem.current, 0, draggedItemContent)
    dragItem.current =null
    dragOverItem.current = null

    setTasks(copyArr)
  }

  

  return (
    filtered && filtered.length ? (  
    <div
     className='tasks-list'
     >
      {filtered.map((task, index) => {
          return (
            <Task dragItem={dragItem} dragOverItem={dragOverItem} handleSort={handleSort} tasks={tasks} key={index} index={index} task={task} markTask={markTask} removeTask={removeTask}/>
          )})}
          
  </div>)
   : (null)
  
  )
  
  
  
    
  
}

export default TasksList