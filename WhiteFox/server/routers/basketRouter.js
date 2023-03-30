const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require("../middlewire/authMiddleware");

router.get('/', authMiddleware , basketController.getBasketUser)
router.post('/:id', authMiddleware , basketController.addToBasket)
router.post('/delete' , basketController.deleteBasket)

module.exports = router