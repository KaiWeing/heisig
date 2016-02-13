var express = require('express');
var heisigdb = require('./../data/deutsch');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/heisig', function(req, res) {
  var heisigNr = parseInt(req.body.heisig);
  res.redirect("http://jisho.org/search/" + heisigdb.k[heisigNr] + " %23kanji");
});

module.exports = router;
