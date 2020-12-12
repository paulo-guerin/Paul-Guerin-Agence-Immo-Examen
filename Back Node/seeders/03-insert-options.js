'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let options = [
        {
            "option": "Balcon",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "option": "Jardin",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "option": "Piscine",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "option": "Place de parking",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "option": "Résidence sécurisée",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        }
    ]
   return queryInterface.bulkInsert('Options', options)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Options', null, {})
  }
};
