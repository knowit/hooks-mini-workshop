import { fetchUserFromApi } from "../server/mockApi";
import { useState } from "react";

export default () => {
  // 1. Create a userState hook for fetching data

  // 2. Create a method for fetching a user from the backend by id
  const fetchUser = id => {
    // 1. Update 'isLoading' before making the api call
    // 2. Make the api call and update 'isLoading'
  };

  // Return the following:
  // user: the current user
  // isLoading: whether we are currently fetching from the backend
  // fetchUser: a method for fetching a user by id.
  // return {
  //   user,
  //   isLoading,
  //   fetchUser: fetchUser
  // };
};
