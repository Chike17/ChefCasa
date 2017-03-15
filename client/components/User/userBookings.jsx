import React from 'react';
import UserBooking from './userBooking.jsx';

class UserBookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        USER BOOKINGS:
        <UserBooking />
      </div>
    );
  }
};

module.exports = UserBookings;