var express = require('express');
var router = express.Router();

router.get('/txt', function(req, res, next) {
    res.render('displayGet',{title:'Hello World!'});
});

router.post('/txt', function(req, res, next) {
    res.render('displayPost',{title:req.body["title"] , len:req.body["title"].length});
});

module.exports=router