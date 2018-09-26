import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import SelectWrapperComponent from "./SelectWrapperComponent";
import SelectControlContext from "./SelectControlContext";

const styles = theme => ({
  root: { marginTop: 16 },
  inputControl: {
    padding: 0
  },
  formControl: {
    minWidth: 200
  }
});

/**
 * Use this control which is a wrapper on top of react-select
 */
class SelectControl extends React.Component {
  constructor(props) {
    super(props);

    this.toggleShrink = newValue => {
      this.setState({ shrinkInputLabel: newValue });
    };

    this.toggleFocus = newValue => {
      this.setState({ focusInputLabel: newValue });
    };

    this.state = {
      shrinkInputLabel: false,
      focusInputLabel: false,
      triggerShrinkChange: this.toggleShrink,
      triggerFocusChange: this.toggleFocus
    };
  }

  render() {
    const {
      classes,
      inputProps: { placeholder, ...otherInputProps },
      ...otherProps
    } = this.props;

    return (
      <FormControl className={classes.formControl} {...otherProps}>
        <SelectControlContext.Provider value={this.state}>
          <SelectControlContext.Consumer>
            {({ shrinkInputLabel, focusInputLabel }) => (
              <InputLabel shrink={shrinkInputLabel} focused={focusInputLabel}>
                {placeholder}
              </InputLabel>
            )}
          </SelectControlContext.Consumer>
          <Input
            inputComponent={SelectWrapperComponent}
            className={classes.inputControl}
            inputProps={otherInputProps}
          />
        </SelectControlContext.Provider>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectControl);
