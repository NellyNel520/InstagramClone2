'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    
		static associate(models) {
			User.hasMany(models.Post,{
        foreignKey:'userId',
      })
      User.hasMany(models.Comment,{
        foreignKey:'userId',
        as: 'owner'
      })
		}
  }
  User.init({
    username: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    profilePic: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};