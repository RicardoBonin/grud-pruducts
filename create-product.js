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
      const [results, fields] = await connection.query('insert into products (product, price) value (?, ?)', ['Product 1', 999])
      await connection.query('insert into categories_products (product_id, category_id) value (?, ?)', [results.insertId, 2])

      console.log(results, fields)
    } catch (error) {
      console.log(error)
    }
  } catch (err) {
    console.log(err)
  }
}

run()
