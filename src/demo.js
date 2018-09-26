import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SelectControl from "./SelectControl/index";

const styles = theme => ({
  root: {
    // flexGrow: 1
  },
  formControl: {
    minWidth: 320
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  /*For Some odd reason, codesandbox requires this, works fine 
  in chrome otherwise without this */
  "@global": {
    "#react-select-single, #react-ns-multi": {
      padding: 0
    }
  }
});

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

class IntegrationReactSelect extends React.Component {
  state = {
    single: null
  };

  handleChangeSingle = singleValue => {
    this.setState({
      single: singleValue
    });
  };

  render() {
    const { classes } = this.props;
    const { single } = this.state;

    return (
      <div className={classes.root}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SelectControl
            className={classes.formControl}
            inputProps={{
              value: single,
              onChange: this.handleChangeSingle,
              placeholder: "Select searchable ",
              instanceId: "react-select-single",
              id: "react-select-single",
              name: "react-select-single",
              isSearchable: true,
              options: suggestions,
              isClearable: true
            }}
          />
          <br />
          <SelectControl
            fullWidth
            inputProps={{
              isMulti: true,
              placeholder: "Select multi non-searchable ",
              instanceId: "react-ns-multi",
              id: "react-ns-multi",
              name: "react-ns-multi",
              isSearchable: false,
              closeMenuOnSelect: false,
              options: suggestions,
              backspaceRemoves: true,
              isClearable: true,
              cacheOptions: true,
              defaultOptions: true
            }}
          />
        </div>
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntegrationReactSelect);
