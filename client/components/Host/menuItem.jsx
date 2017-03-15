import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Col, Row, Button, HelpBlock, ButtonToolbar, MenuItem, DropdownButton, SplitButton} from 'react-bootstrap';
// eslint-disable-next-line no-use-before-define

const MenuItm = React.createClass({
  getInitialState(props) {
    return {
      item: '',
      select: ''
    };
  },

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
    this.props.getFormData(this.props.index, name, event.target.value);
  },
  
  render() {
    return (
      <form className="form-inline">
        <FormGroup controlId="formBasicText" className="horizontal" >
          <ControlLabel>Menu Item </ControlLabel>
          <FormControl
            className="spacerR5 spacerL5"
            type="text"
            name="item"
            value={this.state.item}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <ControlLabel>Select</ControlLabel>
          <FormControl className="spacerL5 " type="text" name="select" value={this.state.select} onChange={this.handleChange} componentClass="select" >
            <option value="Select">Select</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Desert">Desert</option>
            <option value="Drinks">Drinks</option>

          </FormControl>
        </FormGroup>
        

        
      </form>
    );
  }
});
module.exports = MenuItm;
 