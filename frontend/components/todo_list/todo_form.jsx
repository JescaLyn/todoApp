import React from 'react';


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {title: "", body: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createTodo({todo: this.state});
  }

  render() {
    return (
      <form>
        <label>
          title
        <input type="text" onChange={this.linkState("title")}
           value={this.state.title}/>
        </label>

        <label>
          body
          <textarea onChange={this.linkState("body")} value={this.state.body}/>
        </label>

        <input type="submit" value="new todo!" onClick={this.handleClick}/>
      </form>
    );
  }
}

export default TodoForm;
