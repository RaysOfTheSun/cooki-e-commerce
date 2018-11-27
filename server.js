let express = require('express');
let path = require('path');
let expressLayouts = require('express-ejs-layouts');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let ip = require('ip');
let app = express();

let rootRoutes = require('./routes/root');
let getProductRoutes = require('./routes/products');

app.use(bodyParser.json());
app.use(cookieParser());
// view engine parameters
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views/'));
// routes
app.use('/', rootRoutes);
// used when interacting with our mongodb database
app.use('/get-products', getProductRoutes);
// where we'll be getting our assets
app.use(express.static('./dist/app/'));

app.listen(3000, () => {
    console.log(`The application is live at ${ip.address()}:3000`);
    console.log('Access the application on your current device by going to localhost:3000');
});