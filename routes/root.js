let express = require('express');
let router = express.Router();

router.get('/index', (request, response, next) => {
    response.render('home');
});

module.exports = router;