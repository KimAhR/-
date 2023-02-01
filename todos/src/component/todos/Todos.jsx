import { useContext, useReducer } from "react";
import styled from "styled-components";
import { NumContext, TodoProvider, useTodoState } from "../../context/todos";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";

function Todos() {
  return (
    <TodoProvider>
      <Container>
        <TodoHeader />
        <TodoBody />
        <TodoInput />
      </Container>
    </TodoProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 700px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);

  background-color: #ffffff;
`;

export default Todos;
