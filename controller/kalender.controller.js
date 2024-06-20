const { fakultas, prodi, Matkul, kalender } = require("../models");

const newKalender = async (data) => {
	try {
		const { kode_kalender, email, file_kalender, tahun_ajaran } = data;
		const newKalender = await kalender.create({
			kode_kalender,
			email,
			file_kalender,
			tahun_ajaran,
		});
		return newKalender;
	} catch (error) {
		console.log(error);
	}
};

const getKalender = async (email) => {
	try {
		const kalenderData = await kalender.findAll({
			where: {
				email: email,
			},
		});
		return kalenderData;
	} catch (error) {
		console.error(error);
	}
};

const editKalender = async (data) => {
	try {
		let updates = {
			kode_kalender: data.kode_kalender,
			file_kalender: data.file_kalender,
			tahun_ajaran: data.tahun_ajaran,
		};

		const editedKalender = await kalender.update(updates, {
			where: {
				kode_kalender: data.kode_kalender,
			},
		});

		return editedKalender;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	newKalender,
	getKalender,
	editKalender,
};
