import React, {useContext} from "react";
import {SelectControlContext} from "./index";

const styles = hasValue => ({
  padding: hasValue ? "1px 0 3px" : "3px 0 5px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  position: "relative"
});

const ControlComponent = props => {
  const {
    children,
    cx,
    hasValue,
    isDisabled,
    isFocused,
    innerProps: { innerRef, ...otherInnerProps }
  } = props;

  const state = useContext(SelectControlContext);

  if (state.shrinkInputLabel !== (hasValue || isFocused)) {
    state.triggerShrinkChange(hasValue || isFocused);
  }

  if (state.focusInputLabel !== isFocused) {
    state.triggerFocusChange(isFocused);
  }

  return (
    <div
      className={cx('control', { isDisabled, isFocused })}
      style={styles(hasValue)}
      ref={innerRef}
      {...otherInnerProps}
    >
      {children}
    </div>
  );
};

export default ControlComponent;
