import React from "react";

const SelectControlContext = React.createContext({
  shrinkInputLabel: false,
  focusInputLabel: false,
  triggerShrinkChange: () => {},
  triggerFocusChange: () => {}
});

export default SelectControlContext;
