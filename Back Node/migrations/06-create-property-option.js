'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PropertiesOptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PropertyId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Properties',
          key: 'id'
        },
        unique: 'PropertyOption'
      },
      OptionId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Options',
          key: 'id'
        },
        unique: 'PropertyOption'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    // Unique 
    .then(function() {
      return queryInterface.sequelize.query(
        'ALTER TABLE `PropertiesOptions` ADD UNIQUE `unique_index`(`PropertyId`, `OptionId`)'
      );
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PropertiesOptions');
  }
};