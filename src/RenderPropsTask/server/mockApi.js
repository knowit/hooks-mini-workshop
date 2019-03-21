const userProfiles = [{ id: 1, name: "Johannes" }];

// Return 2-4 seconds delay
const getDelay = () => {
  return 2000 + 2000 * Math.random();
};

export const fetchUser = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      const userProfile = userProfiles.find(
        userProfile => userProfile.id === id
      );

      resolve(userProfile);
    }, getDelay());
  });
};
