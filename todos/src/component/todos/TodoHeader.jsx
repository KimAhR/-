import { useContext } from "react";
import styled from "styled-components";
import { NumContext, useTodoState } from "../../context/todos";

function TodoHeader() {
  const todos = useTodoState();
  // 실행되는 로컬 시간을 한글로 표기.
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  const doneCount = todos.filter((todo) => todo.done).length;

  const percentage = (doneCount / todos.length) * 100;

  // useContext(컨텐스트) :  컨텍스트가 value 속성으로 제공하는 값을 반환한다.
  const num = useContext(NumContext);

  console.log("num context : ", num);

  return (
    <Container>
      <DateText>{dateStr}</DateText>
      <CountText>
        완료 : {doneCount}/{todos.length}
      </CountText>
      <PercentageBar percentage={percentage} />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
`;

const DateText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const CountText = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const PercentageBar = styled.div`
  height: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    transform-origin: left;
    transform: scaleX(${({ percentage }) => percentage}%);
    height: 100%;
    transition: transform 0.4s;
    background-color: ${({ theme }) => theme.colors.main_color};
  }
`;

export default TodoHeader;
