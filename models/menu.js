const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URL)

//model
class Menu extends Model{}
    Menu.init({
        food_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        food_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Menu',
        tableName: 'menu',
        timestamps: false
    })


//export
module.export = Menu