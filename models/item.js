'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.User, { through: models.Transaction, foreignKey: "ItemId" })
    }
  };
  Item.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    availability: DataTypes.INTEGER,
    picture: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (item, options) => {
        item.availability = item.stock
      }
    },
    sequelize,
    modelName: 'Item',
  });
  return Item;
};