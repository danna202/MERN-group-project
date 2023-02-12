'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Checkout.init({
    order_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    total_cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Checkout',
  });
  return Checkout;
};