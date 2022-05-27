const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
    database: 'node_e_commerce',
    password: '123'
});



module.exports = pool.promise()