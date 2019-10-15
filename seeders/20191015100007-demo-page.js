'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('pages', [
      {
        episodeId : 1,
        page : 'page_1',
        image : 'https://www.forbes.com/sites/joanmacdonald.jpg',
        createdAt: "2019-10-10T08:31:21+00:00",
        updatedAt: "2019-10-10T08:31:21+00:00"
       
      },

      {
        episodeId : 1,
        page : 'page_2',
        image : 'https://www.forbes.com/sites/joanmacdonald.jpg',
        createdAt: "2019-10-10T08:31:21+00:00",
        updatedAt: "2019-10-10T08:31:21+00:00"
       
      },
       {
        episodeId : 1,
        page : 'page_3',
        image : 'https://www.forbes.com/sites/joanmacdonald.jpg',
        createdAt: "2019-10-10T08:31:21+00:00",
        updatedAt: "2019-10-10T08:31:21+00:00"
       
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
