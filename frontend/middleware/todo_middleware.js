import { TODO_CONSTANTS, receiveTodos, receiveTodo, removeTodo }
 from '../actions/todo_actions';
import { fetchTodos, createTodo, updateTodo, destroyTodo }
 from '../util/todo_api_util';

export const TodoMiddleware = store => next => action => {
  let success;
  switch (action.type) {
    case TODO_CONSTANTS.REQUEST_TODOS:
      success = data => store.dispatch(receiveTodos(data));
      fetchTodos(success);
      break;
    case TODO_CONSTANTS.CREATE_TODO:
      success = data => store.dispatch(receiveTodo(data));
      createTodo(action.todo, success);
      break;
    case TODO_CONSTANTS.UPDATE_TODO:
      success = data => store.dispatch(receiveTodo(data));
      updateTodo(action.todo, success);
      break;
    case TODO_CONSTANTS.DESTROY_TODO:
      success = data => store.dispatch(removeTodo(data));
      destroyTodo(action.todo, success);
      break;
    default:
      return next(action);
  }
};
