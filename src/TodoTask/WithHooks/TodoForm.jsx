import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";

const TodoForm = ({ addTodo }) => {
  const { value, onChange, reset } = useInputState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};
export default TodoForm;
