import React, { Fragment } from "react";
import ExerciseForm from "./ExerciseForm";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { withContext } from "../../context";
import Styles from "./Styles";
const SelectedExercise = ({
  changeEditMode,
  selectedExercise,
  muscles,
  editMode,
  onEditExercise,
  onUpdateExercise
}) => {
  const classes = Styles.SelectedExercise();
  let title = "Welcome";
  let description = "Please select an Exercise";
  let imageURL = " ";
  if (selectedExercise) {
    title = selectedExercise.title;
    description = selectedExercise.description;
    imageURL = selectedExercise.imageURL;
  }
  return (
    <Card className={classes.card}>
      {editMode ? (
        <ExerciseForm
          selectedExercise={selectedExercise}
          editMode={editMode}
          onEditExercise={onEditExercise}
          onUpdateExercise={onUpdateExercise}
          changeEditMode={changeEditMode}
        />
      ) : (
        <Fragment>
          <CardHeader title={title} subheader="June 22, 2019" />
          <div>
            <CardMedia
              image={imageURL}
              title={title}
              className={classes.media}
            />
          </div>
          <CardContent>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
        </Fragment>
      )}
    </Card>
  );
};

export default withContext(SelectedExercise);
