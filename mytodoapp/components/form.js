import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    const inputTextHandler = (e) =>{
      setInputText(e.target.value);
    }

    const submitTodoHandler = (e) =>{
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed:false, id: todos.length}
      ])
      setInputText("");
    }

    const statusHandler = (e) =>{
      setStatus(e.target.value);
    }


    return(
        <form>
        <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo"  onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>  
    );
}

export default Form;