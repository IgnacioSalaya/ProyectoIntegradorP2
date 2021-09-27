var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res) => {
    res.render('login', { style :'login'} )
});

module.exports = router;
