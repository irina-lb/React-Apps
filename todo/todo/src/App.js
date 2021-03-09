import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilter(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  const saveTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}

export default App;
