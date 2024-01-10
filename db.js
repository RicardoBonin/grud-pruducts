const mysql = require('mysql2/promise')

// module.exports = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'cat-products',
// })

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'cat-products',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})
