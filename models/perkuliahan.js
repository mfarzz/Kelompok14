// models/matkul.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Perkuliahan extends Model {
        static associate(models) {
            Perkuliahan.belongsTo(models.Matkul, { foreignKey: 'kode_matkul', targetKey: 'kode_matkul'});
            Perkuliahan.hasMany(models.detailperkuliahan, { foreignKey: 'kode_perkuliahan', sourceKey: 'kode_perkuliahan' });
            Perkuliahan.belongsToMany(models.Dosen, { through: models.detailperkuliahan, foreignKey: 'kode_perkuliahan', otherKey: 'nip_dosen' }); 
        }
    }
    
    Perkuliahan.init({
        kode_perkuliahan: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        kode_matkul: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'matkuls',
                key: 'kode_matkul',
            },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        },
        jadwal_kuliah: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ruang_kuliah: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nama_kelas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kuota: {
            type: DataTypes.INTEGER,
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
    modelName: 'Perkuliahan',
    });
    return Perkuliahan;
};
