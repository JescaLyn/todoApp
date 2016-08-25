import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }


  handleToggle(e) {
    e.preventDefault();
    this.props.toggleTodo({todo: this.props.todo});
  }

  handleDestroy(e) {
    e.preventDefault();
    this.props.destroyTodo(this.props.todo);
  }

  render() {
    const toggleValue = this.props.todo.done ? "Not done" : "Done!";

    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.handleToggle}>{toggleValue}</button>
        <button onClick={this.handleDestroy}>Delete</button>
      </li>
    );
  }
}

export default TodoListItem;
