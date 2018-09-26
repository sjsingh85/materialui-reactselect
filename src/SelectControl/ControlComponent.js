import React from "react";
import SelectControlContext from "./SelectControlContext";

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

  return (
    <SelectControlContext.Consumer>
      {({
        shrinkInputLabel,
        focusInputLabel,
        triggerShrinkChange,
        triggerFocusChange
      }) => {
        if (shrinkInputLabel !== (hasValue || isFocused)) {
          triggerShrinkChange(hasValue || isFocused);
        }

        if (focusInputLabel !== isFocused) {
          triggerFocusChange(isFocused);
        }

        return (
          <div
            className={cx("control", { isDisabled, isFocused })}
            style={styles(hasValue)}
            ref={innerRef}
            {...otherInnerProps}
          >
            {children}
          </div>
        );
      }}
    </SelectControlContext.Consumer>
  );
};

export default ControlComponent;
