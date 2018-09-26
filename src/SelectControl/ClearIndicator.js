import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

export const ClearIndicatorStyles = (base, state) => {
  return {
    ...base,
    cursor: "pointer",
    color: state.isFocused ? "rgba(0,0,0,0.87)" : "rgba(0,0,0,0.54)",
    padding: 2
  };
};

const ClearIndicator = props => {
  const { getStyles, innerProps: { ref, ...restInnerProps } } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles("clearIndicator", props)}
      title="Clear Value"
    >
      <ClearIcon />
    </div>
  );
};

export default ClearIndicator;
