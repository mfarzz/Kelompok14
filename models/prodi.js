"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Prodi extends Model {
        static associate(models) {
            Prodi.belongsTo(models.fakultas, { foreignKey: 'kode_fakultas', targetKey: 'email'});
            Prodi.hasMany(models.Matkul, { foreignKey: 'kode_prodi'});
        }
    }
    Prodi.init({
        kode_prodi: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        kode_fakultas: DataTypes.STRING,
        nama_prodi: DataTypes.STRING,
        akreditasi: DataTypes.STRING,
        email_prodi: DataTypes.STRING,
        password_prodi: DataTypes.STRING,
        role: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        },
        {
        sequelize,
        modelName: "prodi",
        }
    );
    return Prodi;
};