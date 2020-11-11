import React,{useState} from 'react'
import Form from '../components/form'
import TodoList from '../components/todolist'
import Head from 'next/head'

const Home = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
        <header>
          <h1>Rodrigo Todo List</h1>
        </header>
        <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
        <TodoList setTodos={setTodos} todos={todos}/>
      </div>
    </>
  );
}

export default Home;



