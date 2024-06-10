const { fakultas, prodi, matkul } = require("../models");

const getProdi = async (email) => {
	try {
		const emailData = await prodi.findOne({
			where: {
				email: email,
			},
			include: {
				model: prodi,
				as: "prodi",
			},
		});
		return emailData;
	} catch (error) {
		console.error(error);
	}
};

const getMataKuliah = async (email) => {
	try {
		const prodis = await prodi.findAll({
			where: {
				kode_fakultas: email,
			},
			include: matkul, // Include Matkul association
		});

		// Extract Matkuls from Prodis and include nama_prodi
		const matkulObjects = prodis.reduce((acc, prodi) => {
			prodi.matkuls.forEach((matkul) => {
				acc.push({
					kode_matkul: matkul.kode_matkul,
					kode_prodi: matkul.kode_prodi,
					nama_matkul: matkul.nama_matkul,
					semester: matkul.semester,
					tahun_ajaran: matkul.tahun_ajaran,
					nama_prodi: prodi.nama_prodi, // Access nama_prodi from the associated Prodi model
				});
			});
			return acc;
		}, []);

		return matkulObjects;
	} catch (error) {
		console.error(error);
		throw error; // Rethrow the error to handle it further up the call stack
	}
};

module.exports = {
	getProdi,
	getMataKuliah,
};
