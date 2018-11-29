let express = require('express');
let router = express.Router();
// set up mongoose
let mongoose = require('mongoose');
let cookieStop = require('../api/models/cookieModel'); // load up our mongoose model
let controller = require('../api/controllers/cookieController');
mongoose.Promise = global.Promise;
let string = 'mongodb://127.0.0.1:27017/cookieStop';
mongoose.connect(process.env.MONGODB || string, {useNewUrlParser: true});

router.get('/:category', controller.GetCookiesByCategory);
router.get('/', controller.GetAllCookies);

module.exports = router;