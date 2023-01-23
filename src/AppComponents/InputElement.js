import { useEffect, useState } from "react";

const InputElement = ({addTask}) =>{
    const [value, setValue] = useState('')    

    
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return
        addTask(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit} className="todo-creator">
            <button type='submit' className="todo-btn square"></button>
            <input 
            className="todo-input" 
            type='text' 
            placeholder="Create a new todo..." 
            value={value} onChange={e => setValue(e.target.value)} />
        </form>

    )

}


export default InputElement