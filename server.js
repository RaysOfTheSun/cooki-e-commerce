let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let app = express();

app.use(bodyParser.json());
app.use(cookieParser());
// where we'll be getting our assets
app.use('/public', express.static(path.join(__dirname, './dist')));
// view engine parameters
app.engine('html', require('ejs').render);
app.set('views', path.join(__dirname, './views/'));

app.listen(3000, () => {
    console.log('Now listening on port 3000.');
})