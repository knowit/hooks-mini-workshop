import { useState } from "react";

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      const trimmedText = todoText.trim();
      if (trimmedText.length > 0) {
        setTodos([...todos, trimmedText]);
      }
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};
