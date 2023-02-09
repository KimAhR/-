// redux toolkit 활용 버전

import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

import { getTodo } from "../api/todos";

export const fetchData = createAsyncThunk("fetchTodo", getTodo);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(fetchData.pending, (state) => {
        return state;
      })
      .addCase(fetchData.rejected, () => {
        return [{ id: 1, text: "실패", done: false }];
      });
  },
});

export const { removeTodo, createTodo, toggleTodo, fetchTodo } =
  todoSlice.actions;

const todos = todoSlice.reducer;
export default todos;
