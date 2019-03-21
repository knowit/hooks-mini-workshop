import "./styles.css";

import OneTimeButton from "./OneTimeButtonTask/OneTimeButton";
import React from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import ThemeContext from "./RenderPropsTask/ThemeProvider";
import Todo from "./TodoTask";
import UserProfile from "./RenderPropsTask/UserProfile";
import useInputState from "./TodoTask/useInputState";

const Task3 = () => {
  const { value, onChange } = useInputState("");

  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        placeholder="Skriv inn draktnummer"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <ThemeContext.Provider value="dark">
        {value && <UserProfile id={value} />}
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

const App = () => {
  const headerMargin = { marginTop: "3rem" };
  return (
    <div className="App">
      {/* Task 1: OneTimeButton*/}
      <h2 style={headerMargin}>Task 1: OneTimeButton</h2>
      <OneTimeButton onClick={() => console.log("clicked oneTimeButton")} />
      {/* Task 2: Todo app */}
      <h2 style={headerMargin}>Task 2: Todo</h2>
      <Todo />
      {/* Task 3: Render props to hooks */}
      <h2 style={headerMargin}>Task 3: Render Props</h2>
      <Task3 />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
