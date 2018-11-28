let mongoose = require('mongoose');
let collection = mongoose.model('cookies');

// retrieve all cookies regardless of category
exports.GetAllCookies = (req, res) => {
    collection.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
};

// retrieve cookies based on the given category
exports.GetCookiesByCategory = (req, res) => {
    collection.find({'category': req.params.category}, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
};

exports.GetCookie = (req, res) => {
    collection.find({'name': req.params.cookie}, (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
};