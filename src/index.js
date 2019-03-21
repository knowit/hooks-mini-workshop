import "./styles.css";

import OldTodo from "./TodoTask/Without";
import OneTimeButtonWithHooks from "./OneTimeButtonTask/WithHooks/OneTimeButton";
import OneTimeButtonWithoutHooks from "./OneTimeButtonTask/Without/OneTimeButton";
import React from "react";
import ReactDOM from "react-dom";
import ThemeContext from "./RenderPropsTask/ThemeProvider";
import Todo from "./TodoTask/WithHooks";
import UserProfile from "./RenderPropsTask/WithHooks/UserProfile";
import UserProfileWithoutHooks from "./RenderPropsTask/Without/UserProfile";

const App = () => {
  return (
    <div className="App">
      <Todo />
      <OldTodo />

      <OneTimeButtonWithHooks
        onClick={() => console.log("clicked with hooks")}
      />
      <OneTimeButtonWithoutHooks
        onClick={() => console.log("clicked without hooks")}
      />

      <ThemeContext.Provider value="dark">
        <UserProfileWithoutHooks id={1} />
      </ThemeContext.Provider>

      <ThemeContext.Provider value="dark">
        <UserProfile id={1} />
      </ThemeContext.Provider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
