'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define('page', {
    episodeId: DataTypes.INTEGER,
    page: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  page.associate = function(models) {
    // associations can be defined here
  };
  return page;
};