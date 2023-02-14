'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    food_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    food_name:{
      type: DataTypes.STRING,
      allowNull: false,
    } 
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'order',
    timestamps: false
  });
  return Order;
};