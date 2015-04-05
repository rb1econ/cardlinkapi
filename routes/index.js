var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/auth', function(req,res,next){
	res.render('auth', {title: 'Login to Your Linkedin Account'})
});

router.get('/yourein', function(req, res, next){
	res.render('/yourein', title: 'You\'re In!')
});

module.exports = router;
