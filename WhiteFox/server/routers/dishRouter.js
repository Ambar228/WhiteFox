const Router = require('express')
const router = new Router()
const dishController = require('../controllers/dishController')

router.post('/', dishController.create)
router.get('/', dishController.getALL)
router.get('/:id', dishController.getOne)
router.delete('/:id', dishController.deleteOne)

module.exports = router