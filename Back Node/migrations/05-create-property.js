'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      location: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      room: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      picture: {
        type: Sequelize.TEXT
      },
      TypeId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Types',
          key: 'id'
        }
      },
      UserId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Properties');
  }
};