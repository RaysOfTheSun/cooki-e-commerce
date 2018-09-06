let express = require('express');
let path = require('path');
let expressLayouts = require('express-ejs-layouts');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let app = express();

let rootRoutes = require('./routes/root');

app.use(bodyParser.json());
app.use(cookieParser());
// view engine parameters
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views/'));
// routes
app.use('/', rootRoutes);
// where we'll be getting our assets
app.use(express.static('dist'));
// app.use('/public/assets', express.static(path.join(__dirname, './dist/assets')));

app.listen(3000, () => {
    console.log('Now listening on port 3000.');
})