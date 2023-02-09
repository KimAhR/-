import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../api/todos";
import { fetchData } from "../reducer/todos02";

function TodoCreate() {
  const [text, setText] = useState("테스트");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postTodo(text);
    dispatch(fetchData());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;
