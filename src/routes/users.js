var express = require('express');
var router = express.Router();
var User = require('../model/user');


// var db = mongoose.connect('mongodb://localhost/db_598');

/* GET users listing. */
router.get('/', function(req, res, next) {

  // get all the users
  User.find({}, function(err, users) {
    if (err) throw err;

    res.json(users);

  });


});

/* GET users listing. */
router.get('/new', function(req, res, next) {

  var chris = new User({
    name: 'Chris',
    about: 'Hello World'
  });

  // call the built-in save method to save to the database
  chris.save(function(err, data) {
    if (err) throw err;

    console.log('User saved successfully!');
    res.json(data);
  });





});

module.exports = router;
