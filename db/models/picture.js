const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Sock, { foreignKey: 'picture_id' });
      // define association here
    }
  }
  Picture.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};
