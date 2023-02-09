import axios from "axios";

export const getTodo = async () => {
  let { data } = await axios.get("http://localhost:5000/todos");

  return data;
};

export const postTodo = async (text) => {
  let { data } = await axios.post("http://localhost:5000/todos", {
    done: false,
    text,
  });

  return data;
};

export const deleteTodo = async (id) => {
  let { data } = await axios.delete("http://localhost:5000/todos/" + id);

  return data;
};

export const updateToggle = async (id, done) => {
  let { data } = await axios.patch("http://localhost:5000/todos/" + id, {
    done,
  });

  console.log(data);
  return data;
};
