let router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('products')
});

router.get('/cookies', (req, res)=>{
    res.render('cookies');
});

module.exports = router;
