import React from 'react'
import Todo from './todo'


const TodoList = ({todos, setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo=>(
                    <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;