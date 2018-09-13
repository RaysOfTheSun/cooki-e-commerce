let express = require('express');
let mongo = require('mongodb').MongoClient;
let router = express.Router();

let connString = "mongodb://localhost:27017/";

router.get('/index', (request, response, next) => {
    response.render('index');
});

router.get('/get-comments', (request, response, next) => {
    let commentCollection = [];
    mongo.connect(connString, { useNewUrlParser: true }, (err, db) => {
        let dbo = db.db('cookieStopdb');
        dbo.collection('comments').find().toArray((err, result) => {
            if (err) throw err;
            response.json(result);            
            db.close();
        })
    })
});

router.post('/index', (req, res, next) => {
    console.log('A POST has been made!');
    res.render('index');
})

module.exports = router;