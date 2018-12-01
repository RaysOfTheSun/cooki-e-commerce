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
exports.GetCookiesByCategoryBasic = (req, res) => {
    collection.find({'category': req.params.category}, 'name image desc', (err, result) => {
        if (err) throw err;
        res.send(result);
    })
};

// grab all the cookies including all related fields
exports.GetCookie = (req, res) => {
    collection.find({'name': req.params.cookie}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

// get all the cookies. But, only include their name, basic description and display image
exports.GetCookieBasic = (req, res) => {
    collection.find({}, 'name image desc', (err, cookie) => {
        if (err) throw err;
        res.send(cookie);
    });
};

// get all the cookies. But, only include their name, full description and actual image
exports.GetCookieProductsBasic = (req, res) => {
    collection.find({}, 'name imageActual desc', (err, cookie) => {
        if (err) throw err;
        res.send(cookie);
    });
};

// get all cookies. But, only include additional facts
exports.GetInfo = (req, res) => {
    collection.find({}, 'name ingredients serving nutriFacts', (err, cookie) => {
        if (err) throw err;
        res.send(cookie);
    });
};

// get all cookies based on given category. But, only include additional facts
exports.GetInfoByCategory = (req, res) => {
    collection.find({'category': req.params.category}, 'name ingredients serving nutriFacts', (err, cookie) => {
        if (err) throw err;
        res.send(cookie);
    });
};