import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filter }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filter.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
