var express = require('express');
var router = express.Router();

var db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {

  var dbResult;

  db.query('SELECT * FROM t_log', function(err, rows, fields) {
    if (err) throw err;

    console.dir(rows)
    res.render('index', {data:rows});
  });
});

module.exports = router;
