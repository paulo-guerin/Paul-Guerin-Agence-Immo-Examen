'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PropertyOption.belongsTo(models.Property);
      PropertyOption.belongsTo(models.Option);
    }
  };
  PropertyOption.init({
    PropertyId: DataTypes.INTEGER,
    OptionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PropertyOption',
  });
  return PropertyOption;
};