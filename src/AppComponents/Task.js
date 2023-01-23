import React from "react";


function Task({task, index, markTask, removeTask,tasks, handleSort,onDragStart, onDragEnter, onDragEnd, dragItem, dragOverItem }) {
    
    
    return (
        <div 
        draggable='true'
        className="task list-item"
        onDragStart={(e) => {
            dragItem.current = index
            e.target.classList.add('dragging')

        }}
        onDragEnter={(e)=> {
            dragOverItem.current = index
        }
        }
        
            onDragEnd={(e) => {
                handleSort()
                e.target.classList.remove('dragging')
            }}
            onDragOver={(e)=> e.preventDefault()}
        
        > 
            <div
            className="wrapper"
            >
            <button className={`task-btn btn-mark ${task.isDone ? 'done-btn': ''}`} variant="outline-success" onClick={()=> markTask(index)}></button>{""}
            <span className={`${task.isDone ? "done": ""}`}>{task.title}</span>

            </div>
            <button className="task-btn btn-remove"variant="outline-danger" onClick={()=> removeTask(index)}></button>{""}
        </div>
    )
}

export default Task