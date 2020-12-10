'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Property);
    }
  };
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    status: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    login: {
      type: DataTypes.STRING,
      unique: true
    },
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};