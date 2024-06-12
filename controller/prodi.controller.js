const bcrypt = require("bcrypt");
const { fakultas, prodi } = require("../models");

const getProdi = async (email) => {
	try {
		const emailData = await prodi.findAll({
			where: {
				kode_fakultas: email,
			},
		});
		return emailData;
	} catch (error) {
		console.error(error);
	}
};

const newProdi = async (data) => {
	try {
		const newProdi = await prodi.create({
			kode_prodi: data.kode_prodi,
			kode_fakultas: data.kode_fakultas,
			nama_prodi: data.nama_prodi,
			akreditasi: data.akreditasi,
			email_prodi: data.email_prodi,
			password_prodi: data.password_prodi,
			role: "prodi",
			createdAt: new Date(),
			updatedAt: new Date(),
		});
		return newProdi;
	} catch (error) {
		console.error(error);
	}
};

const editProdi = async (data) => {
	try {
		let updates = {
			kode_prodi: data.kode_prodi,
			nama_prodi: data.nama_prodi,
			akreditasi: data.akreditasi,
			email_prodi: data.email_prodi,
			updatedAt: new Date(),
		};

		// Check if a new password is provided
		if (data.password_prodi) {
			// Hash the new password
			const hashedPassword = await bcrypt.hash(data.password_prodi, 10);
			updates.password_prodi = hashedPassword;
		}

		// Perform the update
		const editedProdi = await prodi.update(updates, {
			where: {
				kode_prodi: data.kode_prodi,
			},
		});

		return editedProdi;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	getProdi,
	newProdi,
	editProdi,
};
