import { useSelector } from "react-redux";
import { getTotalCount, getUndoneCount } from "../reducer/todos";

function TodoHeader() {
  const undoneCount = useSelector(getUndoneCount);
  const totalCount = useSelector(getTotalCount);

  return (
    <div>
      <p>2023년 02월 08일</p>
      <span>
        해야할 일 : {undoneCount}/{totalCount}
      </span>
    </div>
  );
}

export default TodoHeader;
