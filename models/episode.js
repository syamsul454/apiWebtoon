'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    titleId: DataTypes.INTEGER,
    episode: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  episode.associate = function(models) {
    episode.belongsTo(models.komik, {
    as : 'Episode',
    foreignKey :'titleId'
   })
    episode.hasMany(models.page, {
    as : 'pages',
    foreignKey :'episodeId'
   })
  };
  return episode;
};