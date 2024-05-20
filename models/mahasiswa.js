'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        mahasiswa.belongsTo(models.User, {
        foreignKey: 'email',
        targetKey: 'email'
      });
    }
  }
  mahasiswa.init({
    nim: {
      type: DataTypes.STRING,
      unique :true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fakultas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prodi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      references: {
        model: 'Users',
        key: 'email'
      }
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tempatlahir: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tanggallahir: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    agama: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jeniskelamin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'mahasiswa',
  });
  return mahasiswa;
};