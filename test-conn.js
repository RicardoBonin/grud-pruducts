// Start BD sudo /opt/lampp/manager-linux-x64.run

const mysql = require('mysql2/promise')

const run = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'cat-products',
    })

    try {
      const [results, fields] = await connection.query('select * from categories')

      console.log(results, fields)
    } catch (error) {
      console.log(error)
    }
  } catch (err) {
    console.log(err)
  }
}

run()
