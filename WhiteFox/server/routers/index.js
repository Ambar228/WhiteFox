const Router = require('express')
const router = new Router()
const dishRouter = require('./dishRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/dish', dishRouter)

module.exports = router