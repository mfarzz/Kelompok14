const { fakultas, prodi, matkul, perkuliahan } = require("../models");

const getPerkuliahan = async (email) => {
	try {
		const perkuliahanData = await perkuliahan.findAll({
			include: [
				{
					model: matkul,
					include: [
						{
							model: prodi,
							include: [
								{
									model: fakultas,
								},
							],
							where: { kode_fakultas: email },
						},
					],
				},
			],
		});
		return perkuliahanData;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to fetch perkuliahan.");
	}
};

module.exports = {
	getPerkuliahan,
};
