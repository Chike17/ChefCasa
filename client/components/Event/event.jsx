import React from 'react';
import $ from 'jquery';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [[], [], []] // [events, locations, hosts]
    };

    var context = this;
    $.ajax({
      url: '/getEvents',
      method: 'GET',
      success: function(data) {
        console.log(JSON.parse(data));
        context.setState({
          events: JSON.parse(data)
        });
      },
      error: function(err, data) {
        console.log(err, data);
        throw err;
      }
    });

    this.handleSeatBooking = this.handleSeatBooking.bind(this);
  }

  handleSeatBooking(index) {
    $.ajax({
      url: 'userBooksEvent',
      method: 'POST',
      success: function() {

      },
      error: function() {

      }
    })
  }

  render() {
    var context = this;
    return (
      <div>
        {this.state.events[0].map(function(event, index) {
          var locations = context.state.events[1];
          var eventLocation = 'UNKNOWN';
          for(let i = 0; i < locations.length; i++) {
            if (locations[i].id === event.LocationId) {
              eventLocation = locations[i].address + ', ' + locations[i].city + ', ' + locations[i].state;
              break;
            }
          }

          var hosts = context.state.events[2];
          var eventHost = 'UNKNOWN';
          for (let i = 0; i < hosts.length; i++) {
            if (hosts[i].id === event.HostId) {
              eventHost = hosts[i].firstName + ' ' + hosts[i].lastName;
              break;
            }
          }

          return (
            <div key={index}>
              <ul>
                <li>Host: {eventHost}</li>
                <li>Address: {eventLocation}</li>
                <li>Theme: {event.cuisine}</li>
                <li>Price: {event.price}</li>
                <li>Max Seats: {event.maxSeats}</li>
                <li>Date: {event.startTime.slice(0,10)}</li>
              </ul>
              <button onClick={() => {handleSeatBooking(index)}}>Book a Seat</button>
            </div>
          );
        })}
      </div>
    );
  }
};

module.exports = Event;