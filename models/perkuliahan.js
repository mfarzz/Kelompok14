"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Perkuliahan extends Model {
		static associate(models) {
			Perkuliahan.belongsTo(models.matkul, {
				foreignKey: "kode_matkul",
				targetKey: "kode_matkul",
			});
		}
	}
	Perkuliahan.init(
		{
			kode_perkuliahan: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			kode_matkul: {
				type: DataTypes.STRING,
				allowNull: false,
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
			semester: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			tahun_ajaran: {
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
		},
		{
			sequelize,
			modelName: "perkuliahan",
		}
	);
	return Perkuliahan;
};
