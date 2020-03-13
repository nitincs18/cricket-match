var mysql = require('mysql');
var pool  = null;

exports.connect = function() {
  pool = mysql.createPool({
    host     : 'mydb.cirwo27vvgmz.ap-south-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'Nitin_0102',
    database : 'match'
  });
}

exports.get = function() {
  return pool;
}
