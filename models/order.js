'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate({ Menu }) {
      //menu
      Order.hasMany(Menu, {
        foreignkey: "food_id",
        as: "menu"
      })
    
    }
  }
  Order.init({
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'order',
    timestamps: false
  });
  return Order;
};