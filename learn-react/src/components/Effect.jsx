import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 렌더링이 일어날 때마다 실행. 렌더링 이후에 실행
  useEffect(() => {
    console.log("렌더링!");
  });

  // 렌더링되면서 실행
  console.log("rendering");

  // 두번째 인자로 빈 배열을 전달하면 처음 나타날 때 한번만 실행이된다.
  //      => 초기 설정 작업. ex) 라이브러리 연동, 데이터 패칭, setTimeout 등
  useEffect(() => {
    console.log("마운트!");

    // 뒷정리 함수(CleanUp) : 컴포넌트가 화면에서 사라질 때 실행.
    //      => 라이브러리 해제, API 요청 취소, clearTimeout 등
    return () => console.log("언마운트!");
  }, []);

  // 두번째 인자 : 디펜던시에 props, state를 넣으면 해당 값이 변했을 때만 실행이 된다.
  //        => 특정값이 바뀌었을 때 실행할 코드.
  useEffect(() => {
    // 값이 바뀐 후에 실행
    console.log("after : " + count);

    // 값이 바뀌기 전에 실행
    return () => console.log("before : " + count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>
        <p>{input}</p>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </div>
  );
}

export default Effect;
