import { TODO_CONSTANTS } from '../actions/todo_actions';
import { merge } from 'lodash';

export const todos = (state = {}, action) => {
  switch (action.type) {
    case TODO_CONSTANTS.RECEIVE_TODOS:
      let objTodos = {};
      action.todos.forEach( (todo) => {
        objTodos[todo.id] = todo;
      });
      return objTodos;
    case TODO_CONSTANTS.RECEIVE_TODO:
      let todo = {};
      todo[action.todo.id] = action.todo;
      return merge({}, state, todo);
    case TODO_CONSTANTS.REMOVE_TODO:
      let newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};
