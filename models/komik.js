'use strict';
module.exports = (sequelize, DataTypes) => {
  const komik = sequelize.define('komik', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavorite: DataTypes.STRING,
    image: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  komik.associate = function(models) {
   komik.belongsTo(models.user, {
    as : 'komik',
    foreignKey :'id'
   })
    komik.hasMany(models.episode, {
    as : 'Episode',
    foreignKey :'titleId'
   })

  };
  return komik;
  // return episode;
};