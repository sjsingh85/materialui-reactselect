import React from "react";
import { ListItemText, ListItem } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  isSelected: {
    backgroundColor: theme.palette.action.selected
  },
  isFocused: {
    backgroundColor: theme.palette.action.hover
  },
  buttonHover: {
    "&:hover": {
      backgroundColor: theme.palette.action.selected
    }
  }
});

class SelectOption extends React.Component {
  render() {
    const {
      onFocus,
      isFocused,
      isSelected,
      children,
      innerProps: { ...otherInnerProps },
      classes
    } = this.props;

    const appliedClasses = classNames({
      [classes.isSelected]: isSelected,
      [classes.isFocused]: !isSelected && isFocused
    });

    return (
      <ListItem
        button
        onFocus={onFocus}
        className={appliedClasses}
        classes={{ button: isSelected ? classes.buttonHover : null }}
        {...otherInnerProps}
      >
        <ListItemText primary={children} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(SelectOption);
