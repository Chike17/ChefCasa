var Sequelize = require('sequelize');
var connection = new Sequelize('chefcasa', 'root', 'NaijaBoy1785');

var Models = require('../chefcasadatabase.js');
var User = Models.User;
var Location = Models.Location;
var UserPreference = Models.UserPreference;
var Host = Models.Host;
var Review = Models.Review;
var Menu = Models.Menu;
var Event = Models.Event;
var UserBooking = Models.UserBooking;
var Specialty = Models.Specialty;


var express = require('express');
var path = require('path');

var app = express();
var port = 8080;

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

var list = [];
app.get('/events', function (req,res) {
  res.status = 200;
  Event.findAll({}).then(function (events) {
    events.forEach(function (event) {
      list.push(event.get());
   });
   res.send(list);
  });
});


/* HOW TO MANIPULATE AND SERVE THE DATA */

/// HOW TO ADD AN EVENT

// var location = Location.build({
//   'City': 'San Francisco',
//   'State': 'California'
// }).save().then(function (location) {
//    var event = Event.build({
//      'TimeStamp': Date(),
//      'Cuisine' : 'Ethiopian',
//      'Address': '15 Rill Street',
//      'LocationId': location.get('id') // ** implementing foreign key
//    }).save();
// });


// HOW TO SERVE EVENTS

// var list = [];
// Event.findAll({
//  'attributes': ['Address']
// }).then(function (events) {
//   events.forEach(function (event) {
//    list.push(event.get())
//   })
//   console.log(list);
// })


// HOW TO DELETE AN EVENT
// Event.destroy({where:{MaxsSeats:'20'}});

// CAN ALSO DELETE AN EVENT THIS WAY
// Event.findAll({
//   where: {MaxsSeats: '10'}
// }).then(function (events) {
//   events.forEach(function (event) {
//    event.destroy();
//   });
// });


// HOW TO UPDATE AN EVENT
// Event.update({Address: '1050 Tremont Street'},{where: {Address: '111 Brannan Street'}})




