import React from 'react';
import Event from './event.jsx';

class ViewEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    fetch('/api/allUpcommingEvents', {method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        data[i].startTime = new Date(data[i].startTime);
        data[i].endTime = new Date(data[i].endTime);
      }

      this.setState({events: data});
    })
    .catch((err) => console.log('Request Failed: ', err));
  }

  render() {
    var context = this;
    var list = this.state.events.map((item) =>
      <div key={item.id}>
        <Event event={item}/>
      </div>
    );
    return (
      <div>
        <h4>Upcoming Events</h4>
        {list}
      </div>
    );
  }
}

module.exports = ViewEvents;

