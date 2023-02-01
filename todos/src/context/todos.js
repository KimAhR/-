// src/context/todos.js
import { createContext, useContext, useReducer, useState } from "react";

// createContext(기본값) : 컨텍스트를 만든다.
//      => Provider 밖에서 useContext를 사용하면 반환되는 값.
export const NumContext = createContext(0);
export const StrContext = createContext("기본값");
export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);

const initialState = [
  { id: 1, text: "투두리스트 스타일링", done: true },
  { id: 2, text: "투두리스트 기능 구현하기", done: false },
  { id: 3, text: "리팩토링 하기", done: false },
];

// 배열 업데이트하는 리듀서 함수 만들기
function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: action.id, text: action.text, done: false });
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 커스텀 훅 : React 훅들을 조합해서 커스텀으로 훅을 만든다. use로 시작한다.
export function useTodoState() {
  const context = useContext(TodoStateContext);

  // context가 null일 경우 : Provider 밖이다.
  if (!context) throw Error("Provider 없음");

  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);

  if (!context) throw Error("Provider 없음");

  return context;
}
