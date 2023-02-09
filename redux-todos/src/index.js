import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import counter from "./reducer/counter";
import todos from "./reducer/todos02";

// store : 상태들이 관리되는 저장소.
const store = configureStore({
  reducer: {
    counter,
    todos,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
