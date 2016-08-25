export const TODO_CONSTANTS = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO",
  DESTROY_TODO: "DESTROY_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  UPDATE_TODO: "UPDATE_TODO"
};

export const requestTodos = () => ({
  type: TODO_CONSTANTS.REQUEST_TODOS
});

export const receiveTodos = todos => ({
  type: TODO_CONSTANTS.RECEIVE_TODOS,
  todos
});

export const createTodo = (todo) => ({
  type: TODO_CONSTANTS.CREATE_TODO,
  todo
});

export const receiveTodo = (todo) => ({
  type: TODO_CONSTANTS.RECEIVE_TODO,
  todo
});

function toggle(todo) {
  todo.todo.done = !todo.todo.done;
  return todo;
}

export const toggleTodo = todo => ({
  type: TODO_CONSTANTS.UPDATE_TODO,
  todo: toggle(todo)
});

export const destroyTodo = todo => ({
  type: TODO_CONSTANTS.DESTROY_TODO,
  todo
});

export const removeTodo = todo => ({
  type: TODO_CONSTANTS.REMOVE_TODO,
  todo
});
