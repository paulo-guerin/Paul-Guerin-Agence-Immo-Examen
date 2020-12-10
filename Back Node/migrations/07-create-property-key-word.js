'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PropertiesKeyWords', {
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
        unique: 'PropertiesKeyWord'
      },
      KeyWordId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'KeyWords',
          key: 'id'
        },
        unique: 'PropertiesKeyWord'
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
        'ALTER TABLE `PropertiesKeyWords` ADD UNIQUE `unique_index`(`PropertyId`, `KeyWordId`)'
      );
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PropertiesKeyWords');
  }
};