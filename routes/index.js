var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

// POST
router.post('/', function(req, res, next) {
		res.redirect('/loops')
});

module.exports = router;