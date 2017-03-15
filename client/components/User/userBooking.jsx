import React from 'react';
import $ from 'jquery';
class UserBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [[], [], []] // [events, locations, hosts]
    }

    // ajax request to the server to pull
    var context = this;
    $.ajax({
      url: '/getUserEvents',
      method: 'GET',
      success: function(data) {
        var eventData = JSON.parse(data);
        context.setState({
          events: eventData
        });
      },
      error: function(err, data) {
        console.log(err, data);
        throw err;
      }
    });
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
                <li>Date: {event.startTime.slice(0,10)}</li>
              </ul>
              <button>Cancel Booking</button>
            </div>
          );
        })}
      </div>
    );
  }
}

module.exports = UserBooking;