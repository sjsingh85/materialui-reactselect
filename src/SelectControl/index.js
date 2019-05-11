import React, {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import SelectWrapperComponent from "./SelectWrapperComponent";

const styles = theme => ({
  root: { marginTop: 16 },
  inputControl: {
    padding: 0
  },
  formControl: {
    minWidth: 200
  }
});

export const SelectControlContext = React.createContext({
  shrinkInputLabel: false,
  focusInputLabel: false,
  triggerShrinkChange: () => {},
  triggerFocusChange: () => {}
});

/**
 * Use this control which is a wrapper on top of react-select
 */
function SelectControl (props) {
  const [state, setState] = useState({
    shrinkInputLabel: false,
    focusInputLabel: false,
    triggerShrinkChange: toggleShrink,
    triggerFocusChange: toggleFocus
  });

  function toggleShrink(newValue) {
    setState(prevState => {
      return { ...prevState, shrinkInputLabel: newValue };
    });
  }

  function toggleFocus(newValue) {
    setState(prevState => {
      return { ...prevState, focusInputLabel: newValue };
    });
  }

  const {
    classes,
    inputProps: { placeholder, ...otherInputProps },
    ...otherProps
  } = props;

  return (
    <FormControl className={classes.formControl} {...otherProps}>
      <SelectControlContext.Provider value={state}>
        <InputLabel shrink={state.shrinkInputLabel} focused={state.focusInputLabel}>
          {placeholder}
        </InputLabel>
        <Input
          inputComponent={SelectWrapperComponent}
          className={classes.inputControl}
          inputProps={otherInputProps}
        />
      </SelectControlContext.Provider>
    </FormControl>
  );
}

export default withStyles(styles)(SelectControl);
