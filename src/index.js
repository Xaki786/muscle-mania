import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { red, indigo, teal, grey, lime, green } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: green[900]
    }
  }
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
