import uuid from "uuid";
export const muscles = ["shoulders", "chest", "arms", "back", "legs"];

// chest
// https://cdn2-thevladarcompany.netdna-ssl.com/wp-content/uploads/2018/03/chris-bumstead-attacks-chest-day-header.jpg

// Back
// https://www.bodybuilding.com/fun/images/2014/18-laws-of-back-training-facebook-box-960x540.jpg
export const exercises = [
  {
    id: uuid(),
    title: "Overhead Press",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Delts exercise.",
    muscle: "shoulders",
    imageURL: process.env.PUBLIC_URL + "/images/overhead-press.jpg"
  },
  {
    id: uuid(),
    title: "Dips",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Triceps exercise.",
    muscle: "arms",
    imageURL: process.env.PUBLIC_URL + "/images/dips.jpg"
  },
  {
    id: uuid(),
    title: "Barbell Curls",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Biceps exercise.",
    muscle: "arms",
    imageURL: process.env.PUBLIC_URL + "/images/barbell-curls.jpg"
  },
  {
    id: uuid(),
    title: "Bench Press",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Chest exercise.",
    muscle: "chest",
    imageURL: process.env.PUBLIC_URL + "/images/bench-press.jpg"
  },
  {
    id: uuid(),
    title: "Pull Ups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Back and biceps exercise.",
    muscle: "back",
    imageURL: process.env.PUBLIC_URL + "/images/pull-ups.jpg"
  },
  {
    id: uuid(),
    title: "Deadlifts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Back and leg exercise.",
    muscle: "back",
    imageURL: process.env.PUBLIC_URL + "/images/deadlifts.jpg"
  },
  {
    id: uuid(),
    title: "Squats",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Legs exercise.",
    muscle: "legs",
    imageURL: process.env.PUBLIC_URL + "/images/squats.jpg"
  }
];
