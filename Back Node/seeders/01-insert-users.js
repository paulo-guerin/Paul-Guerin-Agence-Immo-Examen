'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [];
    for(let i=0; i <10; i++){
      users.push({
        "name": "admin",
        "login": "admin"+i,
        "password": "$2b$10$5e2uQTevLe5uJ38o1YsTCOpLk/kc9TVfzPDfOOKozW9QESFZEzh3i",
        "age": 38,
        "status": "admin",
        "picture": "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
        "updatedAt": new Date(),
        "createdAt": new Date(),
      });
    };
    console.log('10 admins insérés');
    for(let i=0; i <10; i++){
      users.push({
        "name": "user",
        "login": "user"+i,
        "password": "$2b$10$5e2uQTevLe5uJ38o1YsTCOpLk/kc9TVfzPDfOOKozW9QESFZEzh3i",
        "age": 38,
        "status": "user",
        "picture": "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
        "updatedAt": new Date(),
        "createdAt": new Date(),
      });
    };
    console.log('10 users insérés');
    for(let i=0; i <10; i++){
      users.push({
        "name": "agent",
        "login": "agent"+i,
        "password": "$2b$10$5e2uQTevLe5uJ38o1YsTCOpLk/kc9TVfzPDfOOKozW9QESFZEzh3i",
        "picture": "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
        "age": 38,
        "status": "agent",
        "updatedAt": new Date(),
        "createdAt": new Date(),
      });
    };
    console.log('10 agents insérés');
   return queryInterface.bulkInsert('Users', users)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
