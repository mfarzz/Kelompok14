"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Matkul extends Model {
		static associate(models) {
			Matkul.belongsTo(models.prodi, {
				foreignKey: "kode_prodi",
				targetKey: "kode_prodi",
			});
			Matkul.hasMany(models.perkuliahan, {
				foreignKey: "kode_matkul",
				sourceKey: "kode_matkul",
			});
		}
	}
	Matkul.init(
		{
			kode_matkul: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			kode_prodi: DataTypes.STRING,
			nama_matkul: DataTypes.STRING,
			semester: DataTypes.INTEGER,
			tahun_ajaran: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "matkul",
		}
	);
	return Matkul;
};
