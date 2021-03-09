import { useState } from "react";
import { v1 } from "uuid";

const Form = ({ todos, setTodos, setStatus }) => {
  const [inputText, setInputText] = useState("");

  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: v1() }]);
    setInputText("");
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form>
      <input
        onChange={inputHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodo} className="todo-button">
        OK
      </button>
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;
