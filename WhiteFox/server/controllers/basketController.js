const jwt = require("jsonwebtoken");
const {Dish, Basket_Dish} = require("../models/models");

class BasketController {

    async addToBasket(req, res, next) {
        const user = req.user
        const {id} = req.params
        console.log(req.params)
        const basketId = user.id
        const basket = await Basket_Dish.create({basketId, dishId: id})
        return res.json(basket)
    }


    async getBasketUser(req, res) {
        let basketArrayId = []
        const products = []
        const {id} = req.user
        const basket = await Basket_Dish.findAll({where: {basketId: id}})
        basket.forEach(b => basketArrayId.push(b.dishId))
        for (let i = 0; i < basketArrayId.length; i++) {
            let id = basketArrayId[i]
            const product = await Dish.findOne({ where : {id: id}})
            products.push(product)
        }
        return res.json(products)
    }

    async deleteBasket(req, res) {
        const {id} = req.body
        if (!id) res.status(400).json('None Id')
        await Basket_Dish.destroy({where: {id: id}})
        res.status(200).json('Product deleted')
    }
}

module.exports = new BasketController()