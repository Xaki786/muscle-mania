import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import AddExercise from "../Exercises/AddExercise";
import { withContext } from "../../context";
const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));
const Header = ({ onAddExercise, editMode, selectedExercise }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MUSCLE MANIA
          </Typography>
          <AddExercise onAddExercise={onAddExercise} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withContext(Header);
