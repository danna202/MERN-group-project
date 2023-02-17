'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init({
    food_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    food_name: {
      type: DataTypes.String,
      allowNull: false
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'Menu',
    tablename: 'menu',
    timestamps: false
  });
  return Menu;
};