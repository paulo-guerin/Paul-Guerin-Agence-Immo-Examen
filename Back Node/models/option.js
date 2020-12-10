'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Option.belongsToMany(models.Property, { through: models.PropertyOption});
      Option.hasMany(models.PropertyOption);
    }
  };
  PropertyOption.init({
    option: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Option',
  });
  return Option;
};