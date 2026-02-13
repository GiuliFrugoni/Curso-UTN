var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary').v2

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
