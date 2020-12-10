'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('KeyWords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      word: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
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
    //Unique
    .then(function() {
      return queryInterface.sequelize.query(
        'ALTER TABLE `KeyWords` ADD UNIQUE `unique_index`(`word`)'
      );
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('KeyWords');
  }
};