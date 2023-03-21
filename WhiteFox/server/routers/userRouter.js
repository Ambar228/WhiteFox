const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewire/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/authorization', authMiddleware,userController.check)

module.exports = router