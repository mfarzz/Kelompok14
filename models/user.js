'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        User.hasOne(models.mahasiswa, {
        foreignKey: 'email',
        sourceKey: 'email'
      });
    }
  }
  User.init({
    email:{
      type: DataTypes.STRING,
      unique :true,
      primaryKey: true,
    },
    password: {
        type: DataTypes.STRING
      },
    role: {
        type: DataTypes.STRING
      },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

