const {Dish} = require('../models/models')
const ApiError = require('../errors/ApiError')
const uuid = require('uuid')
const path = require('path')

class DishController {

    async create(req, res, next) {
        try {
            const {name, compound, price, typeId} = req.body
            // const {img} = req.files
            // let fileName = uuid.v4() + ".jpeg"
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const dish = await Dish.create({name, compound, price, typeId})
            return res.json(dish)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getALL(req, res) {
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let dish;
        if (!typeId) {
            dish = await Dish.findAndCountAll({limit, offset})
        }
        else dish = await Dish.findAndCountAll({where:{typeId}, limit, offset})
        return res.json(dish)
    }

    async getOne(req, res) {
        const {id} = req.params
        const dish = await Dish.findOne({ where: {id}})
        return res.json(dish)
    }

    async deleteOne(req, res) {
        const {id} = req.params
        const dish = await Dish.destroy({ where: {id}})
        return res.json(dish)
    }
}
module.exports = new DishController()