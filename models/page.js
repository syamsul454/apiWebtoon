'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define('page', {
    episodeId: DataTypes.INTEGER,
    page: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  page.associate = function(models) {
    page.belongsTo(models.episode, {
      as: 'Page',
      foreignKey: 'episodeId',
    })
  };
  return page;
};