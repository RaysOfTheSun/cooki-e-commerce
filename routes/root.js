let express = require('express');
let mongo = require('mongodb').MongoClient;
let router = express.Router();

let connString = "mongodb://localhost:27017/";

router.get('/index', (request, response, next) => {
    response.render('index');
});

router.get('/get-products/everyday', (request, response)=>{
    mongo.connect(connString, {useNewUrlParser:true}, (err, db)=>{
        let dbo = db.db('cookieStop');
        dbo.collection('everydayCookies').find().toArray((err, result)=>{
           if (err) throw err;
           response.json(result);
           db.close();
        });
    });
});

router.get('/products', (request, response)=>{
   response.render('products');
});


router.post('/index', (req, res, next) => {
    console.log('A POST has been made!');
    res.render('index');
});

module.exports = router;