const db = require('./db')
const categories = require('./categories')(db)
const products = require('./products')(db)

const test = async () => {
  // await categories.create(['New category from api 2'])
  // await categories.remove(6)
  // await categories.update(5, ['Update from API'])
  // const cats = await categories.findAll()
  // console.log('CATS:', cats)
  // await products.addImage(3, ['img test', 'url'])
  // const prods = await products.findAll()
  // console.log(prods)
  // const prodsByCategory = await products.findAllByCategory(5)
  await products.updateCategories(3, [3])
  const prodsByCategory = await products.findAllPaginated()
  console.log(prodsByCategory)
}
test()
