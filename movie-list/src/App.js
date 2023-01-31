import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const fetchData = async () => {
    //acync/await : async 함수 내부에서 Promise 앞에 await 붙이면
    //resolve될 때까지 다음 코드를 실행하지 않는다. => 동기적으로 처리
    try {
      let result = await axios.get("http://localhost:5000/todos");
      setTodos(result.data);
    } catch (e) {
      setTodos(null);
    }
  };

  useEffect(() => {
    //화면에 나타나자마자 한번만 실행.
    fetchData();
  }, []);

  // const handleSubmit = () => {
  //   axios
  //     .post("http://localhost:5000/todos", {
  //       text: text,
  //       done: false,
  //     })
  //     .then((res) => {
  //       // 등록에 성공하면 데이터 다시 받아오기
  //       // if(res.)
  //       console.log(res);
  //       if (res.status === 201) alert("할일이 등록되었습니다.");
  //       fetchData();
  //     });
  // };

  const handleSubmit = async () => {
    let result = await axios.post("http://localhost:5000/todos", {
      text: text,
      done: false,
    });
    //등록에 성공하면 데이터 다시 받아오기
    // if(res.)
    console.log(result);
    if (result.status === 201) alert("할일이 등록되었습니다.");
    fetchData();
  };

  const handleToggle = async (id, done) => {
    await axios.patch("http://localhost:5000/todos/" + id, {
      done,
    });
    fetchData();
  };

  // const handleRemove = (id) => {
  //   axios.delete("http://localhost:5000/todos/" + id).then((res) => {
  //     fetchData();
  //   });
  // };

  const handleRemove = async (id) => {
    try {
      await axios.delete("http://localhost:5000/todos/" + id);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  //화면에 나타나자마자 한번만 실행.

  if (!todos) return <div>데이터가 없습니다.</div>;

  console.log(todos);

  return (
    <div>
      <div>
        <input type="text" onChange={handleText} />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            <span onClick={() => handleToggle(todo.id, !todo.done)}>
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//REST API

//리소스(자원)
//www.naver.com(베이스)/webtoons(리소스/ 자원의 종류 )
//wwww.naver.com/articles
// GET - 가져오기
// POST - 등록하기
// PUT - 업데이트(전체)
// PATCH - 업데이트(일부)
// DELETE - 삭제

//쿼리스트링 (Query String Parameter)
//www.naver.com/webtoons?name=마음의소리&title=강아지

//경로 변수(Path 변수)
// www.naver.com/webtoon/1
// www.naver.com/webtoon/{id}
