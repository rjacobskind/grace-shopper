const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([{
  name: "Amortentia",
  description: "The world's strongest Love Potion; does not create real love, just powerful obsession.",
  image: "http://vignette3.wikia.nocookie.net/dungeonboss/images/3/3c/Heal_Potion_Icon.png/revision/latest?cb=20160510154959",
  inventoryAmount: 20,
  price: 350,
  category: 'heart'
},
	{name: "Manegro", description: "Causes hair on drinker's head to grow out rapidly", image: "http://vignette1.wikia.nocookie.net/harrypotter/images/e/eb/PDS.png/revision/latest?cb=20140730215243", inventoryAmount: 30, price: 120, category: 'body'},
	{name: "Deflating Draught", description: "A potion that deflates anything swollen by magical means.", image: "http://vignette2.wikia.nocookie.net/harrypotter/images/5/55/BeautificationPotionBottle.png/revision/latest?cb=20150226162151", inventoryAmount: 10, price: 470, category: 'misc'},
	{name: "Wiggenweld Potion", description: "Awakens a person from magically-induced sleep.", image: "https://s-media-cache-ak0.pinimg.com/originals/4c/1c/46/4c1c463aa7e691e81f2866307a9b6702.jpg", inventoryAmount: 40, price: 800, category: 'body'},
	{name: "Skele-Gro", description: "Regrows missing bones.", image: "http://vignette3.wikia.nocookie.net/herebemonsters/images/f/f6/Revive_potion.png/revision/latest?cb=20130728134847", inventoryAmount: 10, price: 250, category: 'body'},
	{name: "Truth Serum", description: "Makes the drinker tell the truth.", image: "http://vignette3.wikia.nocookie.net/roblox-medieval-warfare-reforged/images/c/c4/Dream_potion_for_wings.png/revision/latest?cb=20150311224443", inventoryAmount: 10, price: 650, category: 'heart'},
	], product => db.model('product').create(product))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
