var express = require('express');
var router = express.Router();

/* GET myData page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sai Prathap Reddy Pulagam' });
});

module.exports = router;
