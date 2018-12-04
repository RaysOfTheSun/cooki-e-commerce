let express = require('express');
let router = express.Router();
// set up mongoose
let mongoose = require('mongoose');
let cookieStop = require('../api/models/cookieModel'); // load up our mongoose model
let controller = require('../api/controllers/cookieController');
mongoose.Promise = global.Promise;
let string = 'mongodb://127.0.0.1:27017/cookieStop';
mongoose.connect(process.env.MONGODB || string, {useNewUrlParser: true});

router.get('/cookie/:cookie', controller.GetCookie);
router.get('/category/:category', controller.GetCookiesByCategoryBasic);
router.get('/', controller.GetAllCookies);
router.get('/basic', controller.GetCookieBasic);
router.get('/cookie-products', controller.GetCookieProductsBasic);
router.get('/cookie-products/info', controller.GetInfo);

module.exports = router;