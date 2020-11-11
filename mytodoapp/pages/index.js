import React, { useState, useEffect} from 'react'
import Form from '../components/form'
import TodoList from '../components/todolist'
import Head from 'next/head'

const Home = () => {

  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
  }, []);


  //use effect
  useEffect(() => {
      filterHandler();
      saveLocalTodos();
  }, [todos, status])

  //Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
  }

  const saveLocalTodos = () =>{
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <>
      <Head>
        <title>MyTodoApp</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
          integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
          crossorigin="anonymous" />
      </Head>
      <div className="App">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      </div>
    </>
  );
}

export default Home;



