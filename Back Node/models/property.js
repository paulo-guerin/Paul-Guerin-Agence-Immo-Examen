'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.belongsToMany(models.Option, { through: models.PropertyOption});
      Property.hasMany(models.PropertyOption);
      Property.belongsToMany(models.KeyWord, { through: models.PropertyKeyWord});
      Property.hasMany(models.PropertyKeyWord);
      Property.belongsTo(models.Type);
      Property.belongsTo(models.User);
    }
  };
  Property.init({
    price: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    location: DataTypes.TEXT,
    room: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    picture: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};