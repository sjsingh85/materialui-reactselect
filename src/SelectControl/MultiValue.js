import React from "react";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  chip: {
    margin: `0 8px 5px 0`
  }
});

function MultiValue(props) {
  const { children, isDisabled, removeProps, classes } = props;

  function onDelete(e) {
    if (e.target.dataset.deleteicon || e.target.closest("[data-deleteicon]")) {
      removeProps.onMouseDown(e);
      removeProps.onClick();
    }
  }

  return (
    <Chip
      disabled={isDisabled}
      tabIndex={-1}
      label={children}
      deleteIcon={<CancelIcon data-deleteicon={true} />}
      onDelete={onDelete}
      onMouseDown={onDelete}
      className={classes.chip}
    />
  );
}

export default withStyles(styles)(MultiValue);
