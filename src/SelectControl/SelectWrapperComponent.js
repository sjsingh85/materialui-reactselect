import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import Async from "react-select/lib/Async";
import SelectMenuItem from "./SelectMenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ClearIndicator, { ClearIndicatorStyles } from "./ClearIndicator";
import ControlComponent from "./ControlComponent";
import MultiValue from "./MultiValue";

function SelectWrapperComponent({ async, ...otherProps }) {
  const Component = async ? Async : Select;
  return (
    <Component
      styles={{
        clearIndicator: ClearIndicatorStyles,
        valueContainer: ({ padding, ...otherBase }) => {
          return { ...otherBase };
        },
        container: base => {
          return { ...base, padding: 0 };
        },
        input: ({ margin, paddingBottom, paddingTop, ...otherBase }) => {
          return { ...otherBase, color: "rgba(0, 0, 0, 0.87)" };
        },
        placeholder: base => {
          return {
            ...base,
            marginLeft: 0,
            color: "rgba(0, 0, 0, 0.54)"
          };
        },
        singleValue: base => {
          return { ...base, marginLeft: 0, color: "rgba(0, 0, 0, 0.87)" };
        },
        control: base => {
          return { ...base, padding: "6px 0 7px", display: "flex" };
        }
      }}
      noOptionsMessage={() => "No results found"}
      components={{
        Option: ({ innerRef, ...props }) => {
          return (
            <SelectMenuItem
              ref={listItem => {
                innerRef &&
                  listItem &&
                  innerRef(ReactDOM.findDOMNode(listItem));
              }}
              {...props}
            />
          );
        },
        ClearIndicator: ClearIndicator,
        Control: ControlComponent,
        MultiValue: MultiValue,
        IndicatorSeparator: () => {
          return null;
        },
        DropdownIndicator: props => {
          return props.selectProps.menuIsOpen ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon color="action" />
          );
        },
        Placeholder: () => {
          return null;
        }
      }}
      {...otherProps}
    />
  );
}

export default SelectWrapperComponent;
