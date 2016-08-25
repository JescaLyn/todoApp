import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
  this.props.requestTodos();
  }

  render() {
    let todos = this.props.todos.map( todo => (
      <TodoListItem
        todo={todo}
        key={todo.id}
        toggleTodo={this.props.toggleTodo}
        destroyTodo={this.props.destroyTodo}
        />
    ));
    return(
      <div>
        <ul>
          {todos}
        </ul>
        <TodoForm createTodo={this.props.createTodo} />
      </div>
    );
  }
}

export default TodoList;
