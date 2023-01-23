import React, { useEffect, useState } from 'react'

function FilterBtns({filtered, setTasks, onFilter, filterNames, tasks }) {

  useEffect(() => {
    setBtnState({...btnState, activeBtn: btnState.btns[0]})
  }, [])
  
  const [btnState, setBtnState] = useState({
     activeBtn: null,
     btns: [
      {id:1},
      {id:2},
      {id:3}
    ]

  })

  const clearCompleted = () => {
    // filter tasks that isn't completed, assign it to the variable and  then use that variable as a new state for task list
    const activeTasks = tasks.filter(task => task.isDone === false)
    setTasks(activeTasks)
  }

  const handleToggle = (index, name) => {
      let activeBtn = btnState.btns[index]
      setBtnState({...btnState, activeBtn: activeBtn} )

  }

  const toggleActiveStyles = (index, name) => {
    if(btnState.btns[index] === btnState.activeBtn ){
      return 'active'
    } else {
      return 'unactive'
    }
    
  }
  
   

  
  return (
    <div className='task-search list-item'>
      <div
      className='flex-wrapper1'
        >
          <span className='counter'>{tasks.filter(task => task.isDone === false).length} items left</span>
          <button className='clear_completed-btn filter-btn' onClick={clearCompleted}>Clear Completed</button>
      </div>
      <div 
      className='flex-wrapper2'
      >
      {filterNames.map((filterName, index) => {
       
          return <button key={index} className={`${toggleActiveStyles(index, filterName)} filter-btn`}  onClick={(e)=> {
            onFilter(filterName)
            handleToggle(index)
          }}>{filterName}</button>
         
      })}

      </div>
    </div>

   ) 

}

export default FilterBtns