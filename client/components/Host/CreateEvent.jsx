import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import {Jumbotron, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Image, DateTimePicker} from 'react-bootstrap';
import Calendar from 'rc-calendar';


class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '',
      endTime: '',
      day: '', 
      week: '',
      month: '',
      cuisine: '',
      address: '',
      city: '',
      state: '',
      maxseats: '',
      description: '',
      title: ''
    };
  }
  postEvent(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/postevent',
      data: {
        'startTime': this.state.startTime,
        'endTime': this.state.endTime,
        'day': this.handleInputDay(), 
        'week': this.state.week,
        'month': this.handleInputMonth(),
        'cuisine': this.state.cuisine,
        'address': this.state.address,
        'city': this.state.city,
        'state': this.state.state,
        'maxseats': this.state.maxseats,
        'description': this.state.description,
        'title': this.state.title
      },
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err);
      },
      dataType: 'json'
    });
  }
  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleInputDay() {
    var day = this.props.date.substring(2, 4);
    if (day[1] === '/') {
      day = day.substring(0, 1);
    }
    return day;

  }
  handleInputMonth() {
    var month = this.props.date.substring(0, 1);
    return month;
  }
  handleStartTime(e) {
    var start = e.target.value.substring(0, 1);
    this.setState({startTime: start});
  }
  handleEndTime (e) {
    var end = e.target.value.substring(0, 1);
    this.setState({endTime: end});
  }

  render () {
    return (
      <div>

        <Col >
        <Row className="show-grid">
        <Col md={12}>
        <form>
        <FormGroup
          controlId="formBasicText"
         >
        <FormControl
         name = 'title'
         onChange = {this.handleInputChange.bind(this)}
         type="text"
          placeholder = 'Title'
         />
        <FormControl.Feedback />
        </FormGroup>
        </form>
        </Col>
        </Row>


        <Row className="show-grid">
        <Col md={6}>
        <form>
        <FormGroup
         controlId="formBasicText"
           >
         <FormControl
          onChange = {this.handleStartTime.bind(this)}
          name = 'startTime'
          type="text"
          placeholder = 'e.g. 6:00 p'
         />
        <FormControl.Feedback />
        </FormGroup>
        </form>
        </Col>
        <Col md={6}>
        <form>
        <FormGroup
            controlId="formBasicText"
         >
        <FormControl
          onChange = {this.handleEndTime.bind(this)}
          name = 'endTime'
          type="text"
          placeholder = 'e.g. 8:00 p'
         />
        <FormControl.Feedback />
        </FormGroup>
        </form>
        </Col>
        </Row>

        <Row className="show-grid">
        <Col md={12}>
        <form>
        <FormGroup
         controlId="formBasicText"
        >
        <FormControl
          name = 'cuisine'
          type="text"
          onChange = {this.handleInputChange.bind(this)}
          placeholder = 'Cuisine e.g. Indian'
          />
         <FormControl.Feedback />
         </FormGroup>
         </form>
         </Col>
         </Row>


        <Row className="show-grid">
        <Col md={12}>
        <form>
        <FormGroup
          controlId="formBasicText"
          >
        <FormControl
          name = 'address'
          placeholder = 'Address'
          onChange = {this.handleInputChange.bind(this)}
          type="text"
          value = {this.state.address}
            />
        <FormControl.Feedback />
        </FormGroup>
        </form>
        </Col>
        </Row>


        <Row className="show-grid">
        <Col md={6}>
        <form>
        <FormGroup
         controlId="formBasicText"
        >
        <FormControl
         name = 'city'
         onChange = {this.handleInputChange.bind(this)}
         type="text"
         placeholder = 'City'
        />
        <FormControl.Feedback />
        </FormGroup>
        </form>
        </Col>
        <Col md={6}>
        <form>
        <FormGroup
         controlId="formBasicText"
          >
        <FormControl
          name = 'state'
          onChange = {this.handleInputChange.bind(this)}
          type="text"
          placeholder = 'State'
            />
         <FormControl.Feedback />
        </FormGroup>
        </form>
        </Col>
        </Row>


        <Row className="show-grid">
        <Col md={12}>
        <form>
        <FormGroup
          controlId="formBasicText"
          >
        <FormControl
          placeholder = 'Max Seats'
          name = 'maxseats'
          onChange = {this.handleInputChange.bind(this)}
          type="text"
        />
        <FormControl.Feedback />
        </FormGroup>
        </form>
        </Col>
        </Row>


        <Row className="show-grid">
        <Col md={12}>
        <form>
        <FormGroup
        controlId="formBasicText"
        >
        <FormControl
          name = 'description'
          type="text"
          componentClass="textarea"
          placeholder = "What should your guests expect?"
          onChange = {this.handleInputChange.bind(this)}
         />
        <FormControl.Feedback />
        </FormGroup>
        </form>
        </Col>
        </Row>

         &nbsp;
         <Row className="show-grid">
         <Col md={4}>
         <form onSubmit={this.postEvent.bind(this)}>
         <Button type="submit"> Create an Event!</Button>
         </form>
         </Col>
         </Row>
         </Col>

      </div>

    );
  }
}

module.exports = CreateEvent;

