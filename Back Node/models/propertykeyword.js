'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyKeyWord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PropertyKeyWord.belongsTo(models.Property);
      PropertyKeyWord.belongsTo(models.KeyWord);
    }
  };
  PropertyKeyWord.init({
    PropertyId: DataTypes.INTEGER,
    KeyWordId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PropertyKeyWord',
  });
  return PropertyKeyWord;
};