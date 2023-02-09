import { createSelector, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "리덕스 배우기", done: true },
  { id: 2, text: "리덕스 응용하기", done: false },
  { id: 3, text: "리덕스로 todos 만들기", done: false },
];

// 액션 타입 정의
const CREATE = "CREATE";
const REMOVE = "REMOVE";
const TOGGLE = "TOGGLE";

// 액션을 생성하는 함수들.
export const toggleTodo = (id) => ({
  type: TOGGLE,
  payload: id,
});

export const removeTodo = (id) => ({
  type: REMOVE,
  payload: id,
});

export const createTodo = (text) => ({
  type: CREATE,
  payload: { id: nanoid(), text, done: false },
});

// 셀렉터 함수들
const getTodos = (state) => state.todos;

// reselect : 골라낸 상태에서 다시 값을 골라낸다. => 이전 상태값이 변하지 않으면 재계산 x.
export const getUndoneCount = createSelector(getTodos, (state) => {
  const undoneCount = state.filter((todo) => !todo.done).length;

  return undoneCount;
});

export const getTotalCount = createSelector(getTodos, (todos) => todos.length);

// 리듀서
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return state.concat(action.payload);
    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
