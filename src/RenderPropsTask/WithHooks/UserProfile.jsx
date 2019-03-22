import React, { useContext, useEffect } from "react";

import ThemeContext from "../ThemeProvider";
import useUserProfileState from "./useUserProfileState";

const styles = {
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  }
};

const UserProfile = props => {
  const { user, isLoading, fetchUser } = useUserProfileState();
  const val = useContext(ThemeContext);

  useEffect(() => fetchUser(props.id), [props.id]);
  return (
    <div style={styles[val]}>
      {isLoading
        ? "Laster..."
        : user
        ? user.name
        : "Spiller finnes ikke, eller er for dårlig til å være med."}
    </div>
  );
};

export default UserProfile;
