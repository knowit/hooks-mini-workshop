import React, { useState } from "react";

const OneTimeButton = props => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setHasBeenClicked(true);
        props.onClick();
      }}
      disabled={hasBeenClicked}
    >
      You Can Only Click Me Once
    </button>
  );
};

export default OneTimeButton;
