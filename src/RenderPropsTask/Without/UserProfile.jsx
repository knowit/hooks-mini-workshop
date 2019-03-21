import React from "react";
import ThemeContext from "../ThemeProvider";
import UserProfileProvider from "./UserProfileProvider";

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
  return (
    <UserProfileProvider id={props.id}>
      {(userProfile, isLoading) =>
        isLoading ? (
          "Laster..."
        ) : (
          <ThemeContext.Consumer>
            {val => (
              <div style={styles[val]}>
                {`Brukernavn: ${userProfile ? userProfile.name : ""}`}
                {val}
              </div>
            )}
          </ThemeContext.Consumer>
        )
      }
    </UserProfileProvider>
  );
};

export default UserProfile;
