import { useState } from "react";
import "./Todo.css";

const Todo = () => {
    // show default input data
    const [todo, setTodo] = useState(["Do Homework"])

    //catch input data
    const [input, setInput] = useState("");
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    //add input data
    const handleTodoAdd = () => {
        setTodo([input, ...todo]);
    }

    //delete input data
    const handleTodoDelete = (item) => {
        setTodo(todo.filter((data) => { data != item }));
    }

    return (
        <>
            <div className="todo">
                <input type="text" placeholder="add todo" onChange={handleInputChange} value={input} />
                <button className="add" onClick={handleTodoAdd} > Add</button>
                <ul>
                    {
                        todo.map((item) => {
                            return (

                                <li key={item}>{item} <button className="delete" onClick={() => handleTodoDelete(item)}>x</button></li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}
export default Todo;