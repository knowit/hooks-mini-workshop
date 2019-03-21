import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";

const ReversedTodoForm = ({ saveTodo }) => {
  const { value, onChange, reset } = useInputState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        saveTodo(
          value
            .split("")
            .reverse()
            .join("")
        );
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Reverse todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};
export default ReversedTodoForm;
