var Models = require('../chfcasadatabase.js');

// Generate User Locations
Models.Location.build({
  state: 'TX',
  city: 'Houston',
  zipCode: '90210',
  address: '123 Cherry Lane',
}).save();

Models.Location.build({
  state: 'NC',
  city: 'Fayetteville',
  zipCode: '90210',
  address: '2014 Forrest Hills Drive',
}).save();

Models.Location.build({
  state: 'IL',
  city: 'Chicago',
  zipCode: '90210',
  address: '808 South Shore Drive',
}).save();


// Generate Host Locations
Models.Location.build({
  state: 'FL',
  city: 'Miami',
  zipCode: '90210',
  address: '457 Ocean Boulevard',
}).save();

Models.Location.build({
  state: 'LA',
  city: 'New Orleans',
  zipCode: '90210',
  address: '510 Bourbon Street',
}).save();

Models.Location.build({
  state: 'NY',
  city: 'New York City',
  zipCode: '90210',
  address: '106 Park Streed',
}).save();


// Generate Users
Models.User.build({
  firstName: 'Neil',
  lastName: 'Armstrong',
  LocationId: 1
}).save();

Models.User.build({
  firstName: 'Jermaine',
  lastName: 'Cole',
  LocationId: 2
}).save();

Models.User.build({
  firstName: 'Kanye',
  lastName: 'West',
  LocationId: 3
}).save();


// Generate Hosts
Models.Host.build({
  firstName: 'Alfredo',
  lastName: 'Linguini',
  LocationId: 4
}).save();

Models.Host.build({
  firstName: 'Emeril',
  lastName: 'Lagasse',
  LocationId: 5
}).save();

Models.Host.build({
  firstName: 'Bobby',
  lastName: 'Flay',
  LocationId: 6
}).save();


// Generate Reviews
Models.Review.build({
  comment: 'The food was great!',
  rating: 5,
  reviewType: 'User',
  UserId: 1,
  HostId: 2
}).save();

Models.Review.build({
  comment: 'Really nice diner',
  rating: 4,
  reviewType: 'Host',
  UserId: 2,
  HostId: 3
}).save();

Models.Review.build({
  comment: 'Meh, it was so-so...',
  rating: 2,
  reviewType: 'User',
  UserId: 3,
  HostId: 1
}).save();


// Generate Events
Models.Event.build({
  title: 'The Last Fiesta',
  startTime: new Date(2017, 1, 8, 17),
  endTime: new Date(2017, 1, 8, 19),
  cuisine: 'Mexican',
  maxSeats: 8,
  price: '$$$',
  HostId: 2,
  LocationId: 5
}).save();

Models.Event.build({
  title: 'Rumble in the Jungle',
  startTime: new Date(2017, 1, 13, 18),
  endTime: new Date(2017, 1, 13, 20),
  cuisine: 'Ethiopian',
  maxSeats: 10,
  price: '$',
  HostId: 1,
  LocationId: 4
}).save();

Models.Event.build({
  title: 'Sushi Bonanza',
  startTime: new Date(2017, 1, 16, 19),
  endTime: new Date(2017, 1, 16, 21),
  cuisine: 'Japanese',
  maxSeats: 6,
  price: '$$',
  HostId: 3,
  LocationId: 6
}).save();


// Generate User Bookings
Models.UserBooking.build({
  UserId: 1,
  EventId: 1
}).save();

Models.UserBooking.build({
  UserId: 2,
  EventId: 1
}).save();

Models.UserBooking.build({
  UserId: 3,
  EventId: 1
}).save();

Models.UserBooking.build({
  UserId: 1,
  EventId: 2
}).save();

Models.UserBooking.build({
  UserId: 2,
  EventId: 2
}).save();

Models.UserBooking.build({
  UserId: 3,
  EventId: 3
}).save();
