import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function Todos() {
  return (
    <div>
      <TodoCreate />
      <TodoHeader />
      <TodoList />
    </div>
  );
}

export default Todos;
