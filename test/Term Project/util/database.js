const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: '455project',
    password: 'cmpe455'
});

module.exports = pool.promise();