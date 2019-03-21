import React from "react";
import TextField from "@material-ui/core/TextField";

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    const { addTodo } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(this.state.value);
          this.reset();
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Add todo"
          margin="normal"
          onChange={this.onChange}
          value={this.state.value}
        />
      </form>
    );
  }
}

export default TodoForm;
