const userProfiles = [
  { id: 1, name: "De Gea" },
  { id: 2, name: "Lindeloff" },
  { id: 3, name: "Bailly" },
  { id: 4, name: 'Phil "the face" Jones' },
  { id: 6, name: "Pogba" },
  { id: 7, name: "..." },
  { id: 8, name: "Mata" },
  { id: 9, name: "Lukaku" },
  { id: 10, name: "Rashford" },
  { id: 11, name: "Martial" },
  { id: 12, name: "Smalling" },
  { id: 14, name: "Lingard" },
  { id: 18, name: "Young" },
  { id: 20, name: "Dalot" },
  { id: 23, name: "Shaw" },
  { id: 26, name: "Herrera" }
];

// Return 2-4 seconds delay
const getDelay = () => {
  return 1000 + 1000 * Math.random();
};

export const fetchUserFromApi = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      const userProfile = userProfiles.find(
        userProfile => userProfile.id == id
      );

      resolve(userProfile);
    }, getDelay());
  });
};
