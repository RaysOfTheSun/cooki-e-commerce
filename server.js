let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let expressLayouts = require('express-ejs-layouts');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let ip = require('ip');
let app = express();

// set our favicon
app.use(favicon(path.join(__dirname, 'dist', 'app', 'images', 'favicon.ico')));

// set up our middleware
app.use(bodyParser.json());
app.use(cookieParser());

// view engine parameters
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views/'));

// where we'll be getting our assets
app.use(express.static(path.join(__dirname, 'dist', 'app')));

// root based routers
app.use('/', require('./routers/root'));
// routers used when interacting with our mongodb database
app.use('/get-products', require('./routers/get-products'));
// routers used when navigating to pages under the products route
app.use('/products', require('./routers/products'));

// listen for connections and other requests
app.listen(process.env.PORT || 3000, () => {
    console.log(`The application is live at ${ip.address()}:${process.env.PORT || 3000}`);
    console.log('Access the application on your current device by going to localhost:3000');
});