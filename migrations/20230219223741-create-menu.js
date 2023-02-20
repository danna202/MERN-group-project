'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('menus', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
      
      },
      food_name: {
        type: Sequelize.STRING,
     
      },
      customer_name: {
        type: Sequelize.STRING,
       
      },
      price: {
        type: Sequelize.DECIMAL,
      
      },
      descript: {
        type: Sequelize.STRING,
        
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('menus');
  }
};