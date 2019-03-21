import React from "react";

// 1. Hooks cannot be used in classes. Convert to component
class OneTimeButton extends React.Component {
  // 2. Remove old state handling, and use 'useState' instead
  state = {
    clicked: false
  };

  handleClick = () => {
    this.props.onClick();

    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.clicked}>
        You Can Only Click Me Once
      </button>
    );
  }
}

export default OneTimeButton;
