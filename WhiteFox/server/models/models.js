const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const OrderDish = sequelize.define('order_dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING,  allowNull: false},
    postcode: {type: DataTypes.STRING, allowNull: false},
    addressee: {type: DataTypes.STRING, allowNull: false},
    status:{type: DataTypes.INTEGER, defaultValue: 1}
})

const Basket_dish = sequelize.define('basket_dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Dish = sequelize.define('dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    compound: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false, allowNull: true},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(Basket_dish)
Basket_dish.belongsTo(Basket)

Dish.hasMany(Basket_dish)
Basket_dish.belongsTo(Dish)

Type.hasMany(Dish)
Dish.belongsTo(Type)

Dish.hasMany(Rating)
Rating.belongsTo(Dish)

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderDish);
OrderDish.belongsTo(Order);

Order.hasOne(User);
User.belongsTo(Order);

Dish.hasMany(OrderDish);
OrderDish.belongsTo(Dish);



module.exports = {
    User,
    Basket,
    Basket_dish,
    Dish,
    Type,
    Rating,
    Order,
    OrderDish
}