const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Like.init({
    user_id: DataTypes.INTEGER,
    pet_name: DataTypes.STRING,
    pet_sex: DataTypes.STRING,
    pet_age: DataTypes.INTEGER,
    pet_pic_url: DataTypes.STRING,
    type: DataTypes.STRING,
    like: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
