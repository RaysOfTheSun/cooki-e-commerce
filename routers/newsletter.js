let router = require('express').Router();

router.get('/', (req, res) => {
    res.render('newsletter');
});

module.exports = router;