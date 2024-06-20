// models/dosen.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    static associate(models) {
      Dosen.belongsTo(models.prodi, { foreignKey: 'kode_prodi', targetKey: 'kode_prodi' });
      Dosen.hasMany(models.detailperkuliahan, { foreignKey: 'nip_dosen', sourceKey: 'nip_dosen' });
      Dosen.belongsToMany(models.Perkuliahan, { through: models.detailperkuliahan, foreignKey: 'nip_dosen', otherKey: 'kode_perkuliahan' });
    } 
  }
  Dosen.init({
    nip_dosen: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    kode_prodi: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'prodis',
        key: 'kode_prodi',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    nama_dosen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pendidikan_terakhr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Dosen',
  });
  return Dosen;
};