# React Hooks workshop

Before you get started it is highly encouraged that you do some light skimming of the official React hooks documentation [Introducing Hooks – React](https://reactjs.org/docs/hooks-intro.html). The workshop will provide exercises to get hands-on experience with hooks. Getting explaining as to how hooks works is up to you to Google.

(let’s be real, any explanation would simple be copy-pasted anyways. Better keep the wall of text as slim as possible)

## Exercise 1 - OneTimeButton

This exercise serves as a simple introduction to getting familiar with the `useState` hook.

Take a look at the component `OneTimeButtonTask/oneTimeButton.jsx`. It does on simple thing: once it has been clicked it will disable itself. While the logic is simple, it is tightly coupled to the component itself.

_Task 1:_ Rewrite the component to use `useState` instead of using old-school React state.

_Task 2:_ Abstract your implementation in task 1 so that the logic can be reused wherever you want to “allow action X only once”.

## Exercise 2 - Simple Todo app

Now we will convert a basic todo application to use hooks instead of state. Familiarize yourself with the existing code in `TodoTask`. Both `index.js` and `TodoForm.jsx` uses state: `index.js` for managing the list of added todos, and `TodoForm.jsx` for managing form input.

_Task 1:_ Extract all logic in `TodoForm.jsx` into `useInputState.js`.

_Task 2:_ Extract all logic in `index.js` into `useTodoState.js`

Now that we have converted the todo app to use `useState` let’s take advantage of it.

_Task 3:_ Create a new type of form for inputting todos. What it does is up to you. The important thing is to reuse `useInputState.js`. As an example, you could implement `ReversedTodoForm.jsx` that will reverse the input before adding it to the list of todos. 🤷‍♂️

## Exercise 3 - Rewrite render props to React hooks

In this exercise the task is to rewrite existing functionality that uses render props, to instead use hooks, and observe how much slimmer the code becomes.
For this task we will implement a component that fetches important football players name, based on their shirt number, from an api and displays the name of the player in the browser. What’s new in this exercise is that we will in addition to `useState` also use `useEffect` and `useContext`

The existing code uses render props to do two things:

1. `UserProfileProvider` takes an id and will fetch it from the api and the provide the user as a render prop to its children
2. `ThemeProvider` that can be consumed to provide the current theme as a render prop
   As can be seen in `UserProfile.jsx` this causes a couple of levels of nesting.

_Task:_ Follow the comments in the code to rewrite this render prop functionality as hooks.

## Exercise 4

Well… There are no more laid out exercises. But if you want to spend more of your village time to learn about React hooks, there is plenty more you can do with hooks

Suggestions:

- Explore `useMemo` and `useCallback` to memoize values based on props
- See if you can rewrite your redux application with the hook `useReducer` and avoid all the redux boilerplate code you have previously committed to 🤓

## Resources

[A Simple Intro to React Hooks](https://daveceddia.com/intro-to-hooks/) (inspiration for exercise 1)

[How to Build a Todo List with React Hooks](https://medium.freecodecamp.org/how-to-build-a-todo-list-with-react-hooks-ebaa4e3db3b) (inspiration for exercise 2)

[Refactoring a component to use React hooks](https://javascriptplayground.com/refactoring-to-react-hooks/) (inspiration for exercise 3)
