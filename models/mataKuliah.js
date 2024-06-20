// models/matkul.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Matkul extends Model {
        static associate(models) {
            Matkul.belongsTo(models.prodi, { foreignKey: 'kode_prodi', targetKey: 'kode_prodi'});
            Matkul.hasMany(models.Perkuliahan, { foreignKey: 'kode_matkul'});
        }
    }
    
    Matkul.init({
        kode_matkul: {
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
        nama_matkul: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        semester: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tahun_ajaran: {
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
        modelName: 'Matkul',
    });
    return Matkul;
};
