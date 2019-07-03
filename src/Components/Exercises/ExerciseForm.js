import React from "react";
import uuid from "uuid";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  DialogActions,
  MenuItem,
  Button
} from "@material-ui/core";
import { withContext } from "../../context";
const ExerciseForm = ({
  changeEditMode,
  onClickClose,
  editMode,
  selectedExercise,
  onUpdateExercise,
  onAddExercise,
  muscles
}) => {
  const exercise = editMode
    ? selectedExercise
    : {
        id: "",
        title: "",
        description: "",
        muscle: "",
        imageURL: ""
      };
  const [values, setValues] = React.useState(exercise);
  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };
  const onFormCancel = () => {
    if (!editMode) {
      return onClickClose();
    }
    changeEditMode();
  };
  const onFormSubmit = e => {
    e.preventDefault();
    const newExercise = {
      id: selectedExercise ? selectedExercise.id : uuid(),
      title: values.title,
      description: values.description,
      imageURL: values.imageURL,
      muscle: values.muscle
    };
    editMode ? onUpdateExercise(newExercise) : onAddExercise(newExercise);
    setValues({
      id: "",
      title: "",
      description: "",
      muscle: "",
      imageURL: ""
    });
    if (!editMode) {
      onClickClose();
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <DialogTitle id="form-dialog-title">
        {editMode ? selectedExercise.title : "Add New Exercise"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add Exercise Title, Description, image url and muscle category of the
          exercise
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          value={values.title}
          onChange={handleChange("title")}
          id="title"
          type="text"
          label="Title of the Exercise"
          fullWidth
          required
        />
        <TextField
          margin="dense"
          value={values.imageURL}
          onChange={handleChange("imageURL")}
          id="title"
          type="text"
          label="Enter url of the image"
          fullWidth
          required
        />
        <TextField
          value={values.description}
          onChange={handleChange("description")}
          margin="dense"
          id="title"
          type="textarea"
          multiline={true}
          rows={5}
          rowsMax={8}
          label="Description of the Exercise"
          fullWidth
          required
        />
        <TextField
          margin="dense"
          id="title"
          type="text"
          select
          value={values.muscle}
          onChange={handleChange("muscle")}
          label="Select Muscle Group"
          fullWidth
          required
        >
          {muscles.map(muscleCategory => (
            <MenuItem key={muscleCategory} value={muscleCategory}>
              {muscleCategory.toUpperCase()}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={onFormCancel}
        >
          Cancel
        </Button>
        <Button color="primary" size="small" variant="outlined" type="submit">
          {editMode ? "Update Exercise" : "Add Exercise"}
        </Button>
      </DialogActions>
    </form>
  );
};

export default withContext(ExerciseForm);
