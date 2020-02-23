var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PS3' });
});

router.get('/txt', function(req, res, next) {
  res.render('index',{title:'Hello World!'});
});

router.post('/txt', function(req, res, next) {
  res.render('display',{title:req.body["title"] , len:req.body["title"].length});
});

module.exports = router;
