const {Type, Basket_dish, OrderDish, Dish, Basket, Order} = require("../models/models");

class OrderController {

    async create(req, res, next) {
        let newOrder = {
            userId: req.body.id ,
            phone: req.body.phone,
            postcode: req.body.postcode,
            addressee: req.body.addressee
        }

        const userId = newOrder.userId

        const basket = await Basket.findOne({where: {userId: userId}})
        const basketId = parseInt(basket.id);
        const basketDish = await Basket_dish.findAll({where: {basketId: basketId}})

        if (basketDish.length >= 1)
        {
            console.log(Order)
            const order = await Order.create(newOrder)
            basketDish.forEach(i =>
                    OrderDish.create({
                        orderId: order.id,
                        deviceId: i.deviceId,
                        basketId: i.id,
                    }),
                await Basket_dish.destroy({where: {basketId: req.body.id}})
            )
            res.status(201).json(order)
        }
        res.status(404)
        console.log("haven't dishes")
    }

    async getAll(req, res) {
        const order = await Order.findAll()
        return res.json(order)
    }

    async getUserOrder(req,res){
        const {id} = req.params
        const date = await Order.findAll({where: {userId: id}} )
        // delete the dot and everything after
        return res.json(date)
    }
    async getUserOrderList(req,res){
        const {id} = req.params
        await Order.findOne( {where: {id: id}})
        const a =  await OrderDish.findAll({include: {
                model: Dish
            }, where: {orderId: id}});
        return res.json(a)
    }

    async update(req, res) {
        const {_id,_status} = req.params
        const device = await Order.update(
            {status: _status},
            {where: {id: _id}}
        )
        return res.json(device)
    }
}
module.exports = new OrderController()