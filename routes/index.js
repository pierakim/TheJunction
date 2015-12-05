var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '@pierakim' });
});

router.get('/junction', function(req, res, next) {
  res.render('junction');
});

module.exports = router;
