'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class detailperkuliahan extends Model {
        static associate(models) {
            detailperkuliahan.belongsTo(models.Dosen, { foreignKey: 'nip_dosen', targetKey: 'nip_dosen' });
            detailperkuliahan.belongsTo(models.Perkuliahan, { foreignKey: 'kode_perkuliahan', targetKey: 'kode_perkuliahan' });
        }
    }
    detailperkuliahan.init({
        nip_dosen: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'dosens',
                key: 'nip_dosen',
            },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        },
        kode_perkuliahan: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'perkuliahans',
                key: 'kode_perkuliahan',
            },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    modelName: 'detailperkuliahan',
    });
    return detailperkuliahan;
};