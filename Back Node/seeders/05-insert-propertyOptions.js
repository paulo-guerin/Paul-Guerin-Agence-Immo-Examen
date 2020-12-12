'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let propertyOptions = [
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 1,
            "OptionId": 1
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 1,
            "OptionId": 2
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 2,
            "OptionId": 1
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 2,
            "OptionId": 4
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 2,
            "OptionId": 5
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 4,
            "OptionId": 1
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 4,
            "OptionId": 2
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 4,
            "OptionId": 3
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 4,
            "OptionId": 4
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 4,
            "OptionId": 5
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 5,
            "OptionId": 1
        },
        {
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "PropertyId": 6,
            "OptionId": 2
        },
        
    ]
   return queryInterface.bulkInsert('PropertyOptions', propertyOptions)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('PropertyOptions', null, {})
  }
};