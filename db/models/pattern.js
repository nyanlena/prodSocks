'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Sock, { foreignKey: 'pattern_id' });
      // define association here
    }
  }
  Pattern.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pattern',
  });
  return Pattern;
};