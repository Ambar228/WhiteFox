const jwt = require("jsonwebtoken");
const {Basket_dish, Basket, Dish} = require("../models/models");

class BasketController {

    async create(req, res) {
        // const token = req.headers.authorization.split(' ')[1]
        // const decoded = jwt.verify(token, process.env.Secret_KEY)
        // req.user = decoded
        // const userId = req.user.id
        // let {dishId} = req.params
        // const basket = await Basket.findOne({where: {userId: userId}})
        // const basketId = parseInt(basket.id)
        // await Basket_dish.create({basketId, dishId})
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.Secret_KEY)
        req.user = decoded
        const {dishId} = req.body
        const basket = await Basket_dish.create({basketId : req.user.id, dishId : dishId})
        return res.json(basket)
    }

    async get(req, res) {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.Secret_KEY)
        req.user = decoded
        const basket = await Basket_dish.findAll({include: {
                model: Dish
            }, where: {basketId: req.user.id}})
        if(!basket) res.status(400).json('None Id')
        return res.json(basket)
    }

    async deleteBasket(req, res) {
        const {id} = req.body
        if(!id) res.status(400).json('None Id')
        await Basket_dish.destroy({where: {id: id}})
        res.status(200).json('Product deleted')
    }
}

module.exports = new BasketController()