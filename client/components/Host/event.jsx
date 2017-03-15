import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggle() {
    this.setState({visible: !this.state.visible});
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  display() {
    return (
      <ul>
        <li>{this.props.event.startTime.toDateString()}</li>
        <li>{this.formatAMPM(this.props.event.startTime) + ' - ' +
          this.formatAMPM(this.props.event.endTime)}</li>
        <li>{this.props.event.cuisine}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h5 className="upcomming-event" onClick={this.toggle.bind(this)}>{this.props.event.title}</h5>
        {this.state.visible && this.display()}
      </div>
    );
  }
}

module.exports = Event;

