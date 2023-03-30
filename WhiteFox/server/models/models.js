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
    price: {type: DataTypes.DECIMAL, defaultValue: 0},
    numberOfDish: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Basket_Dish = sequelize.define('basket_dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Order_Dish = sequelize.define('order_dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING,  allowNull: false},
    addressee: {type: DataTypes.STRING, allowNull: false},
    status:{type: DataTypes.STRING, defaultValue: "Не принят"},
    price: {type: DataTypes.DECIMAL, defaultValue: 0},
    numberOfDish: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Dish = sequelize.define('dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    compound: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false, allowNull: true},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Order_Dish);
Order_Dish.belongsTo(Order);

Basket.hasMany(Basket_Dish);
Basket_Dish.belongsTo(Basket);

Order.hasOne(User);
User.belongsTo(Order);

Type.hasMany(Dish);
Dish.belongsTo(Type);

Dish.hasMany(Basket_Dish);
Basket_Dish.belongsTo(Dish);

Dish.hasMany(Order_Dish);
Order_Dish.belongsTo(Dish);



module.exports = {
    User,
    Basket,
    Basket_Dish,
    Dish,
    Type,
    Order,
    Order_Dish,
}
