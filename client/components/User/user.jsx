import React from 'react';
import {Grid, Row, Col, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import Thumbnail from './thumbnail.jsx';
import UserBookings from './userBookings.jsx'
import Events from './../Event/Events.jsx'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewBookings: false,
      viewEvents: false
    };

    this.handleViewBookings = this.handleViewBookings.bind(this);
    this.handleViewEvents = this.handleViewEvents.bind(this);
    this.handleViewProfile = this.handleViewProfile.bind(this);
  }

  handleViewBookings() {
    this.setState({
      viewBookings: true,
      viewEvents: false
    });
  }

  handleViewEvents() {
    this.setState({
      viewBookings: false,
      viewEvents: true
    });
  }

  handleViewProfile() {
    this.setState({
      viewBookings: false,
      viewEvents: false
    });
  }

  render() {
    return (
      <div >
        <h1 className="spacerL90">USER DASHBOARD</h1>
        
        <Grid>
          <Row>  
            <Col xs={8} md={8}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button bsStyle="primary" onClick={this.handleViewProfile}>View Profile</Button>
                  <Button onClick={this.handleViewBookings}>View Bookings</Button>
                  <Button onClick={this.handleViewEvents}>View Events</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="spacerT10">
            <Col sm={4}>
              {Thumbnail} 
            </Col>
            <Col sm={8}>
              {this.state.viewBookings && <UserBookings/>}
              {this.state.viewEvents && <Events />}
            </Col>
          </Row>
          
        </Grid>
      </div>
    );
  }
}

module.exports = User;

