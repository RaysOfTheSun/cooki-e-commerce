let express = require('express');
let router = express.Router();

router.get('/', (request, response, next) => {
    response.render('index');
});

router.get('/products', (request, response) => {
    response.render('products');
});


router.post('/', (req, res) => {
    console.log('A POST has been made!');
    res.render('index');
});

module.exports = router;