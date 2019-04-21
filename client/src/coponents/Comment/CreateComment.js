import React from "react";
import { withStyles } from "@material-ui/core";

export default withStyles(styles)(CreateComment = ({ classes }) => {
  return <div>CreateComment</div>;
})

const styles = theme => ({
  form: {
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  clearButton: {
    padding: 0,
    color: "red"
  },
  sendButton: {
    padding: 0,
    color: theme.palette.secondary.dark
  }
});