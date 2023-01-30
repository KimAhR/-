import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoBody({ todos, dispatch }) {
  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.Id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;
export default TodoBody;
