import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData, fetchTodo } from "../reducer/todos02";
import TodoItem from "./TodoItem";

function TodoList() {
  // store 상태값이 { counter, todos } => 이 중에서 todos만 가져온다.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
