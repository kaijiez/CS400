const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/config.js');

// const key = '2972d7072c224b92b51e32b91d73aa58';

const getNews = function(searchTerm){
    return new Promise(function (resolve, reject){
        //get top 5 newest new results
        var options = {
            'method': 'GET',
            'url': 'https://newsapi.org/v2/everything?q='+searchTerm+'&pageSize=5&page=1',
            'headers': {
                'X-Api-Key': config.key
            }
        };
        request(options, function (error, response) {
            if (error){
                reject(new Error(error));
            }
            else{
                console.log(response.body);
                resolve(response.body)
            }
        });
    })
}

/* GET home page. */
router.get('/getnews', function(req, res, next) {

    getNews('corona virus')
        .then(function(body){
            //API result comes back
            console.log(body)
            body = JSON.parse(body)
            const articles= body["articles"];
            res.render('ps4', { title: " PS4 Corona News", articles:articles});
        })
        .catch(function(err){
            console .log(err);
        })
});

module.exports = router;