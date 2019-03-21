import { fetchUser } from "../../server/mockApi";
import { useState } from "react";

export default () => {
  const [data, setData] = useState({ isLoading: false, user: undefined });

  const { user, isLoading } = data;

  return {
    user,
    isLoading,
    fetchUser: id => {
      setData({ ...data, isLoading: true });
      fetchUser(id).then(user => {
        setData({ isLoading: false, user });
      });
    }
  };
};
