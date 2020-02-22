var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/now', function(req, res, next) {
  res.render('index',{title:'Hello World!'});
});

router.post('/now', function(req, res, next) {
  res.render('index',{title:req.body["title"] , len:req.body["title"].length});
});

module.exports = router;
