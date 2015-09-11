var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'go.gman.io',
    user     : 'root',
    password : 'wlakscjs87',
    database : 'node'
});

db.connect();

module.exports = db;

//connection.connect();
//
//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//    if (err) throw err;
//    console.log('The solution is: ', rows[0].solution);
//});
//
//connection.end();