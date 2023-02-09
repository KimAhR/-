import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreasement, increasement } from "../reducer/counter";

function Counter() {
  // useSelector의 인자로는 순수함수가 전달되어야한다.
  //      => 관리되고 있는 여러 상태 중 가져올 상태를 "선택"한다.
  const count = useSelector((state) => state.counter);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch(); // 액션을 전달하는 함수.

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increasement(amount))}>+1</button>
      <button onClick={() => dispatch(decreasement(amount))}>-1</button>
      <input
        type="number"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
    </div>
  );
}

export default Counter;
