var Sequelize = require('sequelize');
var connection = new Sequelize('chefcasa', 'root', '');

var User = connection.define('Users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

var Host = connection.define('Host', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

var Location = connection.define('Locations', {
  state: Sequelize.STRING,
  city: Sequelize.STRING,
  zipCode: Sequelize.STRING,
  address: Sequelize.STRING
});

var Review = connection.define('Reviews', {
  comment: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  reviewType: Sequelize.STRING
});

var Event = connection.define('Events', {
  startTime: Sequelize.DATE,
  endTime: Sequelize.DATE, 
  cuisine: Sequelize.STRING,
  maxSeats: Sequelize.INTEGER,
  price: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.STRING
});

var UserBooking = connection.define('UserBookings', {
});

var Menu = connection.define('Menus', {
  MenuItemDesc: Sequelize.STRING
});

User.belongsTo(Location);
Host.belongsTo(Location);

User.hasMany(Review);
Host.hasMany(Review);

Host.hasMany(Event);
Location.hasMany(Event);

User.belongsToMany(Event, {through: 'UserBookings'});
Event.belongsToMany(User, {through: 'UserBookings'});

User.hasMany(Menu, {as: 'Menus'});

module.exports = {
  connection: connection,
  User: User,
  Host: Host,
  Location: Location,
  Review: Review,
  Event: Event,
  UserBooking: UserBooking,
  Menu: Menu
};

connection.sync();
