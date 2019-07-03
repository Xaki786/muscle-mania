import React from "react";
import { Paper, Tabs, Tab, makeStyles } from "@material-ui/core";
import { withContext } from "../../context";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 30
  }
}));
const Footer = ({ muscles, onSelectMuscle, selectedMuscle }) => {
  const index = selectedMuscle
    ? muscles.findIndex(muscle => selectedMuscle === muscle) + 1
    : 0;
  const classes = useStyles();

  let musclesTab = null;
  if (muscles && muscles.length > 0) {
    musclesTab = muscles.map(muscle => <Tab key={muscle} label={muscle} />);
  }
  const onTabChange = (e, index) => {
    onSelectMuscle(index === 0 ? "" : muscles[index - 1]);
  };
  return (
    <Paper className={classes.root}>
      <Tabs
        value={index}
        onChange={onTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
      >
        <Tab label="All" />
        {musclesTab}
      </Tabs>
    </Paper>
  );
};

export default withContext(Footer);
