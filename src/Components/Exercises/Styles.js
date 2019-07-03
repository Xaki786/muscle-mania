import { makeStyles } from "@material-ui/core";
export default {
  ExerciseList: makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    Paper: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      height: 500,
      overflowY: "auto"
    },
    capitilize: {
      textTransform: "capitalize"
    },
    icon: {
      margin: theme.spacing(0),
      fontSize: 18
    }
  })),
  index: makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    Paper: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      height: 500,
      overflowY: "auto"
    },
    capitilize: {
      textTransform: "capitalize"
    }
  })),
  SelectedExercise: makeStyles(theme => ({
    card: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      height: 500,
      overflowY: "auto"
    },
    media: {
      height: "auto",
      paddingTop: "56%" // 16:9/
    }
  }))
};
