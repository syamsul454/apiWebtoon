'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {});
  user.associate = function(models) {
  user.hasMany(models.komik, {
    as : 'createdBy',
    foreignKey :'createdBy'
   })
  // user.hasMany(models.favorite, {
  //   as : 'UserFavorite',
  //   foreignKey : 'idUser'
  // })
  };

  user.beforeCreate((user) => {
      user.password = bcrypt.hashSync(user.password,10);
  })
  return user;
};