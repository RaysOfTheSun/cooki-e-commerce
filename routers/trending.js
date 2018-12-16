let router = require('express').Router();

router.get('/', (req, res)=>{
   res.render('trending');
});

module.exports = router;