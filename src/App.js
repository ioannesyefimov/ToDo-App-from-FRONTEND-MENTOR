import { useEffect, useState } from 'react';
import './sass/App.scss';
import InputElement from './AppComponents/InputElement';
import FilterBtns from './AppComponents/FilterBtns';
import TasksList from './AppComponents/TasksList';

function App() {
  
  const [theme, setTheme] = useState('light')
  const [icon, setIcon] = useState('moon')
 
  const [tasks, setTasks] = useState([
    {
      title: 'Complete online JavaScript course',
      isDone: true,
      id: 1,
    },
    {
      title: 'Jog around the park 3x',
      isDone: false,
      id: 2

    },
    {
      title: '10 minutes meditaion',
      isDone: false,
      id: 3

    },
    {
      title: 'Read for 1 hour',
      isDone: false,
      id: 4

    },
    {
      title: 'Pick up groceries',
      isDone: false,
      id: 5

    },
    {
      title: 'Complete Todo App on Frontend Mentor',
      isDone: false,
      id: 6

    },
   
  ])

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.isDone,
    Completed: (task) => task.isDone
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP); //keys
  

  const [currentFilter, setCurrentFiltered] = useState(FILTER_NAMES[0])
  const filtered = tasks.filter(FILTER_MAP[currentFilter])


  useEffect(() => {
    document.body.setAttribute(`data-theme`, `${theme}`)

  }, [theme])
  const addTask = (title) => {
    if(title.length < 3) return alert('Please type in valid task 😶')
    let newTask = {title}
    newTask.isDone= false
    let newTasks = [...tasks, newTask];
   
      setTasks(newTasks)
    
    ;
  }

  const markTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isDone = true;
    setTasks(newTasks)
  }

  const removeTask = index => {
    const newTasks = [...tasks];
    
    newTasks.splice(index, 1);
    setTasks(newTasks)
  }


  const HandleTheme = () => {
    
  if(theme === 'light'){
          setTheme("dark")
          setIcon('sun')

      } else if (theme === 'dark'){
          setTheme('light')
          setIcon('moon')
      }

  }
 
    

  
  return (
    <main className='main-container' data-theme={theme} >
      <header className='header'>
          <div className='wrapper'>
            <h1 className='title'>Todo</h1>
            <button className='theme-switcher' onClick={HandleTheme}>
              <img className='theme-icon' alt='current theme icon' src={require(`./assets/icon-${icon}.svg`)} />
            </button>
          </div>
            
          <InputElement addTask={addTask} />
     </header>
      <div className="main-inner-container">
        <TasksList markTask={markTask} removeTask={removeTask} tasks={tasks}  filtered={filtered} setTasks={setTasks} />
        <FilterBtns filterNames={FILTER_NAMES} onFilter={setCurrentFiltered} removeTask={removeTask} tasks={tasks} setTasks={setTasks} filtered={filtered}   />

        <p className='hint'>Drag and drop to reorder list</p>
      </div>
      <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/ioannesyefimov">Ioannes</a>.
     </div>
    </main>
  );
  }
  

export default App;
