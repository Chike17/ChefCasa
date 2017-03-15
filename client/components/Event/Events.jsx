import React from 'react';
import Event from './event.jsx'

class Events extends React.Component {

  render() {
    return (
      <div>
        Events:
        <Event />
      </div>
    )
  }
};

module.exports = Events;