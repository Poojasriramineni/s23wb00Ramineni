var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('umberlla', { title: 'Search Results umberlla' });
});

module.exports = router;
