import { useDispatch } from "react-redux";
import { deleteTodo, updateToggle } from "../api/todos";
import { fetchData } from "../reducer/todos02";

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const dispatch = useDispatch();

  const handleRemove = async () => {
    await deleteTodo(id);
    dispatch(fetchData());
  };

  const handleToggle = async () => {
    await updateToggle(id, !done);
    dispatch(fetchData());
  };

  return (
    <li style={{ textDecoration: done && "line-through" }}>
      <span onClick={handleToggle}>{text}</span>
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
}

export default TodoItem;
