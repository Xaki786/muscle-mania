import React, { Fragment } from "react";
import { Fab, Dialog } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import ExerciseForm from "./ExerciseForm";
const AddExercise = () => {
  const [open, setOpen] = React.useState(false);
  const onClickOpen = () => setOpen(true);
  const onClickClose = () => setOpen(false);
  return (
    <Fragment>
      <Fab color="secondary" size="medium" onClick={onClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={onClickClose}>
        <ExerciseForm onClickClose={onClickClose} />
      </Dialog>
    </Fragment>
  );
};

export default AddExercise;
