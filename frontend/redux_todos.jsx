import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
// import { requestTodos } from './actions/todo_actions';
import Root from './components/root';
// import { createTodo } from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // window.requestTodos = requestTodos;
  // window.createTodo = createTodo;
  // window.store = store;
  ReactDOM.render(<Root store={store}/>, document.getElementById("content"));
});
