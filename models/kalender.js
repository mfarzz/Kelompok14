"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Kalender extends Model {
		static associate(models) {
			Kalender.belongsTo(models.fakultas, {
				foreignKey: "email",
				targetKey: "email",
			});
		}
	}
	
	Kalender.init(
		{
			kode_kalender: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			email: DataTypes.STRING,
			file_kalender: DataTypes.STRING,
			tahun_ajaran: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "kalender",
		}
	);
	return Kalender;
};
