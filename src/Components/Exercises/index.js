import React from "react";
import ExerciseList from "./ExerciseList";
import { Grid } from "@material-ui/core";
import SelectedExercise from "./SelectedExercise";
import Styles from "./Styles";
export default ({ groupedExercises }) => {
  const classes = Styles.index();
  return (
    <Grid container direction="row">
      <Grid item md={4} sm={6} xs={12}>
        <ExerciseList groupedExercises={groupedExercises} classesd={classes} />
      </Grid>
      <Grid item md={8} sm={6} xs={12}>
        <SelectedExercise classesd={classes} />
      </Grid>
    </Grid>
  );
};
