import { useState } from "react";

function Counter() {
  // useState(초기값) : 배열의 첫번째는 상태값, 두번째는 업데이트 함수 반환.
  //      => 클로저 개념 사용.
  const [count, setCount] = useState(0);

  // 상태값이 업데이트되면 재랜더링이 일어난다.
  // => 이벤트 바인딩시 인자를 전달해야하면 익명 함수 내에서 호출하는 형태로 전달해야한다.
  const handleCount = (operand) => {
    /* 
        상태 업데이트는 비동기적으로 동작한다.
            => 함수형 업데이트를 하면 동기적으로 동작할 수 있다.
            => 업데이트 함수에 함수를 전달하면 매개변수로 최신 상태값이 전달된다. 
            => 디펜던시를 비울 때 사용하면 좋다.
    */
    setCount((num) => num + operand);
    setCount((num) => num + operand);
    setCount((num) => num + operand);
  };

  return (
    <div>
      <p>{count}</p>
      {/* JSX의 이벤트 바인딩은 카멜케이스를 사용 */}
      <button onClick={() => handleCount(1)}>+1</button>
      <button onClick={() => handleCount(-1)}>-1</button>
    </div>
  );
}

export default Counter;
