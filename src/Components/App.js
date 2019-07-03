import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { exercises, muscles } from "../store";
import { Container } from "@material-ui/core";
import { Provider } from "../context";
import { groupExercises } from "./helpers";
class App extends Component {
  state = {
    exercises,
    muscles,
    selectedMuscle: "",
    selectedExercise: null,
    editMode: false
  };
  groupExercisesByMuscle = muscle => {
    let groupedExercises = null;
    if (this.state.selectedMuscle === "") {
      groupedExercises = groupExercises(
        this.state.exercises,
        this.state.muscles
      );
    } else {
      const requiredExercises = this.state.exercises.filter(
        exercise => exercise.muscle === muscle
      );
      groupedExercises = groupExercises(requiredExercises, [muscle]);
    }
    return groupedExercises;
  };
  onSelectMuscle = muscle => {
    this.setState({ selectedMuscle: muscle });
  };
  onSelectExercise = exercise => {
    this.setState({
      editMode: false,
      selectedExercise: exercise
    });
  };
  onAddExercise = exercise => {
    const { exercises } = this.state;
    exercises.push(exercise);
    this.setState(exercises);
  };
  onDeleteExercise = exercise => {
    this.setState(({ exercises, selectedExercise }) => ({
      exercises: exercises.filter(
        oldExercise => exercise.id !== oldExercise.id
      ),
      selectedExercise: null,
      editMode: false
    }));
  };
  onEditExercise = exercise => {
    this.setState({
      editMode: true,
      selectedExercise: exercise
    });
  };
  changeEditMode = () => {
    this.setState({ editMode: false });
  };
  onUpdateExercise = exercise => {
    const exercies = [...this.state.exercises];
    const index = exercies.findIndex(exercisef => exercise.id === exercisef.id);
    exercises[index] = exercise;
    this.setState({
      editMode: false,
      selectedExercise: exercise,
      exercies: [...exercies]
    });
  };
  getContext = () => ({
    ...this.state,
    onAddExercise: this.onAddExercise,
    onSelectMuscle: this.onSelectMuscle,
    changeEditMode: this.changeEditMode,
    onEditExercise: this.onEditExercise,
    onUpdateExercise: this.onUpdateExercise,
    onSelectExercise: this.onSelectExercise,
    onDeleteExercise: this.onDeleteExercise
  });
  render() {
    let groupedExercises = this.groupExercisesByMuscle(
      this.state.selectedMuscle
    );
    return (
      <Provider value={this.getContext()}>
        <Fragment>
          <Header groupedExercises={groupedExercises} />
          <Container>
            <Exercises groupedExercises={groupedExercises} />
            <Footer />
          </Container>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
