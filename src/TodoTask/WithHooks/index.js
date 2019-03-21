import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import useTodoState from "./useTodoState";

// // randomly generated N = 40 length array 0 <= A[N] <= 39
// const randomTodos = Array.from({ length: 10000000 }, () =>
//   Math.floor(Math.random() * 40)
// );

const Todo = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div>
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
