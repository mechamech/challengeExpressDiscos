const express = require('express');
const router = express.Router();
const data = require('./data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
