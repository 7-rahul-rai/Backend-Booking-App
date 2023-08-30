var mysql = require('mysql2')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '12345',
    database : 'bookings'
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('connection is connnected successfully')
})

module.exports = connection;