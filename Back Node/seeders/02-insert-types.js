'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let types = [
        {
            "typeName": "Maison",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "typeName": "Appartement",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "typeName": "HLM",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "typeName": "Garage",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "typeName": "Villa",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        },
        {
            "typeName": "Cabanne",
            "updatedAt": new Date(),
            "createdAt": new Date(),
        }
    ]
   return queryInterface.bulkInsert('Types', types)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Types', null, {})
  }
};
