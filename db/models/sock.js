'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Color, { foreignKey: 'color_id' });
      this.belongsTo(models.Pattern, { foreignKey: 'pattern_id' });
      this.belongsTo(models.Picture, { foreignKey: 'picture_id' });
      // define association here
    }
  }
  Sock.init({
    color_id: DataTypes.INTEGER,
    pattern_id: DataTypes.INTEGER,
    picture_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};