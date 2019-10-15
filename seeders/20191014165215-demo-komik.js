'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('komiks', [
      
  {
    title: "True Beauty",
    genre: "drama",
    isFavorite: false,
    image: "https://www.forbes.com/sites/joanmacdonald.jpg",
    createdBy: 1,
    createdAt: "2019-10-10T08:31:21+00:00",
    updatedAt: "2019-10-10T08:31:21+00:00"
    
  },
  {
    title: "Age Matters",
    genre: "Romance",
    isFavorite:false,
    image: "https://www.forbes.com/sites/joanmacdonald.jpg",
    createdBy: 1,
    createdAt: "2019-10-10T08:31:21+00:00",
    updatedAt: "2019-10-10T08:31:21+00:00",
   
  },
  {
    title: "A Good Day to be a Dog",
    genre: "Drama",
    isFavorite: true,
    image: "https://www.forbes.com/sites/joanmacdonald.jpg",
    createdBy: 1,
    createdAt: "2019-10-10T08:31:21+00:00",
    updatedAt: "2019-10-10T08:31:21+00:00",
    
  }

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
