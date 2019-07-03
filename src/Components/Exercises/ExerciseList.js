import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import Styles from "./Styles";
import { withContext } from "../../context";
const ExerciseList = ({
  groupedExercises,
  onSelectExercise,
  onDeleteExercise,
  onEditExercise,
  classesd
}) => {
  let divI = null;
  const classes = Styles.ExerciseList();
  divI = groupedExercises.map(([group, exercises]) => {
    return (
      <div key={group}>
        <Typography variant="h6" className={classes.capitilize} color="primary">
          {group}
        </Typography>
        <div className={classes.root}>
          <List
            component="ul"
            aria-label="List grouped by muscles"
            dense={true}
          >
            {exercises.map(exercise => {
              const { title, id } = exercise;
              return (
                <ListItem
                  button
                  key={id}
                  onClick={() => onSelectExercise(exercise)}
                >
                  <ListItemText primary={title} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="Edit"
                      color="primary"
                      onClick={() => onEditExercise(exercise)}
                    >
                      <EditIcon className={classes.icon} />
                    </IconButton>
                    <IconButton
                      edge="end"
                      color="primary"
                      aria-label="Delete"
                      onClick={() => onDeleteExercise(exercise)}
                    >
                      <DeleteIcon className={classes.icon} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    );
  });
  return <Paper className={classesd.Paper}>{divI} </Paper>;
};

export default withContext(ExerciseList);
