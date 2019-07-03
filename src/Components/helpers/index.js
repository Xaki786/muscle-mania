export const groupExercises = (exercises, muscles) => {
  const initExercises = muscles.reduce(
    (exercises, muscle) => ({
      ...exercises,
      [muscle]: []
    }),
    {}
  );
  return Object.entries(
    exercises.reduce((exercises, exercise) => {
      const { muscle } = exercise;
      exercises[muscle] = [...exercises[muscle], exercise];
      return exercises;
    }, initExercises)
  );
};
