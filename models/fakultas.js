"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Fakultas extends Model {
        static associate(models) {
            // Fakultas.hasMany(models.kalender, { foreignKey: 'email'});
            // Fakultas.hasMany(models.pemberitahuan, { foreignKey: 'email'});
            Fakultas.hasMany(models.prodi, { foreignKey: 'kode_fakultas'});
        }
    }
    Fakultas.init({
        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nama_fakultas: DataTypes.STRING,
        password_fakultas: DataTypes.STRING,
        role: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        },
        {
        sequelize,
        modelName: "fakultas",
        }
    );
    return Fakultas;
};