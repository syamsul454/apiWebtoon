'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('users', [
      {
        email: 'syamsul@hadi.com',
        password: 'xxx',
        name: 'syamsul',
      },
      {
        email: 'syah@rini.com',
        password: 'xxx',
        name: 'herman'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
