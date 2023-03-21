const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.create)
router.get('/', orderController.getAll)
router.get('/user/:id',  orderController.getUserOrder)
router.get('/user/update:id', orderController.update)
router.get('/:id', orderController.getUserOrderList)

module.exports = router