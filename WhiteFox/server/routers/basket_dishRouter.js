const Router = require('express')
const router = new Router()
const basket_dishController = require('../controllers/basket_dishController')

router.post('/', basket_dishController.create)
router.get('/', basket_dishController.get)

module.exports = router