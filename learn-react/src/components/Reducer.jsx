import { useReducer } from "react";
import { counterReducer } from "../state/counter";

function Reducer() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    amount: 1,
  });
  // dispatch : 상태 업데이트를 요청하는 함수. 필요한 정보를 객체 형태로 전달.

  const handleAmount = (e) => {
    const amount = parseInt(e.target.value); // input 태그의 값을 Number 타입으로 변환.
    dispatch({ type: "CHANGE_AMOUNT", amount });
  };

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <input type="number" onChange={handleAmount} />
    </div>
  );
}

export default Reducer;
