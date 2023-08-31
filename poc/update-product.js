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
      const [results, fields] = await connection.query('update products set product = ?, price = ?  where id = ?', ['New prod name', 888, 3])

      console.log(results, fields)
    } catch (error) {
      console.log(error)
    }
  } catch (err) {
    console.log(err)
  }
}

run()
