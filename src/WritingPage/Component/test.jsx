import React, { useState } from "react";


function Testt(){

    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

    return(
        <div>
            {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
            })}
             <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

function a()
{
    
}
export default Testt