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
    checkout_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    total_cost:{
      type: DataTypes.INTEGER,
      allowNull: false,
    } 
  }, {
    sequelize,
    modelName: 'Checkout',
    tableName: 'checkouts',
    timestamps: false
  });
  return Checkout;
};