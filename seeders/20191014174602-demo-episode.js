'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
   
{
titleId: 1,
epidode : "episode 1",
imagekey: "value",  "https://www.forbes.com/sites/joanmacdonald.jpg",
createdAt: "2019-10-10T08:31:21+00:00",
updatedAt: "2019-10-10T08:31:21+00:00"
},
{
title: 1,
title: "Ep. 2",
image: "https://www.forbes.com/sites/joanmacdonald.jpg",
createdAt: "2019-10-10T08:31:21+00:00",
updatedAt: "2019-10-10T08:31:21+00:00"
},
{
title: 1,
title: "Ep. 3",
image: "https://www.forbes.com/sites/joanmacdonald.jpg",
createdAt: "2019-10-10T08:31:21+00:00",
updatedAt: "2019-10-10T08:31:21+00:00"
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
