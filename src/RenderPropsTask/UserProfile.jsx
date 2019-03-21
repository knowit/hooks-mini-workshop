import React from "react";
import ThemeContext from "./ThemeProvider";
import UserProfileProvider from "./UserProfileProvider";
// import useUserProfileState from "./useUserProfileState";

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
  // Make use of 'user
  // Use the following hooks instead of the render props below
  // const { user, isLoading, fetchUser } = useUserProfileState();
  // const val = useContext(ThemeContext);

  return (
    <UserProfileProvider id={props.id}>
      {(userProfile, isLoading) =>
        isLoading ? (
          "Laster..."
        ) : (
          <ThemeContext.Consumer>
            {val => (
              <div style={styles[val]}>
                {`Brukernavn: ${
                  userProfile
                    ? userProfile.name
                    : "Spiller finnes ikke, eller er for dårlig til å være med."
                }`}
              </div>
            )}
          </ThemeContext.Consumer>
        )
      }
    </UserProfileProvider>
  );
};

export default UserProfile;
