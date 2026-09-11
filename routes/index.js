var express = require('express');
var router = express.Router();

var resenasData = require('../data/resenas.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    resenas: resenasData 
  });
});

module.exports = router;
