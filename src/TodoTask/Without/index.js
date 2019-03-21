import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";

class Todo extends React.Component {
  state = {
    todos: []
  };

  addTodo = text => {
    const trimmedText = text.trim();
    if (trimmedText.length > 0) {
      this.setState({ todos: [...this.state.todos, trimmedText] });
    }
  };

  deleteTodo = todoIndex => {
    const newTodos = this.state.todos.filter((_, index) => index !== todoIndex);

    this.setState({ todos: [...newTodos] });
  };

  render() {
    return (
      <div>
        <Typography component="h1" variant="h2">
          Todos
        </Typography>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Todo;
