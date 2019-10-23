'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    idUser: DataTypes.INTEGER,
    idComic: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {
   //  favorite.belongsTo(models.user, {
   //  as : 'UserFavorite',
   //  foreignKey :'IdUser'
   // })
    favorite.belongsTo(models.komik, {
    as : 'favo',
    foreignKey :'idComic'
   })

  };
  return favorite;
};