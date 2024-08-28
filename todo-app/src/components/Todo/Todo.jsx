import { useState } from "react";
import "./Todo.css";

const Todo = () => {
    const [todo, setTodo] = useState(["go to school"]);

    //catch input data
    const [input, setInput] = useState("")
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    
    //add input data
    const handleTodoAdd = () => {
        setTodo([input , ...todo]);
    }
    
    //delete input data
    const handleTodoDelete = (item) => {
        setTodo(todo.filter((data) => data != item));
    }
    

    return (
      <>
        <div className="todo">
          <input type="text" placeholder="add todo" onChange={handleInputChange} value={input} />
          <button className="add" onClick={handleTodoAdd}>Add</button>
          <hr />
                <ul>
                    {todo.map((item) => {
                        return (
                            <li key={item} >{item} <button onClick={ () => handleTodoDelete(item) } className="delete">x</button></li>

                        );
                    })}
          </ul>
        </div>
      </>
    );
}

export default Todo