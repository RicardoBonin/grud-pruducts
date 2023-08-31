const db = require('./db')
const categories = require('./categories')(db)

const test = async () => {
  // await categories.create(['New category from api 2'])
  // await categories.remove(6)
  // await categories.update(5, ['Update from API'])
  const cats = await categories.findAll()
  console.log('CATS:', cats)
}
test()
