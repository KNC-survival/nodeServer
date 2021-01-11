'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instagram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Instagram.init({
    order: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    direction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instagram',
    timestamps: false,
  });
  return Instagram;
};
