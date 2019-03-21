import React from "react";

class OneTimeButton extends React.Component {
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
