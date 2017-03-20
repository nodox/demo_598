var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/srv', function(req, res, next) {
  res.send({ 'location': 'server 0' })
});

module.exports = router;
