let express = require('express');
let router = express.Router();
// set up mongoose
let mongoose = require('mongoose');
let cookieStop = require('../api/models/cookieModel'); // load up our mongoose model
let controller = require('../api/controllers/cookieController');
let connString = 'mongodb://localhost:27017/cookieStop'; // our connection string to our mongodb database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true});

router.get('/:category', controller.GetCookiesByCategory);
router.get('/', controller.GetAllCookies);

module.exports = router;
