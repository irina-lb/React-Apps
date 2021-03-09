const Todo = ({ text, id, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="buttons">
        <button className="complete-button" onClick={completeHandler}>
          Complete
        </button>
        <button className="delete-button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
